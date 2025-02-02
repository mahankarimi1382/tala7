import React, { useRef } from 'react'; // Import useRef
import img1 from "../src/assets/img/1.png"
import img2 from "../src/assets/img/2.png"
import img3 from "../src/assets/img/3.png"
import img4 from "../src/assets/img/4.png"
import img5 from "../src/assets/img/5.png"
import img6 from "../src/assets/img/6.png"
import img7 from "../src/assets/img/7.png"


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../src/styleofSider.css";

 
// import required modules
import { Keyboard, Pagination, Autoplay } from "swiper/modules";

export default function App() {
    const swiperRef = useRef(null); // Create a ref for the Swiper instance


  const handlePrev = () => {
        if(swiperRef.current && swiperRef.current.swiper){
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
           swiperRef.current.swiper.slideNext();
        }
    };

  return (
    <div className=" ImageCarousel-carousel-container carousel-container"> {/* Container for slider and buttons */}
        <button className="carousel-button prev-button 
       
        " onClick={handleNext}> &gt; </button>
      <Swiper
        onSwiper={(swiper) => {
            if (swiperRef && swiperRef.current) {
                swiperRef.current.swiper = swiper;
            }
        }}
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{

          480: {
            slidesPerView: 1,
          },
          620: {
            slidesPerView: 2,
          },
          820: {
            slidesPerView: 3,
          },
          950: {
            slidesPerView: 4,
          },
          1170: {
            slidesPerView: 5,
          },
          1240: {
            slidesPerView: 6,
          },
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
        <SwiperSlide><img src={img1} alt=""
        className='my-12[!important]'
        />
        <br />
        <h4>تاج عروس</h4>
        </SwiperSlide>
        <SwiperSlide><img src={img2} alt=""
        className='my-12[!important]'
        />
        <br />
        <h4>سینه ریز</h4>
        </SwiperSlide>
        <SwiperSlide><img src={img3} alt=""
        className='my-12[!important]'
        />
        <br />
        <h4>دستبند</h4>
        </SwiperSlide>
        <SwiperSlide><img src={img4} alt=""
        className='my-12[!important]'
        />
        <br />
        <h4>حلقه ازدواج</h4>
        </SwiperSlide>
        <SwiperSlide><img src={img5} alt=""
        className='my-12[!important]'
        />
        <br />
        <h4>ساعت مچی</h4>
        </SwiperSlide>
        <SwiperSlide><img src={img6} alt=""
        className='my-12[!important]'
        />
        <br />
        <h4>پیرسینگ</h4>
        </SwiperSlide>
        <SwiperSlide><img src={img7} alt=""
        className='my-12[!important]'
        />
        <br />
        <h4>گوشواره</h4>
        </SwiperSlide>

      </Swiper>
        <button className="carousel-button next-button" onClick={handlePrev}> &lt; </button>
    </div>
  );
}