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

// ✅ Helper function to convert number to Persian digits with thousand separators
const toPersianDigits = (num) => {
  const formattedNumber = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return formattedNumber.replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);
};

// ✅ Reusable PriceCard component
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
        <span className={`inline-flex h-[6px] w-[6px] rounded-full ${pingColor}`}></span>
      </div>
    </div>
  );
};

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
  const prices = [
    { title: "طلای 18 عیار", value: 12000890, isUp: true },
    { title: "انس طلا", value: 2985.04, isUp: false },
    { title: "مثقال طلا", value: 295030000, isUp: false },
    { title: "طلای آبشده", value: 295090000, isUp: true },
  ];

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[95%] mx-auto">
        {prices.map((item, idx) => (
          <PriceCard key={idx} {...item} />
        ))}
      </div>

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
