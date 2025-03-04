import { SlWallet } from "react-icons/sl";
import { FaChartLine } from "react-icons/fa6";
import img1 from "../assets/CardBG/corner-1.png";
import img2 from "../assets/CardBG/corner-2.png";
import img3 from "../assets/CardBG/corner-3.png";
import img4 from "../assets/CardBG/corner-1.png";

function AdminPageCad({
  ImageNum = img1,
  First = "معاملات روزانه",
  Second = "ریال",
  Third = "0 ریال",
  Fourth = "موجودی کل",
  Fifth = "خرید طلا",
  Icon = SlWallet,  // Default icon as SlWallet
}) {
  return (
    <div
      className="border rounded-lg p-3 flex flex-col gap-6 w-[300px] md:w-[250px] lg:w-[300px] xl:w-[250px]"
      style={{ backgroundImage: `url(${ImageNum})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="firstRow flex justify-between">
        <div className="RightofFirstRow flex justify-around gap-2">
          <div>
            <Icon /> {/* Render the dynamic icon */}
          </div>
          <div className="font-bold text-[14px]">{First}</div>
        </div>
        <div className="currency font-bold text-[12px]">{Second}</div>
      </div>
      <div className="secondRow font-extrabold text-[18px]">{Third}</div>
      <div className="lastRow flex justify-between font-normal text-[14px]">
        <div className="text-[12px]">{Fourth}</div>
        <div className="text-[12px]">{Fifth}</div>
      </div>
    </div>
  );
}

export default AdminPageCad;
