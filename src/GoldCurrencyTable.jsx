import { useState, useEffect } from "react";
import axios from "axios";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";

const CurrencyPrice = () => {
  const [prices, setPrices] = useState({});
  const [previousPrices, setPreviousPrices] = useState({});
  const [firstPrices, setFirstPrices] = useState({});
  const [firstTime, setFirstTime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPrices = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('Access-Control-Allow-Origin',"https://www.tala.ir/banner");
      const data = response.data;

      if (data) {
        const newPrices = {
          "طلای 18 عیار": { price: data.geram18 || 0 },
          "سکه امامی": { price: data.sekkejad || 0 },
          "ربع سکه": { price: data.sekkerob || 0 },
          "نیم سکه": { price: data.sekkenim || 0 },
          "سکه بهار آزادی": { price: data.sekkegad || 0 },
          "دلار": { price: data.usd || 0 },
        };

        const updateTime = data.time || "";

        setPreviousPrices(prices);

        setFirstPrices((prev) => {
          let updatedFirstPrices = { ...prev };

          if (!firstTime || updateTime < firstTime) {
            updatedFirstPrices = {};
            setFirstTime(updateTime);
          }

          Object.entries(newPrices).forEach(([name, data]) => {
            if (!updatedFirstPrices[name]) {
              updatedFirstPrices[name] = data.price;
            }
          });

          return updatedFirstPrices;
        });

        setPrices(newPrices);
      } else {
        setError("اطلاعات موجود نیست");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("خطا در دریافت اطلاعات");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mt-2 p-4">
      <p className="hidden p-2">نرخ لحظه‌ای ارز و طلا / تومان</p>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
        {Object.entries(prices).map(([name, data]) => {
          const previousPrice = previousPrices[name]?.price || data.price;
          const firstPrice = firstPrices[name] || data.price;

          const priceDifference = data.price - previousPrice;
          const isPriceUp = priceDifference > 0;
          const isPriceDown = priceDifference < 0;

          const dailyChange = data.price - firstPrice;
          const dailyChangePercent = ((dailyChange / firstPrice) * 100).toFixed(2);

          return (
            <div key={name} className="shadow-lg rounded-lg p-3 bg-white">
              <div className="flex justify-between text-center items-center bg-gray-200 p-2 rounded-t-lg text-[12px] lg:text-[14px]">
                <span className="font-bold mx-auto">{name}</span>
              </div>
              <div className={`lg:text-[16px] md:text-[15px] text-[12px] font-bold text-center py-2 flex items-center justify-center ${isPriceUp ? "text-green-600" : isPriceDown ? "text-red-600" : "text-black"}`}>
                {isPriceUp && <IoChevronUp className="w-5 h-5 text-green-600 mr-1" />}
                {isPriceDown && <IoChevronDown className="w-5 h-5 text-red-600 mr-1" />}
                {data.price.toLocaleString("fa-IR")} تومان
              </div>
              <hr className="my-2 hidden" />
              <div className="flex hidden justify-between text-sm text-gray-600 px-2">
                <span>٪ {dailyChangePercent}</span>
                <span>{dailyChange.toLocaleString("fa-IR")} تومان</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurrencyPrice;