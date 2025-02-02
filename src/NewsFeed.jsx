import "./index.css"


function NewsFeed() {
  return (
    <div>


    <div className="news-container bg-gradient-to-l  from-[#c7a984] to-orange-100 sticky z-50 hidden sm:block">
        <div className="title bg-gradient-to-r  from-[#c7a984] to-orange-100
         dark:from-slate-200 dark:to-slate-100 dark:hover:bg-slate-100 shadow focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]">
            اخبار امروز
            <span className="relative flex h-3 w-3 mx-3">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cf352a] opacity-100"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#d3b795]"></span>
</span>
        </div>

        
        <ul>
           <li>متن اول</li>
           <li>متن دوم</li>
           <li>متن سوم</li>
           <li>متن چهارم</li>
        </ul>
    </div>


    </div>
  )
}

export default NewsFeed