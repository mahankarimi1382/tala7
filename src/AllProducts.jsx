import { useEffect, useState } from "react";
import PishnahadCards from "./PishnahadCards";
// import img1 from "../src/assets/img/containerring1.png";
// import img2 from "../src/assets/img/containerring2.png";
// import img3 from "../src/assets/img/ring8.jpg";
// import img4 from "../src/assets/img/ring9.jpg";
// import img5 from "../src/assets/img/containerring4.png";
// import img6 from "../src/assets/img/containerring3.png";
// import img7 from "../src/assets/img/ring7.jpg";
// import img8 from "../src/assets/img/HajHassan.jpg";
// import img9 from "../src/assets/img/GoldenRing.jpg";
// import img10 from "../src/assets/img/ring.jpg";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import NewsFeed from "./NewsFeed";
import WoodHeader from "./WoodHeader";
import MyHeader from "./Components/MyHeader";
import HamburgerBar from "./Components/HamburgerBar";
import ScrollToTopButton from "./Components/ScrollToTopButton.jsx";
import WrittenFooter from "./WrittenFooter.jsx";
import MyFooter from "./MyFooter.jsx";
import { Get_Products_Show_InVitrin } from "./apicalling/ApiCalling.js";

// const products = [
//   {
//     ImageAddress: img1,
//     SecondImageAddress: img2,
//     RingName: "حلقه زیبا",
//     FirstPrice: "1000",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img2,
//     SecondImageAddress: img3,
//     RingName: "حلقه زیبا",
//     FirstPrice: "10000",
//     SecondPrice: "60",
//     MySecond: "36",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "75",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img3,
//     SecondImageAddress: img4,
//     RingName: "حلقه زیبا",
//     FirstPrice: "30669",
//     SecondPrice: "2587",
//     MySecond: "57",
//     MyMiniute: "25",
//     MyHour: "11",
//     MyDays: "25",
//     MyDiscount: "15",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img4,
//     SecondImageAddress: img5,
//     RingName: "حلقه زیبا",
//     FirstPrice: "69523",
//     SecondPrice: "25876",
//     MySecond: "32",
//     MyMiniute: "25",
//     MyHour: "10",
//     MyDays: "250",
//     MyDiscount: "16",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img5,
//     SecondImageAddress: img6,
//     RingName: "حلقه زیبا",
//     FirstPrice: "1000",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img6,
//     SecondImageAddress: img7,
//     RingName: "حلقه زیبا",
//     FirstPrice: "2587",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img7,
//     SecondImageAddress: img8,
//     RingName: "حلقه زیبا",
//     FirstPrice: "25696",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img8,
//     SecondImageAddress: img9,
//     RingName: "حلقه زیبا",
//     FirstPrice: "2586336",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img9,
//     SecondImageAddress: img10,
//     RingName: "حلقه زیبا",
//     FirstPrice: "889636",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img10,
//     SecondImageAddress: img1,
//     RingName: "حلقه زیبا",
//     FirstPrice: "25663",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img1,
//     SecondImageAddress: img2,
//     RingName: "حلقه زیبا",
//     FirstPrice: "9633365",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img2,
//     SecondImageAddress: img3,
//     RingName: "حلقه زیبا",
//     FirstPrice: "258874",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img3,
//     SecondImageAddress: img4,
//     RingName: "حلقه زیبا",
//     FirstPrice: "366698",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img4,
//     SecondImageAddress: img6,
//     RingName: "حلقه زیبا",
//     FirstPrice: "336636",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img1,
//     SecondImageAddress: img2,
//     RingName: "حلقه زیبا",
//     FirstPrice: "1000",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img2,
//     SecondImageAddress: img3,
//     RingName: "حلقه زیبا",
//     FirstPrice: "10000",
//     SecondPrice: "60",
//     MySecond: "36",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "75",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img3,
//     SecondImageAddress: img4,
//     RingName: "حلقه زیبا",
//     FirstPrice: "30669",
//     SecondPrice: "2587",
//     MySecond: "57",
//     MyMiniute: "25",
//     MyHour: "11",
//     MyDays: "25",
//     MyDiscount: "15",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img4,
//     SecondImageAddress: img5,
//     RingName: "حلقه زیبا",
//     FirstPrice: "69523",
//     SecondPrice: "25876",
//     MySecond: "32",
//     MyMiniute: "25",
//     MyHour: "10",
//     MyDays: "250",
//     MyDiscount: "16",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img5,
//     SecondImageAddress: img6,
//     RingName: "حلقه زیبا",
//     FirstPrice: "1000",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img6,
//     SecondImageAddress: img7,
//     RingName: "حلقه زیبا",
//     FirstPrice: "2587",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img7,
//     SecondImageAddress: img8,
//     RingName: "حلقه زیبا",
//     FirstPrice: "25696",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img8,
//     SecondImageAddress: img9,
//     RingName: "حلقه زیبا",
//     FirstPrice: "2586336",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img9,
//     SecondImageAddress: img10,
//     RingName: "حلقه زیبا",
//     FirstPrice: "889636",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img10,
//     SecondImageAddress: img1,
//     RingName: "حلقه زیبا",
//     FirstPrice: "25663",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img1,
//     SecondImageAddress: img2,
//     RingName: "حلقه زیبا",
//     FirstPrice: "9633365",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img2,
//     SecondImageAddress: img3,
//     RingName: "حلقه زیبا",
//     FirstPrice: "258874",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img3,
//     SecondImageAddress: img4,
//     RingName: "حلقه زیبا",
//     FirstPrice: "366698",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img4,
//     SecondImageAddress: img6,
//     RingName: "حلقه زیبا",
//     FirstPrice: "336636",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img1,
//     SecondImageAddress: img2,
//     RingName: "حلقه زیبا",
//     FirstPrice: "1000",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img2,
//     SecondImageAddress: img3,
//     RingName: "حلقه زیبا",
//     FirstPrice: "10000",
//     SecondPrice: "60",
//     MySecond: "36",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "75",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img3,
//     SecondImageAddress: img4,
//     RingName: "حلقه زیبا",
//     FirstPrice: "30669",
//     SecondPrice: "2587",
//     MySecond: "57",
//     MyMiniute: "25",
//     MyHour: "11",
//     MyDays: "25",
//     MyDiscount: "15",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img4,
//     SecondImageAddress: img5,
//     RingName: "حلقه زیبا",
//     FirstPrice: "69523",
//     SecondPrice: "25876",
//     MySecond: "32",
//     MyMiniute: "25",
//     MyHour: "10",
//     MyDays: "250",
//     MyDiscount: "16",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img5,
//     SecondImageAddress: img6,
//     RingName: "حلقه زیبا",
//     FirstPrice: "1000",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img6,
//     SecondImageAddress: img7,
//     RingName: "حلقه زیبا",
//     FirstPrice: "2587",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img7,
//     SecondImageAddress: img8,
//     RingName: "حلقه زیبا",
//     FirstPrice: "25696",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img8,
//     SecondImageAddress: img9,
//     RingName: "حلقه زیبا",
//     FirstPrice: "2586336",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img9,
//     SecondImageAddress: img10,
//     RingName: "حلقه زیبا",
//     FirstPrice: "889636",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img10,
//     SecondImageAddress: img1,
//     RingName: "حلقه زیبا",
//     FirstPrice: "25663",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img1,
//     SecondImageAddress: img2,
//     RingName: "حلقه زیبا",
//     FirstPrice: "9633365",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img2,
//     SecondImageAddress: img3,
//     RingName: "حلقه زیبا",
//     FirstPrice: "258874",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img3,
//     SecondImageAddress: img4,
//     RingName: "حلقه زیبا",
//     FirstPrice: "366698",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img4,
//     SecondImageAddress: img6,
//     RingName: "حلقه زیبا",
//     FirstPrice: "336636",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img1,
//     SecondImageAddress: img2,
//     RingName: "حلقه زیبا",
//     FirstPrice: "1000",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img2,
//     SecondImageAddress: img3,
//     RingName: "حلقه زیبا",
//     FirstPrice: "10000",
//     SecondPrice: "60",
//     MySecond: "36",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "75",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img3,
//     SecondImageAddress: img4,
//     RingName: "حلقه زیبا",
//     FirstPrice: "30669",
//     SecondPrice: "2587",
//     MySecond: "57",
//     MyMiniute: "25",
//     MyHour: "11",
//     MyDays: "25",
//     MyDiscount: "15",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img4,
//     SecondImageAddress: img5,
//     RingName: "حلقه زیبا",
//     FirstPrice: "69523",
//     SecondPrice: "25876",
//     MySecond: "32",
//     MyMiniute: "25",
//     MyHour: "10",
//     MyDays: "250",
//     MyDiscount: "16",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img5,
//     SecondImageAddress: img6,
//     RingName: "حلقه زیبا",
//     FirstPrice: "1000",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img6,
//     SecondImageAddress: img7,
//     RingName: "حلقه زیبا",
//     FirstPrice: "2587",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img7,
//     SecondImageAddress: img8,
//     RingName: "حلقه زیبا",
//     FirstPrice: "25696",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img8,
//     SecondImageAddress: img9,
//     RingName: "حلقه زیبا",
//     FirstPrice: "2586336",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img9,
//     SecondImageAddress: img10,
//     RingName: "حلقه زیبا",
//     FirstPrice: "889636",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img10,
//     SecondImageAddress: img1,
//     RingName: "حلقه زیبا",
//     FirstPrice: "25663",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img1,
//     SecondImageAddress: img2,
//     RingName: "حلقه زیبا",
//     FirstPrice: "9633365",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img2,
//     SecondImageAddress: img3,
//     RingName: "حلقه زیبا",
//     FirstPrice: "258874",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img3,
//     SecondImageAddress: img4,
//     RingName: "حلقه زیبا",
//     FirstPrice: "366698",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
//   {
//     ImageAddress: img4,
//     SecondImageAddress: img6,
//     RingName: "حلقه زیبا",
//     FirstPrice: "336636",
//     SecondPrice: "50",
//     MySecond: "57",
//     MyMiniute: "35",
//     MyHour: "11",
//     MyDays: "143",
//     MyDiscount: "17",
//     MinusOrPlus: "-",
//   },
// ];

const ITEMS_PER_PAGE = 8;

function AllProducts() {
  const [currentPage, setCurrentPage] = useState(1);

  const [vitrinShow, setVitrinShow] = useState([]);
  console.log(vitrinShow);
  const totalPages = Math.ceil(vitrinShow.length / ITEMS_PER_PAGE);
console.log(totalPages)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedProducts = vitrinShow.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  useEffect(() => {
    Get_Products_Show_InVitrin(setVitrinShow, currentPage);
  },[]);
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <NewsFeed />
      <hr />
      {/* <SimpleNewsFeed /> */}
      <hr />
      <WoodHeader />
      <hr />
      <MyHeader />
      <hr />
      <HamburgerBar />
      <ScrollToTopButton />

      <div className="bg-white">
        <div className=" ms-4 p-3 flex gap-5 items-center text-[#0f4c9d] mb-4 ">
          <Link to="/" target="_blank" rel="noopener noreferrer">
            <IoHomeOutline className="text-[23px]" />
          </Link>
          <p className="text-[18px] font-extrabold tracking-tight">
            {" "}
            همه محصولات
          </p>
        </div>

        <hr className="my-4" />
        <div className="flex items-center justify-center flex-wrap gap-6">
          {selectedProducts.map((product, index) => (
            <PishnahadCards key={index} {...product} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center my-4">
          <button
            className="mx-2 px-4 py-2 bg-gray-300 rounded disabled:opacity-50 mb-1"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            قبلی
          </button>

          <span className=" flex  items-center mb-1 mx-6 text-lg">
            صفحه {currentPage.toLocaleString("fa-IR")}
          </span>

          <button
            className="mx-3 mb-1  px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            بعدی
          </button>
        </div>
      </div>
      <WrittenFooter />

      <MyFooter />
    </div>
  );
}

export default AllProducts;
