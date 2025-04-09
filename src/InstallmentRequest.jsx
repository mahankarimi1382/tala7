import { Link } from "react-router-dom";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { MdOutlineContactMail } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import { CiCreditCard2 } from "react-icons/ci";
import { CiGift } from "react-icons/ci";
import { BsDatabaseCheck } from "react-icons/bs";


const convertToPersianDigits = (num) => {
  return num.toLocaleString("fa-IR"); // Converts to Persian digits with thousand separators
};

const PersianDigits = (num) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return num.replace(/\d/g, (digit) => persianDigits[digit]);
};

const Birthdate = "1370/03/18";
const NationalCode = "005683210";
const CellNumber = "09121111111";
const persianDate = PersianDigits(Birthdate);
const CodeMelli = PersianDigits(NationalCode);
const MobilePhone = PersianDigits(CellNumber);

function InstallmentRequest() {
  return (
    <div className="p-4">
      {/* Header Section */}
      <header className="flex items-center gap-3 p-4">
        <Link
          to="/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to Home"
        >
          <IoChevronForwardCircleOutline className="text-[36px] text-blue-900" />
        </Link>

        {/* Dotted Vertical Divider */}
        <div className="w-[2px] h-8 border-l-2 border-gray-200 "></div>

        <BsDatabaseCheck 
          className="text-[29px] text-blue-900"
          aria-label="Profile Icon"
        />
        <p className="text-xl">خرید قسطی</p>
      </header>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-5">
        <a
          href="#"
          className="flex items-center gap-2 text-blue-900 hover:text-white py-2 px-4 shadow-md bg-[#E2F2FD] hover:bg-[#0f4c75] rounded-lg transition duration-300"
        >
          <MdOutlineContactMail className="text-2xl" />
          <p className="text-[14px]">مشخصات فردی</p>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-blue-900 hover:text-white py-2 px-4 shadow-md bg-[#E2F2FD] hover:bg-[#0f4c75] rounded-lg transition duration-300"
        >
          <FaRegCreditCard className="text-2xl" />
          <p className="text-[14px]">کارت های بانکی</p>
        </a>
      </div>

      <hr className="my-5" />

      {/* Profile Info and Image */}
      <div className="flex  items-center  px-8 gap-6">
        {/* Profile Info */}
        <div className=" w-full">
          <div className="flex flex-wrap gap-28 justify-center ">
            <div className=" w-[350px] border shadow-lg rounded-lg p-4 text-sm">
              <div className="flex justify-between">
                <p>علی علی مددی</p>
                <p className="bg-green-600 rounded-lg p-1 text-[12px] text-white">
                  احراز هویت پایه
                </p>
              </div>

              {/* Dotted Divider */}
              <hr className="my-3 border-t-1 border-gray-200 border-dashed" />

              <div className="flex justify-between">
                <div className="flex gap-3 items-center">
                  <CiCreditCard2 size={30} className="text-gray-600" />

                  <p> احراز هویت</p>
                </div>
                <p className="bg-green-100 rounded-lg py-1 px-2 text-[12px] text-green-600">
                  {" "}
                  پایه{" "}
                </p>
              </div>
              <hr className="my-3 border-t-1 border-gray-200 border-dashed" />

              <div className="flex justify-between">
                <div className="flex gap-3 items-center">
                  <CiGift size={30} className="text-gray-600" />
                  <p> کارمزد</p>
                </div>
                <p className="text-blue-900 bg-[#E2F2FD] py-1 px-2 text-[12px]">
                  {" "}
                  سطح {convertToPersianDigits(1)}
                </p>
              </div>
            </div>
           <div className="w-[350px]">
           <p className="my-4">اطلاعات پایه</p>
            <div className="border shadow-lg rounded-lg p-4 text-sm">
              <div className="flex justify-between">
                <p className="text-gray-600"> نام </p>
                <p>علی </p>
              </div>

              {/* Dotted Divider */}
              <hr className="my-3 border-t-1 border-gray-200 border-dashed" />

              <div className="flex justify-between">
                <p className="text-gray-600"> نام خانوادگی </p>
                <p>علی مددی </p>
              </div>
              <hr className="my-3 border-t-1 border-gray-200 border-dashed" />

              <div className="flex justify-between">
                <p className="text-gray-600"> تاریخ تولد </p>
                <p>{persianDate}</p>
              </div>
              <hr className="my-3 border-t-1 border-gray-200 border-dashed" />
              <div className="flex justify-between">
                <p className="text-gray-600"> کد ملی </p>
                <p>{CodeMelli}</p>
              </div>
            </div>
           </div>
            <div className="w-[350px]">
            <p className="my-4">اطلاعات تماس</p>
            <div className="border shadow-lg rounded-lg p-4 text-sm">
              <div className="flex justify-between">
                <p className="text-gray-600"> تلفن همراه </p>
                <p>{MobilePhone}</p>
              </div>
              <hr className="my-3 border-t-1 border-gray-200 border-dashed" />
              <div className="flex justify-between">
                <p className="text-gray-600"> ایمیل </p>
                <p>ali@gmail.com</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstallmentRequest;
