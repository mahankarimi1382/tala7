import { Search } from "lucide-react";
import PishnahadCards from "../PishnahadCards";
import img1 from "../assets/img/containerring1.png";
import img2 from "../assets/img/containerring2.png";

export default function BreadcrumbSearch() {
  return (
   <div className="">
     <div className="flex flex-col ">
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
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="جستجوی محصولات"
            className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 text-right placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 md:grid-cols-2 CardsArea mx-auto">

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
        />
        </div>
      </div>
   </div>
  );
}
