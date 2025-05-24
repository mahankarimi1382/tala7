// src/pages/AnotherPage.jsx

import BreadcrumbSearch from "../Components/BreadcrumbSearch";
import DualRangeSlider from "../Components/DualRangeSlider";
import HamburgerBar from "../Components/HamburgerBar";
import MyHeader from "../Components/MyHeader";
import ScrollToTopButton from "../Components/ScrollToTopButton";
import MyFooter from "../MyFooter";
import NewsFeed from "../NewsFeed";
import SimpleNewsFeed from "../SimpleNewsFeed";
import WoodHeader from "../WoodHeader";
import WrittenFooter from "../WrittenFooter";
import "preline";
import SidebarProducts from "../SidebarProducts";
import PercentageSlider from "../Components/PercentageSlider";
import { useState } from "react";

function AnotherPage() {
  const [priceRange, setPriceRange] = useState({ min: 100000, max: 5000000000 });
  const [benefitRange, setBenefitRange] = useState({ min: 0, max: 25 });
  const [discountRange, setDiscountRange] = useState({ min: 0, max: 25 });
  const [productFilters, setProductFilters] = useState({
    isAdult: false,
    isBaby: false,
    isWoman: false,
    isMan: false,
    specialSale: false,
    freeShipment: false,
  });
  const [goldModel, setGoldModel] = useState("");

  const handlePriceChange = (min, max) => {
    setPriceRange({ min, max });
  };

  const handleBenefitChange = (min, max) => {
    setBenefitRange({ min, max });
  };

  const handleDiscountChange = (min, max) => {
    setDiscountRange({ min, max });
  };

  const handleModelChange = (model) => {
    setGoldModel(model);
  };

  const handleFiltersChange = (newFilters) => {
    setProductFilters(prev => ({
      ...prev,
      ...newFilters
    }));
  };

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
        <div className="rounded-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(0, 0, 0, 0.1)" }}>
            <SidebarProducts 
              onModelChange={handleModelChange}
              onFiltersChange={handleFiltersChange}
            />
          </div>
          <div className="filteregheimat shadow-lg p-5 rounded-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(0, 0, 0, 0.1)" }}>
            <div>
              <div
                className="bg-[#ececec] rounded-lg h-[50px] text-[16px] font-semibold
            text-center pt-3 mb-3 shadow-md
            "
              >
                فیلتر قیمت
              </div>
              <div
                dir="ltr"
                className="flex justify-center items-center bg-white"
              >
                <DualRangeSlider
                  min={100000}
                  max={500000000}
                  onRangeChange={handlePriceChange}
                />
              </div>
            </div>
          </div>

          <PercentageSlider
            title="درصد سود"
            onRangeChange={handleBenefitChange}
          />
          <PercentageSlider
            title="درصد تخفیف"
            onRangeChange={handleDiscountChange}
          />
        </div>
        <div className="secondPart">
          <BreadcrumbSearch
            priceRange={priceRange}
            benefitRange={benefitRange}
            discountRange={discountRange}
            productFilters={productFilters}
            goldModel={goldModel}
          />
        </div>
      </div>
      <br />
      <div className="flex justify-center">
      </div>
      <br /><br />
      <div>
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
