import { Link } from "react-router-dom";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { MdOutlineSell } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { SlWallet } from "react-icons/sl";
import Flag from "../src/assets/img/Flag_of_Iran.svg.png";
import { GrView } from "react-icons/gr";
import { FcMoneyTransfer } from "react-icons/fc";
import { GrMoney } from "react-icons/gr";
import { MdOutlinePayments } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import img1 from "./assets/CardBG/corner-1.png";
import img2 from "./assets/CardBG/corner-2.png";
import img3 from "./assets/CardBG/corner-3.png";
import img4 from "./assets/CardBG/corner-1.png";
import { GoArrowDownLeft } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";
import GoldCoin from "../src/assets/img/GoldCoin.png"
import installment from "../src/assets/img/installment.png"

import { HiOutlineExclamationCircle } from "react-icons/hi2";

const TransactionCard = ({ title, Icon, items = [], link = "#" }) => (
  <div className="border rounded-lg p-3 h-48 flex flex-col shadow-sm">
    {/* Header */}
    <div className="flex justify-between p-3 items-center">
      <div className="flex gap-2 items-center text-lg">
        <Icon />
        <div className="text-sm text-gray-700">{title}</div>
      </div>
      <Link to={link} className="text-[11px] text-blue-600 hover:underline">
        مشاهده همه
      </Link>
    </div>

    <hr className="mx-2 p-2" />

    {/* Empty State or Items */}
    <div className="flex flex-1 flex-col justify-center items-center">
      {items.length === 0 ? (
        <>
          <HiOutlineExclamationCircle className="text-[40px] text-gray-500 mb-2" />
          <div className="text-sm text-gray-500">
            لیستی برای نمایش وجود ندارد
          </div>
        </>
      ) : (
        items.map((item, idx) => <div key={idx}>{item}</div>)
      )}
    </div>
  </div>
);

function KifePool() {
  return (
    <div>
      <div className="flex justify-between items-center mx-5">
        <div className="flex items-center gap-2">
          <Link to="/" target="_blank" rel="noopener noreferrer">
            <IoChevronForwardCircleOutline className="text-4xl text-blue-900" />
          </Link>
          <SlWallet className="text-4xl text-blue-900" />
          <p className="text-xl">کیف پول</p>
        </div>
        <div className=" flex  items-center gap-2 text-blue-900 hover:text-white py-2 px-4 shadow-md bg-[#E2F2FD] hover:bg-[#0f4c75] rounded-lg">
          <p className="text-sm">افزایش اعتبار</p>
          <IoAdd />
        </div>
      </div>

      <div className="flex gap-3 mt-5">
        <a
          href="#"
          className="flex items-center gap-2 text-blue-900 hover:text-white py-2 px-4 shadow-md bg-[#E2F2FD] hover:bg-[#0f4c75] rounded-lg"
        >
          <GrView className="text-2xl" />
          <p>نمای کلی</p>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-blue-900 hover:text-white py-2 px-4 shadow-md bg-[#E2F2FD] hover:bg-[#0f4c75] rounded-lg"
        >
          <FcMoneyTransfer className="text-2xl" />
          <p>تراکنش‌های ریالی</p>
        </a>
        <a
          href=""
          className="flex items-center gap-2 text-blue-900 hover:text-white py-2 px-4 shadow-md bg-[#E2F2FD] hover:bg-[#0f4c75] rounded-lg"
        >
          <GrMoney className="text-2xl text-yellow-400" />
          <p>تراکنش‌های طلا</p>
        </a>
        <a
          href=""
          className="flex items-center gap-2 text-blue-900 hover:text-white py-2 px-4 shadow-md bg-[#E2F2FD] hover:bg-[#0f4c75] rounded-lg"
        >
          <MdOutlinePayments className="text-2xl text-green-700" />
          <p>تراکنش‌های اقساطی</p>
        </a>
      </div>
      <hr className="my-4" />
<div className="flex flex-wrap justify-around gap-3">
<div>
<div
        className="w-[300px]  flex flex-col"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <p className="text-[10px] float-end py-2 px-1 ml-3 mt-3 bg-gray-300 rounded-lg opacity-60">
            موجودی
          </p>
        </div>
        <div>
          <img src={Flag} className=" w-14 h-14 mx-auto " alt="" />
        </div>
        <div className="text-[11px] mx-auto mt-1">ریال</div>
        <div className="text-[11px] mx-auto mt-1">0 ریال</div>
        <div className="text-[11px] mx-auto mt-1">
          آخرین بروزرسانی: 1403/12/13
        </div>
        <div className="flex justify-between p-3 ">
          <div className="flex justify-center gap-1   py-2 px-4 rounded-lg bg-[#E2F2FD]">
            <GoArrowDownLeft />
            <p className="text-[14px] ">واریز ریال</p>
          </div>
          <div
            className="flex justify-center gap-1   py-2 px-4 rounded-lg text-white"
            style={{ backgroundColor: "#0f4c75" }}
          >
            <GoArrowUpRight />
            <p className="text-[14px]">برداشت ریال</p>
          </div>
        </div>
      </div>
  <div className="w-[300px] mt-2">
  <TransactionCard
              title=" تراکنش‌های ریالی"
              Icon={GrTransaction  }
              link="/AllProducts"
            />
  </div>
</div><div>
<div
        className="w-[300px]  flex flex-col"
        style={{
          backgroundImage: `url(${img2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <p className="text-[10px] float-end py-2 px-1 ml-3 mt-3 bg-gray-300 rounded-lg opacity-60">
            موجودی
          </p>
        </div>
        <div>
          <img src={GoldCoin} className=" w-14 h-14 mx-auto " alt="" />
        </div>
        <div className="text-[11px] mx-auto mt-1">ریال</div>
        <div className="text-[11px] mx-auto mt-1">0 ریال</div>
        <div className="text-[11px] mx-auto mt-1">
          آخرین بروزرسانی: 1403/12/13
        </div>
        <div className="flex justify-between p-3 ">
          <div className="flex justify-center gap-1   py-2 px-4 rounded-lg bg-[#E2F2FD]">
            <GoArrowDownLeft />
            <p className="text-[14px] ">واریز ریال</p>
          </div>
          <div
            className="flex justify-center gap-1   py-2 px-4 rounded-lg text-white"
            style={{ backgroundColor: "#0f4c75" }}
          >
            <GoArrowUpRight />
            <p className="text-[14px]">برداشت ریال</p>
          </div>
        </div>
      </div>
  <div className="w-[300px] mt-2">
  <TransactionCard
              title=" تراکنش‌های ریالی"
              Icon={GrTransaction  }
              link="/AllProducts"
            />
  </div>
</div><div>
<div
        className="w-[300px]  flex flex-col"
        style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <p className="text-[10px] float-end py-2 px-1 ml-3 mt-3 bg-gray-300 rounded-lg opacity-60">
            موجودی
          </p>
        </div>
        <div>
          <img src={installment} className=" w-14 h-14 mx-auto " alt="" />
        </div>
        <div className="text-[11px] mx-auto mt-1">ریال</div>
        <div className="text-[11px] mx-auto mt-1">0 ریال</div>
        <div className="text-[11px] mx-auto mt-1">
          آخرین بروزرسانی: 1403/12/13
        </div>
        <div className="flex justify-between p-3 ">
          <div className="flex justify-center gap-1   py-2 px-4 rounded-lg bg-[#E2F2FD]">
            <GoArrowDownLeft />
            <p className="text-[14px] ">واریز ریال</p>
          </div>
          <div
            className="flex justify-center gap-1   py-2 px-4 rounded-lg text-white"
            style={{ backgroundColor: "#0f4c75" }}
          >
            <GoArrowUpRight />
            <p className="text-[14px]">برداشت ریال</p>
          </div>
        </div>
      </div>
  <div className="w-[300px] mt-2">
  <TransactionCard
              title=" تراکنش‌های ریالی"
              Icon={GrTransaction  }
              link="/AllProducts"
            />
  </div>
</div>
</div>
    </div>
  );
}

export default KifePool;
