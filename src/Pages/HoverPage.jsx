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
  <h1 className="font-bold text-[24px] text-[#242424] mb-10 " >معرفی مادربرد ROG Crosshair VIII Extreme ایسوس
  </h1>
  <p className="leading-10 text-justify text-[16px] text-[#9a8a7b] ">از نام این محصول هم می‌توان دریافت که با یک مادربرد در فرم فاکتور E-ATX روبرو هستیم که دارای یک سیستم انتقال نیروی قدرتمند با طراحی 2+18 است. تمامی خازن‌های این مادربرد، خازن‌های 10K بسیار باکیفیت ژاپنی هستند که با همراهی چوک‌های آلیاژی و فازهای تغذیه 90A آماده انتقال باکیفیت نیرو به سایر قطعات سیستم هستند. این مادربرد از طریق دو کابل 8 پین EPS پردازنده را تغذیه می‌کند و بدین ترتیب پردازنده می‌تواند به فرکانس‌های بالاتر از حد استاندارد نیز اورکلاک شود بدون آنکه کمبودی از نظر نیروی مورد نیاز احساس کند. اگرچه چیپست این مادربرد X570 است نه X570S اما سیستم خنک کننده چیپست از نوع پسیو بوده و از این حیث شبیه به ROG Crosshair VII Dark Hero است.

</p>
<img src={FirstImg} alt=""  className="mx-auto mt-10"/>
<p className="leading-10 text-justify text-[16px] text-[#9a8a7b] ">
مانند دیگر مادربردهای X570، مادربرد پرچمدار ایسوس نیز دارای 4 اسلات برای قرارگیری رم‌های DDR4 است و می توانید تا 128 گیگابایت رم بر روی این مادربرد قرار دهید. در حال حاضر ایسوس حداکثر فرکانس رم قابل پشتیبانی توسط این مادربرد را اعلام نکرده اما انتظار می‌رود ROG Crosshair VIII Extreme رم‌هایی با حداکثر فرکانس 5100 مگاهرتز را در زمان همراه شدن با پردازنده‌های رایزن سری 5000 پشتیبانی کند.همچنین Crosshair VIII Extreme مجهز به شش پورت ساتا و پنج اسلات M.2 PCIe 4.0 x4 می‌باشد که البته برای استفاده از آن باید سیستم شما به رایزن سری 5000 یا 3000 باشد، در غیر این صورت اسلات‌ها در حالت PCIe 3.0 x4 فعالیت خواهند کرد. سه مورد از این اسلات‌ها مستقیما به پردازنده متصلند و دو اسلات دیگر به سمت چیپست X570 هدایت شده‌اند.


</p>
<h1 className="font-bold text-[24px] text-[#242424] mb-10 mt-10" >
  سنگ تمام ایسوس برای پرچمدار پلتفرم AM4

  </h1>
  <p className="leading-10 text-justify text-[16px] text-[#9a8a7b] ">
    در بخش گزینه‌های توسعه دهنده، پرچمدار ایسوس دو اسلات PCIe 4.0 x16 و یک اسلات PCIe 3.0 x1 را در اختیار کاربران قرار می‌دهد که مورد دوم وابسته به چیپست X570 است. در بخش اتصالات به اینترنت نیز Crosshair VIII Extreme به یک پورت شبکه 10 گیگابیتی از طریق کنترلر Marvell AQtion AQC113CS و همچنین پورت شبکه 2.5 گیگابیتی با کنترلر Intel I225-V مجهز است. همچنین این مادربرد از سیستم اتصال بیسیم 2*2 Wi-Fi 6E و بلوتوث 5.2 برای کاربران که به سیم و کابل علاقه‌ای ندارند پشتیبانی می‌کند.

</p>
<img src={SecondImg} alt=""  className="mx-auto mt-10"/>
<p className="leading-10 text-justify text-[16px] text-[#9a8a7b] ">
اگر چه ایسوس هنوز صفحه مشخصات این محصول را تکمیل نکرده اما طبق تصاویر مادربرد، 8 پورت USB در پنل پشتی دیده می‌شود. جیزی که مسلم است این مادربرد از دو پورت Thunderbolt 4 با پشتیبانی از خروجی‌های تصویر DisplayPort 1.4 برخوردار بوده و همچنین دارای دو پورت DisplayPort-In است. سیستم صوتی مادربرد پرچمدار AM4 ایسوس بر پایه کدک Realtek ALC4082 با فناوری SupremeFX ایسوس است. به عنوان یک مادربرد حرفه‌ای و رده بالا، ایسوس تراشه ESS Sabre 9018Q2XC DAC-APM را همراه بخش صوتی این محصول کرده است. در نهایت برای تکمیل کردن زرق و برق‌های این مادربرد لوکس، ایسوس یک نمایشگر 2 اینچی OLED را نیز به همراه سیستم نصب ضامنی حافظه‌های SSD M.2 و نگهدارنده کارت گرافیک به ROG Crosshair VIII Extreme اضافه کرده است. کمپانی هنوز قیمت و زمان عرضه این مادربرد را اعلام نکرده است.


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
