import { useRef } from "react"; // Import useRef

import GoldenRing from "../src/assets/img/GoldenRing.png";
// import CrownRing from "../src/assets/img/wedding-ring-png-45279.png"
// import HeartRing from "../src/assets/img/newring.png";
import ring2 from "../src/assets/img/654684.png";
import ring3 from "../src/assets/img/gyf.png";
import ring4 from "../src/assets/img/774.png";
import ring5 from "../src/assets/img/85764.png";
import ring6 from "../src/assets/img/secondring.png";
// import ring7 from "../src/assets/img/ring7.png";
// import ring8 from "../src/assets/img/ring8.png";
// import ring9 from "../src/assets/img/ring9.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../src/styleofSider.css";
// import styles from "./slider1.modules.css"
import UpCardforcarousel from "../src/UpCardforcarousel";
// import required modules
import { Keyboard, Pagination, Autoplay } from "swiper/modules";

export default function UpcardCarousel() {
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
    <div className=" Upcard-carousel-container carousel-container flex justify-center">
      {" "}
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
        spaceBetween={20}
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
        <SwiperSlide>
          <UpCardforcarousel IMGAddress={GoldenRing} />
        </SwiperSlide>
        <SwiperSlide>
          <UpCardforcarousel IMGAddress={ring2} />
        </SwiperSlide>
        <SwiperSlide>
          <UpCardforcarousel IMGAddress={ring3} />
        </SwiperSlide>
        <SwiperSlide>
          <UpCardforcarousel IMGAddress={ring4} />
        </SwiperSlide>
        <SwiperSlide>
          <UpCardforcarousel IMGAddress={ring5} />
        </SwiperSlide>
        <SwiperSlide>
          <UpCardforcarousel IMGAddress={ring6} />
        </SwiperSlide>
        
      </Swiper>
      <button className="carousel-button next-button" onClick={handlePrev}>
        {" "}
        &lt;{" "}
      </button>
    </div>
  );
}
