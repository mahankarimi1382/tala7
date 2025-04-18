import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { BsDatabaseCheck } from "react-icons/bs";
import { VscGitStashApply } from "react-icons/vsc";
import { GrInspect } from "react-icons/gr";
import { FaPersonBiking } from "react-icons/fa6";
import { MdMobileFriendly } from "react-icons/md";
import { Link } from "react-router-dom";

// External Components
import InitialRequestForm from "@components/InitialRequestForm";
import NewsFeed from "./NewsFeed";
import WoodHeader from "./WoodHeader";
import MyHeader from "./Components/MyHeader";
import HamburgerBar from "./Components/HamburgerBar";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import WrittenFooter from "./WrittenFooter";
import MyFooter from "./MyFooter";


const steps = [
  { label: "ثبت درخواست", icon: <VscGitStashApply className="text-2xl" /> },
  { label: "بررسی مدارک", icon: <GrInspect className="text-2xl" /> },
  { label: "مراجعه حضوری", icon: <FaPersonBiking className="text-2xl" /> },
  { label: "پایان", icon: <MdMobileFriendly className="text-2xl" /> },
];

const InstallmentRequest = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div dir="rtl">
      <NewsFeed />
      <hr />
      <WoodHeader />
      <hr />
      <MyHeader />
      <hr />
      <HamburgerBar />

      {/* Header */}
      <header className="flex items-center gap-3 p-4">
        <Link to="/" target="_blank" rel="noopener noreferrer" aria-label="Go to Home">
          <FaChevronLeft className="text-[36px] text-red" />
        </Link>
        <div className="w-[2px] h-8 border-l-2 border-gray-200"></div>
        <BsDatabaseCheck className="text-[29px] text-green-600" aria-label="Profile Icon" />
        <p className="text-xl">خرید قسطی</p>
      </header>

      {/* Process Cards */}
      <div className="flex gap-3 mt-5 justify-center md:justify-start items-center flex-row overflow-auto-auto">
        {steps.map((item, index) => {
          const isActive = index === activeStep;
          const isBefore = index < activeStep;

          return (
            <div className="relative flex items-center" key={index}>
              <button
                onClick={() => setActiveStep(index)}
                className={`relative flex justify-center items-center gap-2 pt-5 pb-10 w-[190px] h-3 px-4 shadow-md rounded-[23px] transition duration-300 ${
                  isActive
                    ? "bg-green-600 text-white"
                    : isBefore
                    ? "bg-green-400 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {item.icon}
                <p className="text-[16px]">{item.label}</p>

                {/* Step Number Circle */}
                <div
                  className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md z-10 border-2 ${
                    isActive
                      ? "bg-green-800 border-white text-white"
                      : "bg-green-900 border-white text-white"
                  }`}
                >
                  {index + 1}
                </div>
              </button>

              {/* Chevron between cards */}
              {index !== steps.length - 1 && (
                <FaChevronLeft className="text-[15px] text-[#183335] mx-5" />
              )}
            </div>
          );
        })}
      </div>

      <hr className="my-5" />

      {/* Main Content Area */}
      {activeStep === 0 && <InitialRequestForm />}
      {activeStep === 1 && (
        <p className="ms-6 p-5">بررسی مدارک</p>
      )}
      {activeStep === 2 && (
        <p className="ms-6 p-5"> مراجعه حضوری</p>
      )}
      {activeStep === 3 && (
        <p className="ms-6 p-5">  پایان</p>
      )}
     

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
