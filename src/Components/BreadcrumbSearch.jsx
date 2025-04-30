import { Search } from "lucide-react";
import PishnahadCards from "../PishnahadCards";
import img1 from "../assets/img/containerring1.png";
import img2 from "../assets/img/containerring2.png";
import { useState } from "react";

export default function BreadcrumbSearch({ 
  priceRange, 
  benefitRange, 
  discountRange, 
  productFilters 
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch("http://tala7.com:44/api/DocStore/Search_Products_In_InVitrin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          term: searchTerm,
          price_Start: priceRange.min,
          price_End: priceRange.max,
          benefit_Percent_Start: benefitRange.min,
          benefit_Percent_End: benefitRange.max,
          discount_Benefit_Percent_Start: discountRange.min,
          discount_Benefit_Percent_End: discountRange.max,
          isAdult: productFilters.isAdult,
          isBaby: productFilters.isBaby,
          isWoman: productFilters.isWoman,
          isMan: productFilters.isMan,
          freeShipment: false,
          specialSale: false,
          product_Size: "",
          gold_Color: "",
          gold_Model: "",
          gold_Made: "",
          isInstallment: false
        })
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      // Handle the response data here
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
   <div className="">
     <div className="flex flex-col">
      <div className=" mt-6 md:mt-1 md:p-4 space-y-4 ms-10 sm:ms-14 ">
        {/* Breadcrumb */}
        <nav className="text-gray-500 text-sm">
          <a href="#" className="hover:text-black">
            خانه
          </a>
          <span className="mx-1">/</span>
          <a href="#" className="text-black font-bold">
            دسته بندی نشده
          </a>
        </nav>

        {/* Search Bar */}
        <div className="relative md:w-[60vw] w-[80vw] max-w-4xl ">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            size={18}
            onClick={handleSearch}
          />
          <input
            type="text"
            placeholder="جستجوی محصولات"
            className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 text-right placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-cols-1 md:grid-cols-2 CardsArea mx-auto">
        <PishnahadCards
          ImageAddress={img1}
          SecondImageAddress={img2}
          RingName="حلقه زیبا"
          FirstPrice="500000"
          SecondPrice="900000"
          MySecond="57"
          MyMiniute="35"
          MyHour="11"
          MyDays="143"
          MyDiscount="17"
          MinusOrPlus="-"
        />
        <PishnahadCards
          ImageAddress={img1}
          SecondImageAddress={img2}
          RingName="حلقه زیبا"
          FirstPrice="500000"
          SecondPrice="900000"
          MySecond="57"
          MyMiniute="35"
          MyHour="11"
          MyDays="143"
          MyDiscount="17"
          MinusOrPlus="-"
        />{" "}
        <PishnahadCards
          ImageAddress={img1}
          SecondImageAddress={img2}
          RingName="حلقه زیبا"
          FirstPrice="500000"
          SecondPrice="900000"
          MySecond="57"
          MyMiniute="35"
          MyHour="11"
          MyDays="143"
          MyDiscount="17"
          MinusOrPlus="-"
        />{" "}
        <PishnahadCards
          ImageAddress={img1}
          SecondImageAddress={img2}
          RingName="حلقه زیبا"
          FirstPrice="500000"
          SecondPrice="900000"
          MySecond="57"
          MyMiniute="35"
          MyHour="11"
          MyDays="143"
          MyDiscount="17"
          MinusOrPlus="-"
        />{" "}
        <PishnahadCards
          ImageAddress={img1}
          SecondImageAddress={img2}
          RingName="حلقه زیبا"
          FirstPrice="500000"
          SecondPrice="900000"
          MySecond="57"
          MyMiniute="35"
          MyHour="11"
          MyDays="143"
          MyDiscount="17"
          MinusOrPlus="-"
        />{" "}
        <PishnahadCards
          ImageAddress={img1}
          SecondImageAddress={img2}
          RingName="حلقه زیبا"
          FirstPrice="500000"
          SecondPrice="900000"
          MySecond="57"
          MyMiniute="35"
          MyHour="11"
          MyDays="143"
          MyDiscount="17"
          MinusOrPlus="-"
        />{" "}
        <PishnahadCards
          ImageAddress={img1}
          SecondImageAddress={img2}
          RingName="حلقه زیبا"
          FirstPrice="500000"
          SecondPrice="900000"
          MySecond="57"
          MyMiniute="35"
          MyHour="11"
          MyDays="143"
          MyDiscount="17"
          MinusOrPlus="-"
        />{" "}
        <PishnahadCards
          ImageAddress={img1}
          SecondImageAddress={img2}
          RingName="حلقه زیبا"
          FirstPrice="500000"
          SecondPrice="900000"
          MySecond="57"
          MyMiniute="35"
          MyHour="11"
          MyDays="143"
          MyDiscount="17"
          MinusOrPlus="-"
        />{" "}
        <PishnahadCards
          ImageAddress={img1}
          SecondImageAddress={img2}
          RingName="حلقه زیبا"
          FirstPrice="500000"
          SecondPrice="900000"
          MySecond="57"
          MyMiniute="35"
          MyHour="11"
          MyDays="143"
          MyDiscount="17"
          MinusOrPlus="-"
        />{" "}
        <PishnahadCards
          ImageAddress={img1}
          SecondImageAddress={img2}
          RingName="حلقه زیبا"
          FirstPrice="500000"
          SecondPrice="900000"
          MySecond="57"
          MyMiniute="35"
          MyHour="11"
          MyDays="143"
          MyDiscount="17"
          MinusOrPlus="-"
        />{" "}
        <PishnahadCards
          ImageAddress={img1}
          SecondImageAddress={img2}
          RingName="حلقه زیبا"
          FirstPrice="500000"
          SecondPrice="900000"
          MySecond="57"
          MyMiniute="35"
          MyHour="11"
          MyDays="143"
          MyDiscount="17"
          MinusOrPlus="-"
        />{" "}
        <PishnahadCards
          ImageAddress={img1}
          SecondImageAddress={img2}
          RingName="حلقه زیبا"
          FirstPrice="500000"
          SecondPrice="900000"
          MySecond="57"
          MyMiniute="35"
          MyHour="11"
          MyDays="143"
          MyDiscount="17"
          MinusOrPlus="-"
        />{" "}
        <PishnahadCards
          ImageAddress={img1}
          SecondImageAddress={img2}
          RingName="حلقه زیبا"
          FirstPrice="500000"
          SecondPrice="900000"
          MySecond="57"
          MyMiniute="35"
          MyHour="11"
          MyDays="143"
          MyDiscount="17"
          MinusOrPlus="-"
        />
        </div>
      </div>
   </div>
  );
}
