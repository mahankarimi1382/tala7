import { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { BsDatabaseCheck } from "react-icons/bs";
import SimpleDropdown from "./Components/SimpleDropdown";
import { VscGitStashApply } from "react-icons/vsc";
import { RiRefund2Fill } from "react-icons/ri";
import { RiUploadCloud2Line } from "react-icons/ri";
import { GrInspect } from "react-icons/gr";
import { FaPersonBiking } from "react-icons/fa6";
import { MdMobileFriendly } from "react-icons/md";







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
      className="p-2 border border-gray-300 rounded w-full h-[40px]" // Added h-[40px] for consistent height
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
  <div className="w-[350px] h-[420px]">
    <p className="my-4">{title}</p>
    <div className="border shadow-lg rounded-lg p-4 text-sm space-y-3 h-[370px] overflow-y-auto">
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

  const Birthdate = "1370/03/18";
  const NationalCode = "005683210";
  const CellNumber = "09121111111";
  const persianDate = PersianDigits(Birthdate);
  const CodeMelli = PersianDigits(NationalCode);
  const MobilePhone = PersianDigits(CellNumber);

  return (
    <div className="p-4" dir="rtl">
      {/* Header */}
      <header className="flex items-center gap-3 p-4">
        <Link to="/" target="_blank" rel="noopener noreferrer" aria-label="Go to Home">
          <IoChevronForwardCircleOutline className="text-[36px] text-blue-900" />
        </Link>
        <div className="w-[2px] h-8 border-l-2 border-gray-200"></div>
        <BsDatabaseCheck className="text-[29px] text-blue-900" aria-label="Profile Icon" />
        <p className="text-xl">خرید قسطی</p>
      </header>

      {/* Action Buttons */}
      <div className="flex gap-6 mt-5 justify-center lg:justify-start flex-wrap">
        <a
          href="#"
          className="flex items-center gap-2 text-blue-900 hover:text-white py-2 px-4 shadow-md bg-[#E2F2FD] hover:bg-[#0f4c75] rounded-lg transition duration-300"
        >
          <VscGitStashApply  className="text-2xl" />
          <p className="text-[14px]"> ثبت درخواست</p>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-blue-900 hover:text-white py-2 px-4 shadow-md bg-[#E2F2FD] hover:bg-[#0f4c75] rounded-lg transition duration-300"
        >
          <RiRefund2Fill  className="text-2xl" />
          <p className="text-[14px]"> نحوه بازپرداخت</p>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-blue-900 hover:text-white py-2 px-4 shadow-md bg-[#E2F2FD] hover:bg-[#0f4c75] rounded-lg transition duration-300"
        >
          <RiUploadCloud2Line  className="text-2xl" />
          <p className="text-[14px]"> بارگذاری مدارک</p>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-blue-900 hover:text-white py-2 px-4 shadow-md bg-[#E2F2FD] hover:bg-[#0f4c75] rounded-lg transition duration-300"
        >
          <GrInspect  className="text-2xl" />
          <p className="text-[14px]"> بررسی مدارک</p>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-blue-900 hover:text-white py-2 px-4 shadow-md bg-[#E2F2FD] hover:bg-[#0f4c75] rounded-lg transition duration-300"
        >
          <FaPersonBiking  className="text-2xl" />
          <p className="text-[14px]"> مراجعه حضوری</p>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-blue-900 hover:text-white py-2 px-4 shadow-md bg-[#E2F2FD] hover:bg-[#0f4c75] rounded-lg transition duration-300"
        >
          <MdMobileFriendly   className="text-2xl" />
          <p className="text-[14px]">  پایان </p>
        </a>
      </div>

      <hr className="my-5" />

      {/* Main Sections */}
      <div className="flex flex-wrap justify-center gap-28 px-8">
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
        </SectionCard>

        <SectionCard title="اطلاعات بانکی">
          <SimpleDropdown
            options={["بانک صادرات", "بانک ملت", "بانک تجارت"]}
            defaultLabel="بانک عامل را انتخاب نمائید"
            className="w-full h-[40px] " // Added h-[40px] for consistent height
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
            className="h-[40px]" // Added h-[40px] for consistent height
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
            className="w-full h-[40px]" // Added h-[40px] for consistent height
          />
          <hr className="border-t-1 border-gray-200 border-dashed" />
          <SimpleDropdown
            options={["دولتی", "آزاد"]}
            defaultLabel="انتخاب شغل"
            className="w-full h-[40px]" // Added h-[40px] for consistent height
          />
          <hr className="border-t-1 border-gray-200 border-dashed" />
          <InputField placeholder="نام کاربری" />
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
            className="h-[40px]" // Added h-[40px] for consistent height
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
            className="h-[40px]" // Added h-[40px] for consistent height
          />
        </SectionCard>
      </div>
    </div>
  );
};

export default InstallmentRequest;
