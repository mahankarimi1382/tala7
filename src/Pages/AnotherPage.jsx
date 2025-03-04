// src/pages/AnotherPage.jsx

import BreadcrumbSearch from "../Components/BreadcrumbSearch";
import CheckboxList from "../Components/CheckboxList";
import DualRangeSlider from "../Components/DualRangeSlider";
import HamburgerBar from "../Components/HamburgerBar";
import MyHeader from "../Components/MyHeader";
import ScrollToTopButton from "../Components/ScrollToTopButton";
import MyFooter from "../MyFooter";
import NewsFeed from "../NewsFeed";
import SimpleNewsFeed from "../SimpleNewsFeed";
import HoverImageEffect from "../MovingImage";
import WoodHeader from "../WoodHeader";
import WrittenFooter from "../WrittenFooter";
import { useEffect } from "react";
import "preline";
import Basefile from "../basefile";
import SidebarProducts from "../SidebarProducts";







function AnotherPage() {
  return (
    <div>
      <NewsFeed />
      <hr />
      <SimpleNewsFeed />
      <hr />
      <WoodHeader />
      <hr />
      <MyHeader />
      <hr />
      <HamburgerBar />
      <br />
      <br />
      <div className="flex flex-col md:flex-row justify-center gap-9">
        <div className="flex flex-col gap-6 justify-start mx-auto md:ms-1 w-[300px] ps-7">
          <div className="filtereharaj shadow-lg p-5 rounded-lg "  style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(0, 0, 0, 0.1)" }}
          >
            <div
              className=" bg-[#ececec] rounded-lg h-[50px] text-[16px] font-semibold
            text-center pt-2 mb-1 shadow-md w-full
            "
            >
              فیلتر موجودی و حراج
            </div>
            <div className="mt-3">
              <CheckboxList />
            </div>
          </div>
          <div className="filteregheimat shadow-lg p-5 rounded-lg "  style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(0, 0, 0, 0.1)" }}
          >
            <div>
              <div
                className=" bg-[#ececec] rounded-lg h-[50px] text-[16px] font-semibold
            text-center pt-3 mb-3 shadow-md
            " 
              >
                فیلتر قیمت
              </div>
              <div
                dir="ltr"
                className="flex justify-center items-center  bg-white" 
              >
                <DualRangeSlider />
              </div>
              <div className="mt-5">
                <a
                  className=" bg-[#f7f7f7] rounded-lg h-[50px] text-[14px] font-semibold
            text-center pt-2 mb-1 shadow-md text-black hover:text-slate-600 mt-2 p-2 "
                  href=""
                >
                  فیلتر
                </a>
              </div>
            </div>
          </div>
         
       <div className="rounded-lg"  style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(0, 0, 0, 0.1)" }}
       >
       <SidebarProducts/>
       </div>

        </div>
        <div className="secondPart mx-auto" >
          <BreadcrumbSearch />
        </div>
      </div>
      <br />
      <div className="flex justify-center">
        {/* <HoverImageEffect /> */}
      </div>
      <br /><br />
      <div >
        {/* <Basefile /> */}
      </div>
      <br />
      <ScrollToTopButton />
      <br />
      <br />
      <br />
      <WrittenFooter />
      <MyFooter />
    </div>
  );
}

export default AnotherPage;
