import { useEffect, useState } from "react";
import axios from "axios";

import { IoHomeOutline } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa6";
import { TbBrandDaysCounter } from "react-icons/tb";
import { Link } from "react-router-dom";
import { GoArrowUpLeft, GoArrowDownLeft } from "react-icons/go";
import { LuShoppingBasket } from "react-icons/lu";
import { FcSalesPerformance } from "react-icons/fc";
import { PiHandDeposit, PiHandWithdraw } from "react-icons/pi";
import { HiOutlineExclamationCircle } from "react-icons/hi2";

import AdminPageCad from "./Cards/AdminPageCad";
import img1 from "./assets/CardBG/corner-1.png";
import img2 from "./assets/CardBG/corner-2.png";
import img3 from "./assets/CardBG/corner-3.png";
import img4 from "./assets/CardBG/corner-5.png";
import MomentalPrice from "./MomentalPrice";


// ✅ Helper function to convert number to Persian digits with thousand separators
const toPersianDigits = (num) => {
  if (num === null || num === undefined) return "-";
  const formattedNumber = num
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return formattedNumber.replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);
};

// ✅ Reusable PriceCard component


// ✅ Inline TransactionCard component
const TransactionCard = ({ title, Icon, items = [], link = "#" }) => (
  <div className="border rounded-lg p-3 h-48 flex flex-col shadow-sm">
    {/* Header */}
    <div className="flex justify-between p-3">
      <div className="flex gap-2 items-center">
        <Icon />
        <div className="text-sm text-gray-700">{title}</div>
      </div>
      <Link to={link} className="text-sm text-blue-600 hover:underline">
        مشاهده همه
      </Link>
    </div>

    <hr className="mx-2 p-2" />

    {/* Empty State or Items */}
    <div className="flex flex-1 flex-col justify-center items-center">
      {items.length === 0 ? (
        <>
          <HiOutlineExclamationCircle className="text-[40px] text-gray-500 mb-2" />
          <div className="text-sm text-gray-500">لیستی برای نمایش وجود ندارد</div>
        </>
      ) : (
        items.map((item, idx) => <div key={idx}>{item}</div>)
      )}
    </div>
  </div>
);

// ✅ Main Dashboard Component
function DashBoard() {
  const [prices, setPrices] = useState([]);

 

  return (
    <div className="p-4 mx-auto max-w-[1400px]">
      {/* Header */}
      <div className="flex gap-2 items-center text-[#0f4c9d] mb-4">
        <Link to="/" target="_blank" rel="noopener noreferrer">
          <IoHomeOutline className="text-[23px]" />
        </Link>
        <p className="text-[18px] font-extrabold">حساب کاربری</p>
      </div>

      <hr className="my-4" />

      {/* ✅ Centered Admin Cards */}
      <div className="flex justify-center mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 max-w-7xl">
          <AdminPageCad ImageNum={img1} />
          <AdminPageCad ImageNum={img2} Icon={GiMoneyStack} />
          <AdminPageCad ImageNum={img3} Icon={FaChartLine} />
          <AdminPageCad ImageNum={img4} Icon={TbBrandDaysCounter} />
        </div>
      </div>

      {/* ✅ Responsive Price Cards Section */}
      

<MomentalPrice/>

      {/* ✅ Transaction Cards */}
      <div className="rounded-lg mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TransactionCard title="آخرین خریدها" Icon={LuShoppingBasket} link="/purchases" />
        <TransactionCard title="آخرین فروش‌ها" Icon={FcSalesPerformance} link="/sales" />
        <TransactionCard title="آخرین واریزها" Icon={PiHandDeposit} link="/deposits" />
        <TransactionCard title="آخرین برداشت‌ها" Icon={PiHandWithdraw} link="/withdrawals" />
      </div>
    </div>
  );
}

export default DashBoard;
