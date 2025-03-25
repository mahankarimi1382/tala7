import React, { useState, useEffect } from "react";
import axios from "axios"; // Importing axios
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { AiOutlineTransaction } from "react-icons/ai";
import SimpleDropdown from "./Components/SimpleDropdown";
import GoldInput from "./Components/GoldInput";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaRegCreditCard } from "react-icons/fa6";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

import svgImage from "../src/assets/img/buy.svg";

function Kharid() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [goldPricePerMilligram, setGoldPricePerMilligram] = useState(0);
  const [goldPricePerGram, setGoldPricePerGram] = useState(0);

  const formatNumber = (num) => num.toLocaleString("fa-IR");

  // Fetch the gold prices from the API using axios
  useEffect(() => {
    axios
      .get("https://brsapi.ir/FreeTsetmcBourseApi/Api_Free_Gold_Currency.json")
      .then((response) => {
        // Log the entire response to inspect the structure
        console.log(response.data); // Debugging: Check response structure

        // Find the entry for "گرم طلای 18 عیار"
        const goldPriceEntry = response?.data?.gold?.find(
          (item) => item.name === "گرم طلای 18 عیار"
        );

        if (goldPriceEntry) {
          const pricePerGram = goldPriceEntry?.price;

          // Convert the price for 1 milligram (1/1000th of the price per gram)
          const pricePerMilligram = pricePerGram / 1000;

          // Update state with the correct values (in Toman)
          setGoldPricePerGram(pricePerGram);
          setGoldPricePerMilligram(pricePerMilligram);
        } else {
          console.error("Gold price for 18k not found in the response.");
        }
      })
      .catch((error) => {
        console.error("Error fetching gold price:", error);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex items-center gap-2">
        <Link to="/" target="_blank" rel="noopener noreferrer">
          <IoChevronForwardCircleOutline className="text-4xl text-blue-900" />
        </Link>
        <RiShoppingCart2Line className="text-4xl text-blue-900" />
        <p className="text-xl">خرید</p>
      </div>

      <div className="flex gap-3 mt-5">
        <a
          href="#"
          className="flex items-center gap-2 text-blue-900 hover:text-white py-2 px-4 shadow-md bg-[#E2F2FD] hover:bg-[#0f4c75] rounded-lg"
        >
          <RiShoppingCart2Line className="text-2xl" />
          <p>خرید</p>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-blue-900 hover:text-white py-2 px-4 shadow-md bg-[#E2F2FD] hover:bg-[#0f4c75] rounded-lg"
        >
          <AiOutlineTransaction className="text-2xl" />
          <p>معاملات</p>
        </a>
      </div>
      <hr className="my-4" />
      <div className="flex gap-4">
        <div className="w-[450px]">
          <div className="bg-[#E2F2FD] shadow-lg rounded-lg p-4 text-sm">
            <div className="flex justify-between">
              <p>قیمت یک میلی‌گرم طلای ۱۸ عیار</p>
              <p>{formatNumber(goldPricePerMilligram)} تومان</p>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between">
              <p>قیمت یک گرم طلای ۱۸ عیار</p>
              <p>{formatNumber(goldPricePerGram)} تومان</p>
            </div>
          </div>

          <p className="mt-5 mb-3">نوع بازار</p>
          <div
            className={`transition-all duration-300 mb-32 ${
              isDropdownOpen ? "mb-32" : "mb-4"
            }`}
          >
            <SimpleDropdown
              options={["بازار خرید اول", "بازار خرید دوم", "بازار خرید سوم"]}
              defaultLabel="نوع بازار را انتخاب کنید"
              className="w-full"
              onToggle={(isOpen) => setIsDropdownOpen(isOpen)}
            />
          </div>

          <div className="mt-32">
            <GoldInput />
          </div>

          <div className="flex justify-between mt-2 text-xs">
            <p>موجودی ریالی</p>
            <div className="flex gap-2">
              <p>{formatNumber(0)} ریال</p>
              <a href="">
                <IoMdAddCircleOutline className="text-lg" />
              </a>
            </div>
          </div>

          <div className="mt-3">
            <p>مبلغ پرداختی</p>
            <div className="flex justify-between text-sm bg-gray-100 border border-gray-600 rounded-lg p-2 mt-1">
              <p>{formatNumber(0)}</p>
              <p>ریال</p>
            </div>
          </div>

          <div className="flex justify-between mt-6 text-xs">
            <p>کارمزد:</p>
            <p>{formatNumber(0)} ریال</p>
          </div>

          <button className="flex justify-center items-center gap-2 bg-[#0F4C75] w-full rounded-lg text-white py-2 mt-4 shadow-md hover:bg-blue-800">
            <FaRegCreditCard />
            <p>پرداخت</p>
          </button>
        </div>
        <div className="w-[450px]  mx-auto my-auto">
          <img src={svgImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Kharid;
