import { useState } from "react";
import { RiUploadCloud2Line } from "react-icons/ri";
import SimpleDropdown from "./Components/SimpleDropdown";
import useProvincesAndCities from "./useProvincesAndCities"; // Import the hook

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

const InitialRequestForm = () => {
  const [formData, setFormData] = useState({
    nationalCode: "",
    branchCode: "",
    workPhone: "",
    homePhone: "",
    province: "",
    city: "",
  });

  // Use the hook to get provinces and cities
  const { provinces, citiesMap, loading } = useProvincesAndCities();

  const Birthdate = "1370/03/18";
  const NationalCode = "005683210";
  const CellNumber = "09121111111";
  const persianDate = PersianDigits(Birthdate);
  const CodeMelli = PersianDigits(NationalCode);
  const MobilePhone = PersianDigits(CellNumber);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-[15px] px-8">
        <SectionCard title="اطلاعات پایه">
          <InputField placeholder="نام" />
          <hr className="border-t border-gray-200 border-dashed" />
          <InputField placeholder="نام خانوادگی" />
          <hr className="border-t border-gray-200 border-dashed" />
          <InputField
            placeholder={`کد ملی (${CodeMelli})`}
            name="nationalCode"
            value={formData.nationalCode}
            setValue={setFormData}
            onlyNumbers
            maxLength={10}
            showError={
              formData.nationalCode.length > 0 &&
              formData.nationalCode.length !== 10
            }
          />
          <hr className="border-t border-gray-200 border-dashed" />
          <InputField placeholder="نام کاربری" />
          <hr className="border-t border-gray-200 border-dashed" />
          <label
            htmlFor="fileUpload1"
            className="cursor-pointer text-blue-900 py-2 px-4 shadow-md bg-[#E2F2FD] hover:bg-[#0f4c75] rounded-lg transition duration-300 flex items-center gap-2"
          >
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
          <hr className="border-t border-gray-200 border-dashed" />
          <InputField placeholder="نام شعبه" />
          <hr className="border-t border-gray-200 border-dashed" />
          <InputField
            placeholder="کد شعبه"
            name="branchCode"
            value={formData.branchCode}
            setValue={setFormData}
            onlyNumbers
          />
          <hr className="border-t border-gray-200 border-dashed" />
          <InputField placeholder="شماره شبا" />
        </SectionCard>

        <SectionCard title="اطلاعات شغلی">
          <InputField placeholder="معرف" />
          <hr className="border-t border-gray-200 border-dashed" />
          <SimpleDropdown
            options={["دولتی", "آزاد"]}
            defaultLabel="نوع شغل"
            className="w-full h-[40px]"
          />
          <hr className="border-t border-gray-200 border-dashed" />
          <SimpleDropdown
            options={["دولتی", "آزاد"]}
            defaultLabel="انتخاب شغل"
            className="w-full h-[40px]"
          />
          <hr className="border-t border-gray-200 border-dashed" />
          <InputField placeholder="نام کاربری" />
          <hr className="border-t border-gray-200 border-dashed" />
          <label
            htmlFor="fileUpload2"
            className="cursor-pointer text-blue-900 py-2 px-4 shadow-md bg-[#E2F2FD] hover:bg-[#0f4c75] rounded-lg transition duration-300 flex items-center gap-2"
          >
            <RiUploadCloud2Line className="text-2xl" />
            تصویر فیش حقوقی
            <input type="file" id="fileUpload2" className="hidden" multiple />
          </label>
        </SectionCard>

        <SectionCard title="اطلاعات تماس">
          <InputField placeholder="آدرس محل کار" />
          <hr className="border-t border-gray-200 border-dashed" />
          <InputField
            placeholder="تلفن محل کار"
            name="workPhone"
            value={formData.workPhone}
            setValue={setFormData}
            onlyNumbers
          />
          <hr className="border-t border-gray-200 border-dashed" />
          <InputField placeholder="آدرس منزل" />
          <hr className="border-t border-gray-200 border-dashed" />
          <InputField
            placeholder="تلفن منزل"
            name="homePhone"
            value={formData.homePhone}
            setValue={setFormData}
            onlyNumbers
          />
          <hr className="border-t border-gray-200 border-dashed" />
          <div className="flex gap-2 mt-2">
            <select
              className="w-1/2 p-2 border border-gray-300 rounded"
              value={formData.province}
              onChange={(e) => {
                const selectedProvince = e.target.value;
                setFormData((prev) => ({
                  ...prev,
                  province: selectedProvince,
                  city: "",
                }));
              }}
              disabled={loading}
            >
              <option value="">استان</option>
              {provinces.map((province) => (
                <option key={province.id} value={province.name}>
                  {province.name}
                </option>
              ))}
            </select>

            <select
              className="w-1/2 p-2 border border-gray-300 rounded"
              value={formData.city}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, city: e.target.value }))
              }
              disabled={!formData.province || loading}
            >
              <option value="">
                {formData.province
                  ? loading ? "در حال دریافت شهرها..." : "شهر"
                  : "ابتدا استان را انتخاب کنید"}
              </option>
              {(citiesMap[formData.province] || []).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </SectionCard>
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-green-600 rounded-lg px-5 py-2 text-white text-[19px] shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-150">
          ثبت
        </button>
      </div>
    </div>
  );
};

export default InitialRequestForm;