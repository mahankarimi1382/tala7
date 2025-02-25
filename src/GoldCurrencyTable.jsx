import React, { useState, useEffect } from "react";
import axios from "axios";

const CurrencyPrice = () => {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPrices = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://brsapi.ir/FreeTsetmcBourseApi/Api_Free_Gold_Currency.json');
      console.log(response.data); // Inspect the raw response

      if (response.data) {
        const data = response.data;

        // Extract the relevant prices from the "gold" layer
        const goldPrices = data.gold || [];
        const currencyPrices = data.currency || [];

        const newPrices = {};

        // Extract prices for gold-related items
        goldPrices.forEach(item => {
          if (item.name === "سکه بهار آزادی" || item.name === "نیم سکه" ||
            item.name === "ربع سکه" || item.name === "سکه امامی" ||
            item.name === "گرم طلای 18 عیار") {
            newPrices[item.name] = item.price;
          }
        });

        // Extract price for the dollar from the "currency" layer
        currencyPrices.forEach(item => {
          if (item.name === "دلار") {
            newPrices["دلار"] = item.price;
          }
        });

        // If no relevant prices were found, set an error message
        if (Object.keys(newPrices).length === 0) {
          setError("اطلاعات موجود نیست");
        } else {
          setPrices(newPrices);
        }
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
    const interval = setInterval(fetchPrices, 60000); // Refresh every 1 minute

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  if (loading) {
    return <p>در حال بارگذاری...</p>; // Loading message
  }

  if (error) {
    return <p>{error}</p>; // Display error message
  }

  return (

  <div className="mt-2 p-4 ">
    <p className="hidden md:block p-2">نرخ لحظه ای ارز و طلا / تومان</p>
      <div className="grid grid-cols-2 md:grid-cols-3   justify-center  ">
      {Object.entries(prices).map(([name, price]) => (
        <div key={name} className="col-span-1 text-center GoldTitle  p-2 border-r border-l ">
          <p className="font-bold GoldName">{name}</p>
          <p className=" hover:scale-125 transition ease-in-out delay-100 GoldPrice 
         ">{price}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default CurrencyPrice;
