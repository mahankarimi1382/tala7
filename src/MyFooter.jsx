import { useState } from "react";
import { LiaStoreAltSolid } from "react-icons/lia";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import FooterSidebar from "./FooterSidebar";

function MyFooter() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="block sticky md:hidden bottom-0 z-50">
      <div className="bottom-0 relative border-t-2 shadow-lg MyFooter bg-gradient-to-t text-slate from-[#e1c8a9] via-white to-white">
        <div className="flex justify-around mt-2">
          <div className="flex flex-col items-center mb-2">
            <a href="">
              <LiaStoreAltSolid className="text-[28px] hover:text-gray-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200" />
            </a>
            <p className="text-[10px]">فروشگاه</p>
          </div>
          <div className="flex flex-col items-center">
            <a href="">
              <IoMdHeartEmpty className="text-[28px] hover:text-gray-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200" />
            </a>
            <p className="text-[10px]">علاقه مندی</p>
          </div>
          <div className="flex flex-col items-center">
            <a href="">
              <RiShoppingCartLine className="text-[28px] hover:text-gray-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200" />
            </a>
            <p className="text-[10px]">سبد خرید</p>
          </div>
          {/* Person Icon to Open Sidebar */}
          <div className="flex flex-col items-center">
            <button onClick={() => setIsSidebarOpen(true)}>
              <GoPerson className="text-[28px] hover:text-gray-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200" />
            </button>
            <p className="text-[10px]">حساب کاربری</p>
          </div>
        </div>
      </div>

      {/* Sidebar Component */}
      <FooterSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
}

export default MyFooter;
