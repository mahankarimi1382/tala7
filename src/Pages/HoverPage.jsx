import Basefile from "../basefile";
// import BeautifulBreadCrumb from "../BeautifulBreadCrumb";
import HamburgerBar from "../Components/HamburgerBar";
import MyHeader from "../Components/MyHeader";
import ScrollToTopButton from "../Components/ScrollToTopButton";
// import GridandChevron from "../GridandChevron";
// import My3links from "../My3links";
import MyFooter from "../MyFooter";
import NewsFeed from "../NewsFeed";
import ProductText from "../ProductText";
import SimpleNewsFeed from "../SimpleNewsFeed";
import WoodHeader from "../WoodHeader";
import WrittenFooter from "../WrittenFooter";
import FirstImg from '../assets/img/rose-gold-halfset.png'
import SecondImg from '../assets/img/white-gold.png'
import HoverCarousel from "../HoverCarousel";



function HoverPage() {
  return (
    <div>
      <NewsFeed />
      <hr />
      <SimpleNewsFeed />
      <hr />
      <WoodHeader />
      <hr />
      <MyHeader />
      <hr />
      <HamburgerBar />
      <br />
     <div className="flex mx-4 flex-col md:flex-row ">
     <div className="w-full md:w-1/2 xlg:w-1/3" >
      <Basefile />

      </div>
     <div className="border-black shadow-lg rounded-lg w-full md:w-1/2 xl:w-2/3 z-40 bg-white">
     <ProductText/>

     </div>
     </div>
      <br />
      <br />
      <hr />
      <br /><br />
<div className=" mx-2 md:mx-14 lg:mx-28">
  <p className="font-bold text-[17px] mb-10 text-[#242424]  w-fit">توضیحات</p>
  <h1 className="font-bold text-[24px] text-[#242424] mb-10 " >سنگ توپاز Topaz</h1>
  <p className="leading-10 text-justify text-[16px] text-[#9a8a7b] ">در اخرین گونه از اسم سنگ های قیمتی و زیبا به توپاز میپردازیم. سنگ و انگشتر توپاز غالبا در رنگ‌های آبی و زرد مشاهده می‌شود. از این گوهر باید به خوبی نگه داری به عمل آورد زیرا اسید سولفوریک این کانی را تخریب شیمیایی می‌کند همچنین در زمان تراش دادن و استفاده از این گوهر ارزشمند باید توجه زیادی نمود چرا که امکان دارد آسیب ببیند. به دلیل مشابهت توپاز با برخی سنگ ها آن را توپاز گرانبها و قیمتی نیز می‌خوانند. بزرگ‌ترین و درشت‌ترین بلور توپاز دنیا در سال ۱۹۶۵میلادی در منطقه ای در کشور اوکراین به وزن ۱۰۰ کیلوگرم به رنگ آبی مشاهده شد همچنین سنگ هایی از توپاز به وزن چند هزار قیراط در موزه ایالات متحده محافظت و نگه داری می‌شود.



</p>
<img src={FirstImg} alt=""  className="mx-auto mt-10"/>
<p className="leading-10 text-justify text-[16px] text-[#9a8a7b] ">توپاز طلایی با چاکرای خورشیدی ارتباط نزدیکی دارد و مصریان باستان هم آن را با خدای خورشید در ارتباط میدانسته اند. این نگین انرژی و قدرت حیاتی بدن را افزایش داده و سازمان بدن را تنظیم و فعال می‌کند. استفاده از توپاز طلایی و قرار دادن آن بر روی چاکرای خورشیدی برای درمان بیماری‌های کبدی و پوستی بسیار مفید می‌باشد و علاوه بر تقویت و بهبود عملکرد غدد فوق کلیه و تنظیم آن برای آرامش و همینطور تسکین دردهای ناحیه پشت و ستون فقرات اثر بخشی زیادی دارد.




</p>
<h1 className="font-bold text-[24px] text-[#242424] mb-10 mt-10" >
مروارید 

  </h1>
  <p className="leading-10 text-justify text-[16px] text-[#9a8a7b] ">
  میتوان گفت که مروارید در میان اسامی سنگ های قیمتی و زیبا از برترین گونه‌های این گروه می‌باشد که نحوه تشکیل و ساختار آن بسیار شگفت انگیز است. مروارید یکی از زیباترین و پرطرفدارترین سنگ‌های قیمتی است که نحوه تشکیل و ساختار آن بسیار شگفت‌انگیز است. وقتی ذره شن کوچکی بین صدف و جبه قرار می‌گیرد، جانور به تدریج ماده آهکی به اطراف آن ذره ترشح می‌کند و در طول زمان، مروارید شکل می‌گیرد. درشتی و بزرگی آن به اندازه یک دانه خنثی شروع می‌شود و تا ابعاد تخم کبوتر از آن وجود دارد و در خلیج فارس و اقیانوس هند صید می‌شود.

گوهر مروارید دارای  سفتی و سختی ۳ تا ۴ در مقیاس موس می‌باشد و شکل شکستگی صدفی یا به‌صورت پولکی شکل و اساسا بدون کلیواژ می‌باشد. جلوه این گوهر غالبا نزدیک به کره است ولی به‌صورت شکل‌هایی همچون گلابی، دکمه ای و نامنظم هم مشاهده می‌شود. بزرگی دانه این گوهر قادر است به ابعاد سر سوزن، دانه خشخاش، یک فندق و یا حتی تخم کبوتر باشد. بزرگترین گونه یافت شده از این سنگ های زیبا در منطقه ای در فیلیپین به وسیله یک ماهیگیر یافت شده است.
</p>
<img src={SecondImg} alt=""  className="mx-auto mt-10"/>
<p className="leading-10 text-justify text-[16px] text-[#9a8a7b] ">
وزن این سنگهای زینتی مرغوب با کیفیت و خالص ۳۴ کیلوگرم می‌باشد. این ماهیگیر حدود ده سال مروارید را در زیر تخت خود برای شانس و اقبال آوردن نگه داشته است و در آخر تحویل به مقامات محلی می‌دهد. جالب است بدانید این نگین چیزی در حدود صد میلیون دلار ارزش دارد!



</p>
</div>
<hr />
<h1 className="font-bold text-[24px] text-[#242424] mb-10 mt-10 mx-2 md:mx-14 lg:mx-28" >محصولات مرتبط
</h1>
<div>
  <HoverCarousel/>
</div>
      <br />
      <br />
      
      <br />
      <br />
      <ScrollToTopButton />
      <br />
      <br />
      <br />
      <WrittenFooter />
      <MyFooter />
    </div>
  );
}

export default HoverPage;
