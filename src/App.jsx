import { Swiper , SwiperSlide } from 'swiper/react';
// // import Swiper styles
import 'swiper/css';
import './style.css'

// import 'swiper/swiper-bundle.css';


function App() {
  return (
    <div>

<Swiper
      spaceBetween={20}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="sample-slider"
      >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
    </Swiper>


    </div>
  )
}

export default App