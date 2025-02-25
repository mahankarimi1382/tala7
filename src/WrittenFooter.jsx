import enamad from "../src/assets/img/enamad.png";
import samandehi from "../src/assets/img/samandehi.png";
import "../src/index.css";
import banks from "../src/assets/img/banks.png";
import PersianNumber from "./Components/utils/PersianNumber";


function WrittenFooter() {
  return (
    <div className="bg-[#183335] py-7  WrittenFooter  z-40">
      <div className="flex flex-wrap justify-around">
      <div className="FirstSections flex flex-wrap justify-center">
        <div className="text-white  Avval ms-2">
          <div className="text-lg">سکه</div>
          <p className="text-md">امامی</p>
          <p className="text-md">بهار آزادی</p>
          <p className="text-md">نیم سکه</p>
          <p className="text-md">ربع سکه</p>
          <p className="text-md">سکه گرمی</p>
        </div>
        <div className="text-white  Dovvm mx-9 md:mx-4">
          <div className="text-lg">زیورآلات مردانه</div>
          <p>گردبند</p>
          <p>دستبند</p>
          <p>انگشتر</p>
          
        </div>
        <div className="text-white mx-9 md:mx-4">
          <div className="text-lg">زیورآلات زنانه</div>
          <p>گردنبند</p>
          <p>النگو</p>
          <p>سینه ریز</p>
          <p>دستبند</p>
        </div>
        <div className="text-white mx-9 md:mx-4">
          <div className="text-lg">رده بندی سنی</div>
          <p>خردسال</p>
          <p>بزرگسال</p>
          <p>اسپرت</p>
          <p>کلاسیک</p>
        </div>
      </div>
      <div className="SecondSection">
        <div className="writenThing">
          <div className="text-white font-bold text-lg">اعتماد شما افتخار ماست</div>
        </div>
        <div className="twiImages flex flex-wrap space-y-5 space-x-5 justify-center">
          <img src={enamad} alt="" />
          <img src={samandehi} alt="" />
        </div>
      </div>
      </div>
      <hr />
      <div className="ThirdSection text-white my-6 flex flex-wrap justify-around mx-6 space-x-6 space-y-6 ">
        <h2 className="flex align-middle pt-7">تمامی حقوق برای طلا
          <span>
          <PersianNumber number={7} />
          </span>
           محفوط است</h2>
        <img src={banks} alt="" />
      </div>
      
     
    </div>
  );
}

export default WrittenFooter;
