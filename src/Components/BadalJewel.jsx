import { useEffect, useState } from "react";
import PishnahadCards from "../PishnahadCards";
import img1 from "../assets/img/containerring1.png";
import img2 from "../assets/img/containerring2.png";
import img3 from "../assets/img/containerring3.png";
import img4 from "../assets/img/containerring4.png";
import gift from "../assets/img/gift.jpg";
import "../index.css";

const MenuComponent = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
 

  const menuItemsConfig = [
    {
      label: "جواهرات ",
      pishnahads: () => (
        <>
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 1"
            FirstPrice="500"
            SecondPrice="900"
            MySecond="57"
            MyMiniute="35"
            MyHour="11"
            MyDays="143"
            MyDiscount="15"
            MinusOrPlus="-"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 2"
            FirstPrice="100"
            SecondPrice="200"
            MySecond="2"
            MyMiniute="15"
            MyHour="3"
            MyDays="24"
            MyDiscount="3"
            MinusOrPlus="-"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 3"
            FirstPrice="222"
            SecondPrice="333"
            MySecond="5"
            MyMiniute="2"
            MyHour="1"
            MyDays="13"
            MyDiscount="25"
            MinusOrPlus="+"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 4"
            FirstPrice="222"
            SecondPrice="333"
            MySecond="5"
            MyMiniute="2"
            MyHour="1"
            MyDays="13"
            MyDiscount="25"
            MinusOrPlus="+"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 5"
            FirstPrice="222"
            SecondPrice="333"
            MySecond="5"
            MyMiniute="2"
            MyHour="1"
            MyDays="13"
            MyDiscount="25"
            MinusOrPlus="+"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 6"
            FirstPrice="222"
            SecondPrice="333"
            MySecond="5"
            MyMiniute="2"
            MyHour="1"
            MyDays="13"
            MyDiscount="25"
            MinusOrPlus="+"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
        </>
      ),
    },
    {
      label: "گوشواره",
      pishnahads: () => (
        <>
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 1"
            FirstPrice="500"
            SecondPrice="900"
            MySecond="57"
            MyMiniute="35"
            MyHour="11"
            MyDays="143"
            MyDiscount="15"
            MinusOrPlus="-"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img3}
            SecondImageAddress={img4}
            RingName="حلقه زیبا 2"
            FirstPrice="100"
            SecondPrice="200"
            MySecond="2"
            MyMiniute="15"
            MyHour="3"
            MyDays="24"
            MyDiscount="3"
            MinusOrPlus="-"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 3"
            FirstPrice="222"
            SecondPrice="333"
            MySecond="5"
            MyMiniute="2"
            MyHour="1"
            MyDays="13"
            MyDiscount="25"
            MinusOrPlus="+"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 4"
            FirstPrice="222"
            SecondPrice="333"
            MySecond="5"
            MyMiniute="2"
            MyHour="1"
            MyDays="13"
            MyDiscount="25"
            MinusOrPlus="+"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 5"
            FirstPrice="222"
            SecondPrice="333"
            MySecond="5"
            MyMiniute="2"
            MyHour="1"
            MyDays="13"
            MyDiscount="25"
            MinusOrPlus="+"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 6"
            FirstPrice="222"
            SecondPrice="333"
            MySecond="5"
            MyMiniute="2"
            MyHour="1"
            MyDays="13"
            MyDiscount="25"
            MinusOrPlus="+"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
        </>
      ),
    },
    {
      label: "گردنبند",
      pishnahads: () => (
        <>
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 1"
            FirstPrice="500"
            SecondPrice="900"
            MySecond="57"
            MyMiniute="35"
            MyHour="11"
            MyDays="143"
            MyDiscount="15"
            MinusOrPlus="-"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img3}
            SecondImageAddress={img4}
            RingName="حلقه زیبا 2"
            FirstPrice="100"
            SecondPrice="200"
            MySecond="2"
            MyMiniute="15"
            MyHour="3"
            MyDays="24"
            MyDiscount="3"
            MinusOrPlus="-"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 3"
            FirstPrice="222"
            SecondPrice="333"
            MySecond="5"
            MyMiniute="2"
            MyHour="1"
            MyDays="13"
            MyDiscount="25"
            MinusOrPlus="+"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 4"
            FirstPrice="222"
            SecondPrice="333"
            MySecond="5"
            MyMiniute="2"
            MyHour="1"
            MyDays="13"
            MyDiscount="25"
            MinusOrPlus="+"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 5"
            FirstPrice="222"
            SecondPrice="333"
            MySecond="5"
            MyMiniute="2"
            MyHour="1"
            MyDays="13"
            MyDiscount="25"
            MinusOrPlus="+"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 6"
            FirstPrice="222"
            SecondPrice="333"
            MySecond="5"
            MyMiniute="2"
            MyHour="1"
            MyDays="13"
            MyDiscount="25"
            MinusOrPlus="+"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
        </>
      ),
    },
    {
      label: "سینه ریز",
      pishnahads: () => (
        <>
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 1"
            FirstPrice="500"
            SecondPrice="900"
            MySecond="57"
            MyMiniute="35"
            MyHour="11"
            MyDays="143"
            MyDiscount="15"
            MinusOrPlus="-"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img3}
            SecondImageAddress={img4}
            RingName="حلقه زیبا 2"
            FirstPrice="100"
            SecondPrice="200"
            MySecond="2"
            MyMiniute="15"
            MyHour="3"
            MyDays="24"
            MyDiscount="3"
            MinusOrPlus="-"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 3"
            FirstPrice="222"
            SecondPrice="333"
            MySecond="5"
            MyMiniute="2"
            MyHour="1"
            MyDays="13"
            MyDiscount="25"
            MinusOrPlus="+"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 4"
            FirstPrice="222"
            SecondPrice="333"
            MySecond="5"
            MyMiniute="2"
            MyHour="1"
            MyDays="13"
            MyDiscount="25"
            MinusOrPlus="+"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 5"
            FirstPrice="222"
            SecondPrice="333"
            MySecond="5"
            MyMiniute="2"
            MyHour="1"
            MyDays="13"
            MyDiscount="25"
            MinusOrPlus="+"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 6"
            FirstPrice="222"
            SecondPrice="333"
            MySecond="5"
            MyMiniute="2"
            MyHour="1"
            MyDays="13"
            MyDiscount="25"
            MinusOrPlus="+"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
        </>
      ),
    },
    {
      label: "النگو",
      pishnahads: () => (
        <>
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 1"
            FirstPrice="500"
            SecondPrice="900"
            MySecond="57"
            MyMiniute="35"
            MyHour="11"
            MyDays="143"
            MyDiscount="15"
            MinusOrPlus="-"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img3}
            SecondImageAddress={img4}
            RingName="حلقه زیبا 2"
            FirstPrice="100"
            SecondPrice="200"
            MySecond="2"
            MyMiniute="15"
            MyHour="3"
            MyDays="24"
            MyDiscount="3"
            MinusOrPlus="-"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 3"
            FirstPrice="222"
            SecondPrice="333"
            MySecond="5"
            MyMiniute="2"
            MyHour="1"
            MyDays="13"
            MyDiscount="25"
            MinusOrPlus="+"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 4"
            FirstPrice="222"
            SecondPrice="333"
            MySecond="5"
            MyMiniute="2"
            MyHour="1"
            MyDays="13"
            MyDiscount="25"
            MinusOrPlus="+"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 5"
            FirstPrice="222"
            SecondPrice="333"
            MySecond="5"
            MyMiniute="2"
            MyHour="1"
            MyDays="13"
            MyDiscount="25"
            MinusOrPlus="+"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 6"
            FirstPrice="222"
            SecondPrice="333"
            MySecond="5"
            MyMiniute="2"
            MyHour="1"
            MyDays="13"
            MyDiscount="25"
            MinusOrPlus="+"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
        </>
      ),
    },
    {
      label: "حلقه",
      pishnahads: () => (
        <>
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 1"
            FirstPrice="500"
            SecondPrice="900"
            MySecond="57"
            MyMiniute="35"
            MyHour="11"
            MyDays="143"
            MyDiscount="15"
            MinusOrPlus="-"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img3}
            SecondImageAddress={img4}
            RingName="حلقه زیبا 2"
            FirstPrice="100"
            SecondPrice="200"
            MySecond="2"
            MyMiniute="15"
            MyHour="3"
            MyDays="24"
            MyDiscount="3"
            MinusOrPlus="-"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 3"
            FirstPrice="222"
            SecondPrice="333"
            MySecond="5"
            MyMiniute="2"
            MyHour="1"
            MyDays="13"
            MyDiscount="25"
            MinusOrPlus="+"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 4"
            FirstPrice="222"
            SecondPrice="333"
            MySecond="5"
            MyMiniute="2"
            MyHour="1"
            MyDays="13"
            MyDiscount="25"
            MinusOrPlus="+"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 5"
            FirstPrice="222"
            SecondPrice="333"
            MySecond="5"
            MyMiniute="2"
            MyHour="1"
            MyDays="13"
            MyDiscount="25"
            MinusOrPlus="+"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
          <PishnahadCards
            ImageAddress={img1}
            SecondImageAddress={img2}
            RingName="حلقه زیبا 6"
            FirstPrice="222"
            SecondPrice="333"
            MySecond="5"
            MyMiniute="2"
            MyHour="1"
            MyDays="13"
            MyDiscount="25"
            MinusOrPlus="+"
            MyWidth="220px"
            EmergeHeight="120px"
            EmergePadding="0px 8px"
            HourDisplay="none"
            CardsPadding = "20px 10px"
          />
        </>
      ),
    },
  ];

  const handleMenuClick = (menuIndex) => {
    setSelectedMenu(menuIndex);
  };

  return (
    <div className="">
      <div className="flex flex-col xl:flex-row justify-center mx-20">
        <div className="first  w-[90%] xl:w-[50%]">
          <div className="flex flex-col justify-center">
            <nav className="p-4   w-[95%] text-[2vw] flex justify-center ">
              <ul className="flex  flex-wrap justify-center space-x-3  BadalTextContainer border-b-2">
                {menuItemsConfig.map((item, index) => (
                  <li key={index} className=" mb-2">
                    <button
                      className={`p-2 rounded  focus:outline-none text-slate-700 hover:text-black text-[2.5vw]
                        sm:text-[2vw] md:text-[1.5vw] lg:text-[1.4vw] xl:text-[1.2vw]
                        
                        ${
                        selectedMenu === index ? "bg-slate-100" : ""
                      }`}
                      onClick={() => handleMenuClick(index)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            {selectedMenu !== null && (
              <div className="container">
                <div className="flex flex-wrap justify-center gap-0">
                  {menuItemsConfig[selectedMenu].pishnahads()}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="second hidden md:block xl:w-[45%] mt-4 flex justify-center h-screen
       dark:from-slate-200 dark:to-slate-100 dark:hover:bg-slate-100  focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(140deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(135deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:100%_100%,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:100%_-100%,0_0] hover:before:duration-[1500ms]
         ">
          <img src={gift} alt="" className="rounded-2xl " />
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
