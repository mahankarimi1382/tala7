import { useState } from "react";
import ProfileImage from "./Components/ProfileImage";
import { HiOutlineHome } from "react-icons/hi2";
import { RiShoppingCart2Line, RiShutDownLine } from "react-icons/ri";
import { MdOutlineSell } from "react-icons/md";
import { SlWallet } from "react-icons/sl";
import { LuBellRing } from "react-icons/lu";
import { IoChatbubblesOutline, IoPersonCircleOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import DashBoard from "./dashBoard";




// Example Components


const sidebarItems = [
  { icon: HiOutlineHome, label: "داشبورد", content: <DashBoard/> },
  { icon: RiShoppingCart2Line, label: "خرید", content:  <div>محتوای خرید</div> },
  { icon: MdOutlineSell, label: "فروش", content:  <div>محتوای فروش </div> },
  { icon: SlWallet, label: "کیف پول", content: <div>محتوای کیف پول</div> },
  { icon: LuBellRing, label: "اعلانات", content: <div>محتوای اعلانات</div> },
  { icon: IoChatbubblesOutline, label: "تیکت ها", content: <div>محتوای تیکت ها</div> },
  { icon: IoPersonCircleOutline, label: "پروفایل", content: <div>محتوای پروفایل</div> },
  { icon: RiShutDownLine, label: "خروج", content: <div>محتوای خروج</div> },
];

function BuyPage() {
  const [activeTab, setActiveTab] = useState(sidebarItems[0]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="sidepannel w-1/5 border-l-2 bg-gray-100 p-4">
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <div className="relative">
            <ProfileImage />
            <div className="absolute bg-gradient-to-r from-teal-950 to-teal-900 rounded-lg text-white left-1 right-1 -mt-4 text-center h-8 flex items-center justify-center text-sm">
              abso
            </div>
          </div>
          <p className="text-center mt-6 font-semibold text-gray-700">کاربر سطح یک</p>
        </div>

        {/* Sidebar Menu */}
        <div className="mt-9 space-y-6">
          {sidebarItems.map(({ icon: Icon, label }, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 ms-6 cursor-pointer hover:text-teal-700 transition relative pb-1 px-4 py-2 w-max ${
                activeTab.label === label ? "bg-teal-100 text-teal-700 shadow-lg rounded-lg" : "text-gray-700"
              }`}
              onClick={() => setActiveTab(sidebarItems[index])}
            >
              <Icon className="text-2xl" />
              <p className="text-lg font-bold">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Panel */}
      <div className="MainPannel mt-3 ms-5 ">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-xl font-semibold text-gray-800"
          >
            {activeTab.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default BuyPage;
