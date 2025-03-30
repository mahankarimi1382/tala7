import React from "react";
import NewsFeed from "../../../NewsFeed";
import WoodHeader from "../../../WoodHeader";
import HamburgerBar from "../../../Components/HamburgerBar";
import MyHeader from "../../../Components/MyHeader";
import ScrollToTopButton from "../../../Components/ScrollToTopButton";
import WrittenFooter from "../../../WrittenFooter";
import MyFooter from "../../../MyFooter";

function ShoppingCartPage() {
  return (
    <div>
      <NewsFeed />
      <hr />
      {/* <SimpleNewsFeed /> */}
      <hr />
      <WoodHeader />
      <hr />
      <MyHeader />
      <hr />
      <HamburgerBar />
      <hr />
      <div className="flex mx-11 mt-9 gap-4">
        <div className="w-[70%]   p-2 ">
      <div className="flex gap-2 items-baseline">
      <p className="text-sm">سبد خرید شما</p>
      <p className="text-xs">1 مرسوله</p>
      </div>
        </div>
        <div className="w-[25%] border border-gray-200 rounded-lg p-2">
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          voluptates, quisquam quia animi ea laboriosam suscipit consequatur
          reiciendis illum cupiditate temporibus harum vel debitis quo dolor
          ratione ipsa commodi error?
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
}

export default ShoppingCartPage;
