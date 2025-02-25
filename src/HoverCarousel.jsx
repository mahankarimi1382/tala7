import HoverPagecarosel from "./HoverPagecarosel";
import PishnahadCards from "./PishnahadCards";
import img1 from "../src/assets/img/containerring1.png";
import img2 from "../src/assets/img/containerring2.png";


const HoverCarousel = () => {
  return (
    <HoverPagecarosel
      chevronColor="text-[#E8D2B4]"
      chevronMargin="m-4"
      dotColor="bg-[#E8D2B4] opacity-50 hover:opacity-100 transition-opacity  duration-2000 ease-in-out"
    >
      <div className="       "><PishnahadCards
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
            /></div>
      <div className="p-4   text-center     "><PishnahadCards
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
            /></div>
      <div className="p-4   text-center     "><PishnahadCards
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
            /></div>
      <div className="p-4   text-center     "><PishnahadCards
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
            /></div>
    </HoverPagecarosel>
  );
};

export default HoverCarousel;
