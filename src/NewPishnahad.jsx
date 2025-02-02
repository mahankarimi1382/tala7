import { useRef } from "react"; // Import useRef
import img1 from "../src/assets/img/containerring1.png";
import img2 from "../src/assets/img/containerring2.png";
import img3 from "../src/assets/img/containerring3.png";
import img4 from "../src/assets/img/containerring4.png";
import "./index.css";
import PersianNumber from "./Components/utils/PersianNumber";
import PishnahadCards from "./PishnahadCards";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "../src/styleofSider.css";
// import styles from "./slider1.modules.css"
import UpCardforcarousel from "../src/UpCardforcarousel";
// import required modules
import { Keyboard, Pagination, Autoplay } from "swiper/modules";

export default function NewPishnahad({
  ImageAddress,
  RingName,
  //   DownText,
  FirstPrice,
  SecondPrice,
  MySecond,
  MyMiniute,
  MyHour,
  MyDays,
  MyDiscount,
  MinusOrPlus,
  SecondImageAddress,
}) {
  const swiperRef = useRef(null); // Create a ref for the Swiper instance

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="first">
     <p className="text-center  block lg:hidden text-xl
     [text-shadow:_0_4px_8px_rgb(225,201,170)] text-[#000000]
    
     ">پیشــنهاد ویژه شگفتــ انــگیز</p>
    <div className=" Pishnahad-carousel-container carousel-container ">
      <div className="  bg-[#d5c2ae] sticky  z-40 text-center">
        <div className="vizhe mr-16 my-auto  text-center hidden lg:block">
          <h2 className=" Neveshte text-3xl text-white w-[75%]   ">
            پیشــنهاد ویژه شگفتــ انــگیز
          </h2>
          <div className="mt-9">
            <a
              href="#"
              className="text-white Moshahedeh ring-4 ring-[#eae1d7] rounded px-4 py-[7px] text-sm 
           font-bold  hover:ring-white transition duration-300  ml-24 
           "
            >
              مشاهده همه {" "}
              &gt;{" "}
            </a>
          </div>
        </div>
      </div>{" "}
      {/* Container for slider and buttons */}
      <button
        className="carousel-button prev-button 
       
        "
        onClick={handleNext}
      >
        {" "}
        &gt;{" "}
      </button>
      <Swiper
        onSwiper={(swiper) => {
          if (swiperRef && swiperRef.current) {
            swiperRef.current.swiper = swiper;
          }
        }}
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={35}
        breakpoints={{
          50: {
            slidesPerView: 1,
          },

          700: {
            slidesPerView: 2,
          },
          1300: {
            slidesPerView: 4,
          }
        }}
        keyboard={{
          enabled: true,
        }}
        
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[Keyboard, Pagination, Autoplay]}
        className="swiper"
      >
        <div className=" Cards__yard  ">
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
            <PishnahadCards
              ImageAddress={img1}
              SecondImageAddress={img2}
              RingName="حلقه زیبا"
              FirstPrice="600000"
              SecondPrice="700000"
              MySecond="57"
              MyMiniute="35"
              MyHour="11"
              MyDays="143"
              MyDiscount="17"
              MinusOrPlus="-"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PishnahadCards
              ImageAddress={img1}
              SecondImageAddress={img2}
              RingName="حلقه زیبا"
              FirstPrice="5000000"
              SecondPrice="4500000"
              MySecond="57"
              MyMiniute="35"
              MyHour="11"
              MyDays="143"
              MyDiscount="17"
              MinusOrPlus="-"
            />
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
        </div>
      </Swiper>
      <button className="carousel-button next-button" onClick={handlePrev}>
        {" "}
        &lt;{" "}
      </button>
    </div>
    
    </div>
  );
}
