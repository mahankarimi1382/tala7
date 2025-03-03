import img1 from "../src/assets/img/containerring1.png";
import img2 from "../src/assets/img/containerring2.png";
import img3 from "../src/assets/img/containerring3.png";
import img4 from "../src/assets/img/containerring4.png";
import "./index.css";
import PersianNumber from "./Components/utils/PersianNumber";
import PishnahadCards from "./PishnahadCards";
import { MdChevronRight } from "react-icons/md";


function Pishnahad() {
  return (
    <div className=" bg-[#d5c2ae] sticky z-40">
      <div className=" Cards__yard flex flex-wrap justify-center">
        <div className=" my-auto text-center hidden lg:block">
          <h2 className=" Neveshte text-3xl text-white w-[75%]   ">
            پیشــنهاد ویژه شگفتــ انــگیز
          </h2>
          <div className="mt-9">
           <a href="#" className="text-white Moshahedeh ring-2 ring-[#eae1d7] rounded px-4 py-[7px] text-sm 
           font-bold  hover:ring-white transition duration-300  ml-24 
           "
           >مشاهده همه 
           <span>
           <MdChevronRight />
           </span>
           </a>



          </div>
        </div>

        <PishnahadCards
          ImageAddress={img1}
          SecondImageAddress={img2}
          RingName="حلقه زیبا"
          FirstPrice="500"
          SecondPrice="900"
          MySecond="57"
          MyMiniute="35"
          MyHour="11"
          MyDays="143"
          MyDiscount="17"
          MinusOrPlus="-"
        />
        <PishnahadCards
          ImageAddress={img2}
          SecondImageAddress={img3}
          RingName="حلقه زیبا"
          FirstPrice="500"
          SecondPrice="900"
          MySecond="57"
          MyMiniute="35"
          MyHour="11"
          MyDays="143"
          MyDiscount="14"
          MinusOrPlus="-"
        />
        <PishnahadCards
          ImageAddress={img3}
          SecondImageAddress={img4}
          RingName="حلقه زیبا"
          FirstPrice="500"
          SecondPrice="900"
          MySecond="57"
          MyMiniute="35"
          MyHour="11"
          MyDays="143"
          MyDiscount="15"
          MinusOrPlus="-"
        />
        <PishnahadCards
          ImageAddress={img4}
          SecondImageAddress={img1}
          RingName="حلقه زیبا"
          FirstPrice="500"
          SecondPrice="900"
          MySecond="57"
          MyMiniute="35"
          MyHour="11"
          MyDays="143"
          MyDiscount="10"
          MinusOrPlus="-"
        />
      </div>
    </div>
  );
}

export default Pishnahad;
