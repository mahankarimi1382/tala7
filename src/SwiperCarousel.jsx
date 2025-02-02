import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css'



// import required modules
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import UpCard from './Components/UpCard';


export default function App() {
  return (
    <>
    <div className='mymain w-[70%] mx-auto'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={{
          clickable: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination , Navigation]}
        className="mySwiper  "
      >
        <SwiperSlide>
          <UpCard/>
        </SwiperSlide>
  
      </Swiper>
      </div>
    </>
  );
}
