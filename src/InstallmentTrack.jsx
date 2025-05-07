import "./CSS/classes.css"


const toPersianDigits = (num) => {
  if (!num) return "-";
  const formattedNumber = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return formattedNumber.replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);
};

function InstallmentTrack() {
  return (
    // <!-- From Uiverse.io by Smit-Prajapati --> 
<div>
<div className="parent mt-10 mx-auto">
  <div className="card">
      <div className="content-box bg-gradient-to-r from-[#00467F] to-[#A5CC82] ">
          <span className="card-title ">آموزش  خرید طلا</span>
          <p className="card-content">
اینجا آنچه را نمی‌دانید، می‌آموزید و آنچه را می‌دانید، به کار می‌بندید          </p>
          <span className="see-more">بیشتر بدانید </span>
      </div>
      <div className="date-box">
          <span className="month">خرداد</span>
          <span className="date">{toPersianDigits(29)}</span>
      </div>
  </div>
</div>
  <hr className="my-3"/>
  <div className=" relative w-[40%] h-20 bg-red-700 mx-auto mt-10">
    <div className=" w-10 h-10 bg-blue-600 mx-auto my-auto  "></div>
  </div>
</div>
  )
}

export default InstallmentTrack