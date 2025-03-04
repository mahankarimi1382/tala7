import AdminPageCad from "./Cards/AdminPageCad";
import img1 from "../src/assets/CardBG/corner-1.png";
import img2 from "../src/assets/CardBG/corner-2.png";
import img3 from "../src/assets/CardBG/corner-3.png";
import img4 from "../src/assets/CardBG/corner-5.png";
import { IoHomeOutline } from "react-icons/io5";
import { SlWallet } from "react-icons/sl";
import { FaChartLine } from "react-icons/fa6";
import { TbBrandDaysCounter } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { Link } from "react-router-dom";


function DashBoard() {
  return (
    <div>
      <div className="flex gap-2 items-center text-[#0f4c9d] ">
        <Link to="/" target="_blank" rel="noopener noreferrer">
       
          <IoHomeOutline className="font-[23px]" />
        
        </Link>
        <p className="text-[18px] font-extrabold">حساب کابری</p>
      </div>
      <hr className="my-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <AdminPageCad />
        <AdminPageCad ImageNum={img2} Icon={GiMoneyStack} />
        <AdminPageCad ImageNum={img3} Icon={FaChartLine} />
        <AdminPageCad ImageNum={img4} Icon={TbBrandDaysCounter} />
      </div>
    </div>
  );
}

export default DashBoard;
