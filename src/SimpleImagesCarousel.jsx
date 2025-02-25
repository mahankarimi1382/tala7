import { useRef } from "react"; // Import useRef
import img1 from "./assets/img/image1.jpg";
import img2 from "./assets/img/image2.jpg";
import img3 from "./assets/img/image3.jpg";

import styles from "./Carousel.module.css"; // Import CSS module

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";

// import required modules
import { Keyboard, Autoplay } from "swiper/modules";

export default function SimpleImagesCarousel() {
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
    <div className={styles.carouselContainer}>
      <div className="w-full z-50">
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
          spaceBetween={50}
          breakpoints={{
            50: {
              slidesPerView: 1,
            },

            700: {
              slidesPerView: 2,
            },
            1300: {
              slidesPerView: 3,
            },
          }}
          keyboard={{
            enabled: true,
          }}
          loop={true}
          autoplay={{ delay: 3000 }}
          modules={[Keyboard, Autoplay]}
          className="swiper4"
        >
          <div className="  ">
            <SwiperSlide>
              <img src={img1} alt="" className="w-5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="" className="w-5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" />
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
