import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HoverPagecarosel = ({
  children,
  chevronColor = "text-gray-800",
  chevronMargin = "m-2",
  dotColor = "bg-gray-500",
  responsive = {
    base: 3,
    sm: 1,
    md: 3,
    lg: 2,
  },
}) => {
  const sliderRef = React.useRef(null);

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className={`absolute -right-32 top-1/2  opacity-50  hidden lg:visible hover:opacity-100 transition-opacity  duration-2000 ease-in-out -translate-y-1/2 z-10 p-2 bg-white rounded-full hover:shadow-lg ${chevronMargin}`}
    >
      <ChevronRight className={chevronColor} />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className={`absolute -left-32 top-1/2 -translate-y-1/2 hidden lg:visible z-10 p-2 bg-white opacity-5
        0 hover:opacity-100 transition-opacity  duration-3000
ease-in-out rounded-full hover:shadow-lg ${chevronMargin}`}
    >
      <ChevronLeft className={chevronColor} />
    </button>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: responsive.base,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    customPaging: () => (
      <div className={`w-3 h-3 rounded-full mx-1 mt-10 ${dotColor}`}></div>
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: responsive.lg } },
      { breakpoint: 768, settings: { slidesToShow: responsive.md } },
      { breakpoint: 640, settings: { slidesToShow: responsive.sm } },
    ],
  };

  return (
    <div className="relative w-2/3 mx-auto">
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default HoverPagecarosel;
