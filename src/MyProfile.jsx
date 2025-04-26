import { Link } from "react-router-dom";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineContactMail } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import svgImage from "../src/assets/img/personage.svg";
import { CiCreditCard2 } from "react-icons/ci";
import { CiGift } from "react-icons/ci";
import { useState, useEffect } from "react";
import useProvincesAndCities from "./Components/useProvincesAndCities";
import Base64Uploader from "./Components/utils/Base64Uploader";
import { CreateApplicants } from "./apicalling/ApiCalling";
import { userDetails } from "./Store/Store";
import Map_submitLoc from "./Components/Components/Map_submitLoc";
import Map_showLoc from "./Components/Components/Map_showLoc";

const convertToPersianDigits = (num) => {
  return num.toLocaleString("fa-IR"); // Converts to Persian digits with thousand separators
};

const PersianDigits = (num) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return num.replace(/\d/g, (digit) => persianDigits[digit]);
};

// Validation functions
const isValidPersianName = (text) => {
  const persianRegex = /^[\u0600-\u06FF\s]+$/;
  return persianRegex.test(text);
};

const isValidNationalCode = (code) => {
  return /^\d{10}$/.test(code);
};

const isValidPostalCode = (code) => {
  return /^\d{10}$/.test(code);
};

const Birthdate = "1370/03/18";
const NationalCode = "005683210";
const CellNumber = "09121111111";

const persianDate = PersianDigits(Birthdate);
const CodeMelli = PersianDigits(NationalCode);
const MobilePhone = PersianDigits(CellNumber);

function MyProfile() {
  const { applicantUserId, userData, setUserData } = userDetails();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(userData.name ? true : false);
  const [name, setName] = useState(userData.name || "");
  const [family, setFamily] = useState(userData.family || "");
  const [national_code, setNationalCode] = useState(
    userData.national_code || ""
  );
  const [post_code, setPostCode] = useState(userData.post_code || "");
  const [address, setAddress] = useState(userData.address || "");
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    family: "",
    national_code: "",
    post_code: "",
  });

  const [position, setPosition] = useState(
    userData.lat
      ? [Number(userData.lat), Number(userData.lon)]
      : [51.391392246429746, 35.70124145171712]
  );
  const [cityId, setCityId] = useState(1);

  const [profileImg, setProfileImg] = useState(userData.applicant_Image || "");
  const [formData, setFormData] = useState({
    city: "",
  });
  const data = {
    metadata: {
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userName: "string",
      userNameforC: "string",
    },
    name,
    family,
    national_code,
    applicationUserId: applicantUserId,
    post_code,
    address,
    lat: `${position[0]}`,
    lon: `${position[1]}`,
    cityId,
    status: 0,
    applicant_Image: profileImg,
  };

  const { provinces, citiesMap, loading } = useProvincesAndCities();

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-700"></div>
      </div>
    );
  }

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (value === "" || isValidPersianName(value)) {
      setName(value);
      setValidationErrors((prev) => ({ ...prev, name: "" }));
    } else {
      setValidationErrors((prev) => ({
        ...prev,
        name: "لطفاً فقط از حروف فارسی استفاده کنید",
      }));
    }
  };

  const handleFamilyChange = (e) => {
    const value = e.target.value;
    if (value === "" || isValidPersianName(value)) {
      setFamily(value);
      setValidationErrors((prev) => ({ ...prev, family: "" }));
    } else {
      setValidationErrors((prev) => ({
        ...prev,
        family: "لطفاً فقط از حروف فارسی استفاده کنید",
      }));
    }
  };

  const handleNationalCodeChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d*$/.test(value)) {
      setNationalCode(value);
      if (value.length === 10) {
        setValidationErrors((prev) => ({ ...prev, national_code: "" }));
      } else {
        setValidationErrors((prev) => ({
          ...prev,
          national_code: "کد ملی باید 10 رقم باشد",
        }));
      }
    }
  };

  const handlePostCodeChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d*$/.test(value)) {
      setPostCode(value);
      if (value.length === 10) {
        setValidationErrors((prev) => ({ ...prev, post_code: "" }));
      } else {
        setValidationErrors((prev) => ({
          ...prev,
          post_code: "کد پستی باید 10 رقم باشد",
        }));
      }
    }
  };

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

        <CgProfile
          className="text-[29px] text-blue-900"
          aria-label="Profile Icon"
        />
        <p className="text-xl">پروفایل</p>
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
      <div className="flex flex-col md:flex-row items-center md:items-start px-8 gap-6">
        {/* Profile Info */}
        <div className="md:w-[70%] w-full">
          <div className="max-w-[450px]">
            <div className="border shadow-lg rounded-lg p-4 text-sm">
              <div className="flex justify-between">
                <p></p>{" "}
                <p className="bg-green-600 rounded-lg p-1 text-[12px]f text-white">
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
            <p className="my-4">اطلاعات پایه</p>
            <div className="border shadow-lg rounded-lg p-4 text-sm">
              <div className="flex justify-between items-center py-2">
                <p className="text-gray-700 font-medium"> نام </p>
                {isSubmitted ? (
                  <p className="text-gray-800">{name}</p>
                ) : (
                  <div className="flex flex-col w-64">
                    <input
                      onChange={handleNameChange}
                      value={name}
                      placeholder="نام خود را وارد کنید"
                      className="text-sm border-b-2 border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none transition-colors duration-200 w-full"
                    />
                    {validationErrors.name && (
                      <span className="text-red-500 text-xs mt-1">
                        {validationErrors.name}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <hr className="my-2 border-t-1 border-gray-200 border-dashed" />

              <div className="flex justify-between items-center py-2">
                <p className="text-gray-700 font-medium"> نام خانوادگی </p>
                {isSubmitted ? (
                  <p className="text-gray-800">{family}</p>
                ) : (
                  <div className="flex flex-col w-64">
                    <input
                      onChange={handleFamilyChange}
                      value={family}
                      placeholder="نام خانوادگی خود را وارد کنید"
                      className="text-sm border-b-2 border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none transition-colors duration-200 w-full"
                    />
                    {validationErrors.family && (
                      <span className="text-red-500 text-xs mt-1">
                        {validationErrors.family}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <hr className="my-2 border-t-1 border-gray-200 border-dashed" />

              <div className="flex justify-between items-center py-2">
                <p className="text-gray-700 font-medium"> کد ملی </p>
                {isSubmitted ? (
                  <p className="text-gray-800">{national_code}</p>
                ) : (
                  <div className="flex flex-col w-64">
                    <input
                      onChange={handleNationalCodeChange}
                      value={national_code}
                      placeholder="کد ملی خود را وارد کنید"
                      className="text-sm border-b-2 border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none transition-colors duration-200 w-full"
                    />
                    {validationErrors.national_code && (
                      <span className="text-red-500 text-xs mt-1">
                        {validationErrors.national_code}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <hr className="my-2 border-t-1 border-gray-200 border-dashed" />

              <div className="flex justify-between items-center py-2">
                <p className="text-gray-700 font-medium"> عکس پروفایل </p>
                {isSubmitted ? (
                  <img
                    className="w-20 h-20 aspect-square rounded-full object-cover"
                    width={50}
                    height={20}
                    src={profileImg}
                    alt="Uploaded"
                  />
                ) : (
                  <div className="flex flex-col w-64">
                    <Base64Uploader
                      image={profileImg}
                      setImage={setProfileImg}
                    />
                  </div>
                )}
              </div>
            </div>
            <p className="my-4">اطلاعات محل سکونت</p>
            <div className="border shadow-lg rounded-lg p-4 text-sm">
              <div className="flex justify-between items-center py-2">
                <p className="text-gray-700 font-medium"> آدرس </p>
                {isSubmitted ? (
                  <p className="text-gray-800">{address}</p>
                ) : (
                  <div className="flex flex-col w-64">
                    <input
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="آدرس خود را وارد کنید"
                      className="text-sm border-b-2 border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none transition-colors duration-200 w-full"
                    />
                  </div>
                )}
              </div>

              <hr className="my-2 border-t-1 border-gray-200 border-dashed" />

              <div className="flex justify-between items-center py-2">
                <p className="text-gray-700 font-medium"> کد پستی </p>
                {isSubmitted ? (
                  <p className="text-gray-800">{post_code}</p>
                ) : (
                  <div className="flex flex-col w-64">
                    <input
                      onChange={handlePostCodeChange}
                      value={post_code}
                      placeholder="کد پستی خود را وارد کنید"
                      className="text-sm border-b-2 border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none transition-colors duration-200 w-full"
                    />
                    {validationErrors.post_code && (
                      <span className="text-red-500 text-xs mt-1">
                        {validationErrors.post_code}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <hr className="my-2 border-t-1 border-gray-200 border-dashed" />

              <div className="flex justify-between items-center py-2">
                <p className="text-gray-700 font-medium"> شهر سکونت </p>
                <div className="flex gap-2">
                  <select
                    className="w-1/2 h-6 border border-gray-300 rounded"
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
                    className="w-1/2 h-6 border border-gray-300 rounded"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, city: e.target.value }))
                    }
                    disabled={!formData.province || loading}
                  >
                    <option value="">
                      {formData.province
                        ? loading
                          ? "در حال دریافت شهرها..."
                          : "شهر"
                        : "ابتدا استان را انتخاب کنید"}
                    </option>
                    {(citiesMap[formData.province] || []).map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <hr className="my-2 border-t-1 border-gray-200 border-dashed" />

              <div className="flex flex-col justify-center gap-2">
                <p className="text-gray-700 font-medium"> موقعیت مکانی </p>
                {!isSubmitted ? (
                  <Map_submitLoc
                    position={position}
                    setPosition={setPosition}
                  />
                ) : (
                  <Map_showLoc position={position} setPosition={setPosition} />
                )}
              </div>
            </div>
          </div>
          <div className=" max-w-[450px] mt-4 w-full flex justify-center items-center">
            {!isSubmitted && (
              <button
                onClick={() =>
                  CreateApplicants(data, setIsSubmitted, setUserData)
                }
                className=" bg-green-100 border border-green-600 text-green-600 p-2 rounded-lg px-4"
              >
                ثبت اطلاعات
              </button>
            )}
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex w-full  justify-center">
          <img
            src={svgImage}
            alt="Profile illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
