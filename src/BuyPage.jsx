import { useState } from "react";
import ProfileImage from "./Components/ProfileImage";
import { HiOutlineHome } from "react-icons/hi2";
import { RiShoppingCart2Line, RiShutDownLine } from "react-icons/ri";
import { MdOutlineSell } from "react-icons/md";
import { SlWallet } from "react-icons/sl";
import { LuBellRing } from "react-icons/lu";
import { IoChatbubblesOutline, IoPersonCircleOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import DashBoard from "./Dashboard";
// import { Link } from "react-router-dom"; // Optional if you want to link "خروج" or others
import Kharid from "./Kharid";
import Foroosh from "./Foroosh";
import KifePool from "./KifePool";
import MyProfile from "./MyProfile";


// ✅ Sidebar items with icons and dynamic content
const sidebarItems = [
  { icon: HiOutlineHome, label: "داشبورد", content: <DashBoard /> },
  { icon: RiShoppingCart2Line, label: "خرید", content: <Kharid/> },
  { icon: MdOutlineSell, label: "فروش", content: <Foroosh/> },
  { icon: SlWallet, label: "کیف پول", content: <KifePool/> },
  { icon: LuBellRing, label: "اعلانات", content: <div>محتوای اعلانات</div> },
  { icon: IoChatbubblesOutline, label: "تیکت ها", content: <div>محتوای تیکت ها</div> },
  { icon: IoPersonCircleOutline, label: "پروفایل", content: <MyProfile/> },
  { icon: RiShutDownLine, label: "خروج", content: <div>محتوای خروج</div> }, // Optional: Can be a link or logout action
];

function BuyPage() {
  const [activeTab, setActiveTab] = useState(sidebarItems[0]);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      
      {/* ✅ Sidebar */}
      <div className="w-56 border-l-2 bg-gray-100 p-4 flex flex-col justify-between">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <ProfileImage />
            <div className="absolute bg-gradient-to-r from-teal-950 to-teal-900 rounded-lg text-white left-1 right-1 -mt-4 text-center h-8 flex items-center justify-center text-sm">
              abso
            </div>
          </div>
          <p className="text-center mt-6 font-semibold text-gray-700">کاربر سطح یک</p>
        </div>

        {/* Menu Section */}
        <div className="mt-9 space-y-4 flex-1">
          {sidebarItems.map(({ icon: Icon, label }, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 ms-4 cursor-pointer hover:text-teal-700 transition-all relative py-2 px-3 rounded-lg ${
                activeTab.label === label
                  ? "bg-teal-100 text-teal-700 shadow-md"
                  : "text-gray-700"
              }`}
              onClick={() => setActiveTab(sidebarItems[index])}
            >
              <Icon className="text-2xl" />
              <p className="text-[15px] font-bold">{label}</p>
            </div>
          ))}
        </div>

        {/* Optional Logout or Footer Section */}
        {/* You can add a logout button or link here if needed */}
      </div>

      {/* ✅ Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="min-h-full"
          >
            {activeTab.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default BuyPage;
