import enamad from "../src/assets/img/enamad.png";
import samandehi from "../src/assets/img/samandehi.png";
import "../src/index.css";
import banks from "../src/assets/img/banks.png";

function WrittenFooter() {
  return (
    <div className="bg-[#183335] py-7  WrittenFooter  z-40">
      <div className="flex flex-wrap justify-around">
      <div className="FirstSections flex flex-wrap justify-center">
        <div className="text-white  Avval ms-2">
          <div className="text-lg">بهداشت شخصی</div>
          <p className="text-md">سلامت عمومی</p>
          <p className="text-md">بهداشت سالمندان</p>
          <p className="text-md">بهداشت جنسی</p>
          <p className="text-md">بهداشت بانوان</p>
          <p className="text-md">بهداشت دهان و دندان</p>
        </div>
        <div className="text-white  Dovvm mx-9 md:mx-4">
          <div className="text-lg">مردانه</div>
          <p>محصولات بدن آقایان</p>
          <p>اصلاح آقایان</p>
          <p>محصولات موی آقایان</p>
          <p>محصولات پوست آقایان</p>
        </div>
        <div className="text-white mx-9 md:mx-4">
          <div className="text-lg">لوازم شخص برقی</div>
          <p>حالت دهنده های برقی</p>
          <p>اصلاح صورت و بدن</p>
          <p>سایر لوزام شخصی برقی</p>
          <p>خشک کن ها</p>
        </div>
        <div className="text-white mx-9 md:mx-4">
          <div className="text-lg">سالنی</div>
          <p>تجهیزات آزمایشگاهی</p>
          <p>کتاب و جزوه</p>
          <p>اپیلاسیون</p>
          <p>کاشت و طراحی ناخن</p>
          <p>اکستنشن</p>
          <p>ابزار آرایش و پیرایش</p>
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
        <h2 className="flex align-middle pt-7">تمامی حقوق برای طلا7 محفوط است</h2>
        <img src={banks} alt="" />
      </div>
      
     
    </div>
  );
}

export default WrittenFooter;
