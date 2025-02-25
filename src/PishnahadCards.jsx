import PersianNumber from "./Components/utils/PersianNumber";
import "./index.css";
import { Link } from "react-router-dom";


function PishnahadCards({
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
  MyWidth = "280px",
  EmergeHeight = "170px",
  EmergePadding = "0px 12px",
  CardsPadding = "56px 20px",
  HourDisplay = "block"
}) {
  return (
    <div >
      <div className="BeatyCard " style={{ width: MyWidth , padding: CardsPadding}}>
        <div className=" bg-white border border-gray-200 rounded-lg shadow ">
          <div className="ImageZone relative">
          <Link to="/hover-product-page" className="text-blue-500 underline">


            <div className="imageBox">
            <div className="imageInn">



              <img className=" FirstImage rounded-t-lg block" src={ImageAddress} alt="Main Image" />

              </div>

              <div className=" SecondImage hoverable-object rounded-t-lg block hoverImg  ">
        <img src={SecondImageAddress} alt="Second Image"/>
      </div>
    </div>





    </Link>
    <div className=" emergingHypers   absolute w-[55px] top-[20px] right-[7px] text-white text-center text-sm  p-[1px] bg-[#caa984] rounded-2xl shadow-lg  flex justify-center">
              <div>%</div>
              <div>
                <PersianNumber number={MyDiscount} />
              </div>
              <div>{MinusOrPlus}</div>
            </div>
            <div className="emergingHypers absolute w-auto   top-[20px]  text-black text-center text-sm   bg-white rounded-2xl shadow-lg   flex flex-col justify-around" style={{ height: EmergeHeight , padding: EmergePadding }}> 

            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </svg>
                </a>

                <a href="#">

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                </a>

                <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shuffle" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>
                  <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>
                </svg>
                </a>
                <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                  <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>
                </a>
                
                
                 </div>
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 font-bold tracking-tight text-[#858585] dark:text-white text-start">
                {RingName}
              </h5>
            </a>
            {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {DownText}
            </p> */}
            <div className="pricezone flex  justify-start mb-2">
              <div className="previousprice px-2 line-through  text-[#bbbbbb]">
                <PersianNumber number={FirstPrice} />
              </div>
              <div className="currentprice text-[#d0b493]">
                <PersianNumber number={SecondPrice} />
                تومان
              </div>
            </div>
            <hr style={{ display : HourDisplay}}/>
            <div className="clockZone mt-2" style={{ display : HourDisplay}}>

              <div className=" clockNumbers flex justify-between font-bold text-lg	">
                <div>
                  {" "}
                  <PersianNumber number={MySecond} />{" "}
                </div>
                <div>
                  {" "}
                  <PersianNumber number={MyMiniute} />{" "}
                </div>
                <div>
                  {" "}
                  <PersianNumber number={MyHour} />{" "}
                </div>
                <div>
                  {" "}
                  <PersianNumber number={MyDays} />{" "}
                </div>
              </div>
              <div className="clockTitles flex justify-between text-[#7a7a7a] text-xs"
              >
                <div>ثانیه</div>
                <div>دقیقه</div>
                <div>ساعت</div>
                <div>روز</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PishnahadCards;
