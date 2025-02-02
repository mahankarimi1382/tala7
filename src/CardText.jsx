import "./index.css"


function CardText() {
  return (
    <div>

<div className="p-4">
            <p className="text-xl font-bold mb-2 text-white animate-fade-in-for-card-texts">
              ارسال سریع به سراسر ایران
            </p>
            <p className=" text-white text-sm animate-fade-in-for-card-texts">
              جدیدترین مدل حلقه های وارداتی
            </p>
            <button
              style={{ backgroundColor: "#c7a984" }}
              className="animate-fade-in-for-card-texts text-xs

              
               dark:from-slate-200 dark:to-slate-100 dark:hover:bg-slate-100 shadow focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]
               
               text-white font-bold py-2 px-4 rounded-full mt-4"
            >
              مشاهده همه
            </button>
          </div>

    </div>
  )
}

export default CardText