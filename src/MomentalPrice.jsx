import { useEffect, useState } from "react";
import axios from "axios";
import { GoArrowUpLeft, GoArrowDownLeft } from "react-icons/go";

// ✅ Helper to convert numbers to Persian digits
const toPersianDigits = (num) => {
  if (!num) return "-";
  const formattedNumber = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return formattedNumber.replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);
};

// ✅ Reusable PriceCard Component
const PriceCard = ({ title, value, isUp }) => {
  const pingColor = isUp ? "bg-green-600" : "bg-red-600";

  return (
    <div className="flex-1 p-3 border flex justify-between items-center hover:bg-gray-50 transition rounded-lg">
      <div className="flex flex-col">
        <div className="text-[12px] font-bold">{title}</div>
        <div className="flex gap-1 items-center">
          <div className="text-[14px]">{toPersianDigits(value)}</div>
          <div className={`text-[15px] ${isUp ? "text-green-600" : "text-red-600"}`}>
            {isUp ? <GoArrowUpLeft /> : <GoArrowDownLeft />}
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center h-5 w-5 mx-3">
        <span className={`animate-ping absolute inline-flex h-[10px] w-[10px] rounded-full ${pingColor} opacity-100`}></span>
        <span className={`inline-flex h-[0px] w-[0px] rounded-full ${pingColor}`}></span>
      </div>
    </div>
  );
};

// ✅ Main Dashboard Component
export default function MomentalPrice() {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://brsapi.ir/FreeTsetmcBourseApi/Api_Free_Gold_Currency.json")
      .then((res) => {
        const goldData = res.data?.gold || [];

        // Helper to get price by name
        const getPrice = (name) => {
          const item = goldData.find((el) => el.name === name);
          return item ? item.price : 0;
        };

        // Extract needed prices
        const mesghal = getPrice("مثقال طلا");
        const pricesArray = [
          { title: "طلای 18 عیار", value: getPrice("گرم طلای 18 عیار"), isUp: true }, // Assuming isUp is true for now
          { title: "انس طلا / دلار", value: getPrice("انس جهانی طلا"), isUp: false }, // Assuming isUp is false for now
          { title: "مثقال طلا", value: mesghal, isUp: false },
          { title: "طلای آبشده", value: mesghal, isUp: true }, // Same as مثقال طلا
        ];

        setPrices(pricesArray);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error fetching prices:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 mx-auto max-w-[1400px]">
      <h1 className="text-[18px] font-bold mb-4">قیمت لحظه‌ای</h1>

      {loading ? (
        <p className="text-center">در حال بارگذاری...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[95%] mx-auto">
          {prices.map((item, idx) => (
            <PriceCard key={idx} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}
