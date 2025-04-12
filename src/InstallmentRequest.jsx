import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { BsDatabaseCheck } from "react-icons/bs";
import SimpleDropdown from "./Components/SimpleDropdown";
import { VscGitStashApply } from "react-icons/vsc";
import { RiUploadCloud2Line } from "react-icons/ri";
import { GrInspect } from "react-icons/gr";
import { FaPersonBiking } from "react-icons/fa6";
import { MdMobileFriendly } from "react-icons/md";
import NewsFeed from "./NewsFeed";
import WoodHeader from "./WoodHeader";
import MyHeader from "./Components/MyHeader";
import HamburgerBar from "./Components/HamburgerBar";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import WrittenFooter from "./WrittenFooter";
import MyFooter from "./MyFooter";

// Enhanced InputField with numeric-only logic
const InputField = ({
  placeholder,
  name,
  value,
  setValue,
  onlyNumbers = false,
  maxLength,
  showError = false,
}) => (
  <div className="p-1 flex justify-start w-full flex-col">
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      onChange={(e) => {
        const val = e.target.value;
        if (onlyNumbers && !/^\d*$/.test(val)) return;
        setValue((prev) => ({ ...prev, [name]: val }));
      }}
      className="p-2 border border-gray-300 rounded w-full h-[40px]"
    />
    {showError && (
      <span className="text-red-500 text-sm mt-1 text-right">
        کد ملی باید دقیقاً ۱۰ رقم باشد
      </span>
    )}
  </div>
);

// Reusable section card
const SectionCard = ({ title, children }) => (
  <div className="w-[350px] h-[500px]">
    <p className="my-4">{title}</p>
    <div className="border shadow-lg rounded-lg p-4 text-sm space-y-3 h-[400px] overflow-y-auto">
      {children}
    </div>
  </div>
);

const PersianDigits = (num) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return num.replace(/\d/g, (digit) => persianDigits[digit]);
};

const InstallmentRequest = () => {
  const [formData, setFormData] = useState({
    nationalCode: "",
    branchCode: "",
    workPhone: "",
    homePhone: "",
  });

  const [activeStep, setActiveStep] = useState(0);

  const Birthdate = "1370/03/18";
  const NationalCode = "005683210";
  const CellNumber = "09121111111";
  const persianDate = PersianDigits(Birthdate);
  const CodeMelli = PersianDigits(NationalCode);
  const MobilePhone = PersianDigits(CellNumber);

  return (
    <div>
      <NewsFeed />
      <hr />
      <WoodHeader />
      <hr />
      <MyHeader />
      <hr />
      <HamburgerBar />
      <div className="p-4" dir="rtl">
        {/* Header */}
        <header className="flex items-center gap-3 p-4">
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to Home"
          >
            <FaChevronLeft  className="text-[36px] text-red" />
          </Link>
          <div className="w-[2px] h-8 border-l-2 border-gray-200"></div>
          <BsDatabaseCheck className="text-[29px] text-blue-900" aria-label="Profile Icon" />
          <p className="text-xl">خرید قسطی</p>
        </header>

        {/* Action Buttons with Chevron Separators and Active State */}
        <div className="flex gap-3 mt-5 justify-center lg:justify-start items-center flex-wrap">
          {[
            { label: "ثبت درخواست", icon: <VscGitStashApply className="text-2xl" /> },
            { label: "بررسی مدارک", icon: <GrInspect className="text-2xl" /> },
            { label: "مراجعه حضوری", icon: <FaPersonBiking className="text-2xl" /> },
            { label: "پایان", icon: <MdMobileFriendly className="text-2xl" /> },
          ].map((item, index, arr) => (
            <div className="flex items-center" key={index}>
              <button
                onClick={() => setActiveStep(index)}
                className={`flex items-center gap-2 py-2 px-4 shadow-md rounded-lg transition duration-300 ${
                  activeStep === index
                    ? "bg-blue-900 text-white"
                    : "bg-[#E2F2FD] text-blue-900 hover:bg-[#0f4c75] hover:text-white"
                }`}
              >
                {item.icon}
                <p className="text-[14px]">{item.label}</p>
              </button>
              {index !== arr.length - 1 && (
                <FaChevronLeft  className="text-[15px] text-[#183335] mx-5 " />
              )}
            </div>
          ))}
        </div>

        <hr className="my-5" />

        {/* Main Sections */}
        <div className="flex flex-wrap justify-center gap-[15px] px-8">
          <SectionCard title="اطلاعات پایه">
            <InputField placeholder="نام" />
            <hr className="border-t-1 border-gray-200 border-dashed" />
            <InputField placeholder="نام خانوادگی" />
            <hr className="border-t-1 border-gray-200 border-dashed" />
            <InputField
              placeholder={`کد ملی (${CodeMelli})`}
              name="nationalCode"
              value={formData.nationalCode}
              setValue={setFormData}
              onlyNumbers
              maxLength={10}
              showError={
                formData.nationalCode.length > 0 && formData.nationalCode.length !== 10
              }
            />
            <hr className="border-t-1 border-gray-200 border-dashed" />
            <InputField placeholder="نام کاربری" />
            <hr className="border-t-1 border-gray-200 border-dashed" />
            <label htmlFor="fileUpload1" className="cursor-pointer text-blue-900 py-2 px-4 shadow-md bg-[#E2F2FD] hover:bg-[#0f4c75] rounded-lg transition duration-300 flex items-center gap-2">
              <RiUploadCloud2Line className="text-2xl" />
              تصویر کارت ملی
              <input type="file" id="fileUpload1" className="hidden" multiple />
            </label>
          </SectionCard>

          <SectionCard title="اطلاعات بانکی">
            <SimpleDropdown
              options={["بانک صادرات", "بانک ملت", "بانک تجارت"]}
              defaultLabel="بانک عامل را انتخاب نمائید"
              className="w-full h-[40px]"
            />
            <hr className="border-t-1 border-gray-200 border-dashed" />
            <InputField placeholder="نام شعبه" />
            <hr className="border-t-1 border-gray-200 border-dashed" />
            <InputField
              placeholder="کد شعبه"
              name="branchCode"
              value={formData.branchCode}
              setValue={setFormData}
              onlyNumbers
            />
            <hr className="border-t-1 border-gray-200 border-dashed" />
            <InputField placeholder="شماره شبا" />
          </SectionCard>

          <SectionCard title="اطلاعات شغلی">
            <InputField placeholder="معرف" />
            <hr className="border-t-1 border-gray-200 border-dashed" />
            <SimpleDropdown
              options={["دولتی", "آزاد"]}
              defaultLabel="نوع شغل"
              className="w-full h-[40px]"
            />
            <hr className="border-t-1 border-gray-200 border-dashed" />
            <SimpleDropdown
              options={["دولتی", "آزاد"]}
              defaultLabel="انتخاب شغل"
              className="w-full h-[40px]"
            />
            <hr className="border-t-1 border-gray-200 border-dashed" />
            <InputField placeholder="نام کاربری" />
            <hr className="border-t-1 border-gray-200 border-dashed" />
            <label htmlFor="fileUpload2" className="cursor-pointer text-blue-900 py-2 px-4 shadow-md bg-[#E2F2FD] hover:bg-[#0f4c75] rounded-lg transition duration-300 flex items-center gap-2">
              <RiUploadCloud2Line className="text-2xl" />
              تصویر فیش حقوقی
              <input type="file" id="fileUpload2" className="hidden" multiple />
            </label>
          </SectionCard>

          <SectionCard title="اطلاعات تماس">
            <InputField placeholder="آدرس محل کار" />
            <hr className="border-t-1 border-gray-200 border-dashed" />
            <InputField
              placeholder="تلفن محل کار"
              name="workPhone"
              value={formData.workPhone}
              setValue={setFormData}
              onlyNumbers
            />
            <hr className="border-t-1 border-gray-200 border-dashed" />
            <InputField placeholder="آدرس منزل" />
            <hr className="border-t-1 border-gray-200 border-dashed" />
            <InputField
              placeholder="تلفن منزل"
              name="homePhone"
              value={formData.homePhone}
              setValue={setFormData}
              onlyNumbers
            />
          </SectionCard>
        </div>
      </div>
      <ScrollToTopButton />
      <br />
      <br />
      <br />
      <WrittenFooter />
      <MyFooter />
    </div>
  );
};

export default InstallmentRequest;
