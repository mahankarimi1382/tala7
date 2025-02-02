

import { useState, useEffect, useRef } from "react";
import moveImageLeft from "./moveImageLeft";
import imgRing from "../assets/img/gyf.png"

function DownCard() {
  const [scrollY, setScrollY] = useState(0);
  const [isEffectActive, setIsEffectActive] = useState(false);
  const timeoutRef = useRef(null);
  const parallaxFactor = 0.07;

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setIsEffectActive(true);
    }, 2000);

    return () => clearTimeout(delayTimeout);
  }, []);

  useEffect(() => {
    if (!isEffectActive) return;

    const handleScroll = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current); // Clear any pending timeout

      timeoutRef.current = setTimeout(() => {
        setScrollY(window.scrollY);
      }, 300); // miliseconds delay for up ordown scroll effect of the ring
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current); // Clear on unmount
    };
  }, [isEffectActive]);

  const image2Style = {
    transform: `translateY(-${scrollY * parallaxFactor}px)`,
    transition: "transform 1s ease-out",
  };



  

  return (
    <>
      <div className="mt-11 grid grid-cols-12 z-50">
        <div className="relative  sm:p-6  bg-white shadow-lg  col-start-1 col-span-12 bg-gradient-to-l  from-teal-950 to-teal-900">
          {/* Text Content */}
          <div className="p-4">
            <p className="FastDeli font-bold mb-6 text-white animate-fade-in-for-card-texts sm:text-[2.7vw]
            lg:text-[2.6vw] xl:text-[2.3vw]
            ">
              ارسال سریع به سراسر ایران
            </p>
            <p className=" NewestMod text-white mb-6 text-sm animate-fade-in-for-card-texts sm:text-[1.8vw]
            lg:text-[2.1vw] xl:text-[2vw]
            
            ">
              جدیدترین مدل حلقه های وارداتی
            </p>
            <button
              style={{ backgroundColor: "#c7a984" }}
              className=" Moshi animate-fade-in-for-card-texts  dark:from-slate-200 dark:to-slate-100 dark:hover:bg-slate-100 shadow focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms] text-white font-bold py-2 px-4 rounded-full mt-4 
               sm:text-[1.6vw] lg:text-[1.3 vw] xl:text-[1.2vw]"
            >
              مشاهده همه
            </button>
          </div>

          {/* Ring Image */}
          {/* the component called onload relates to horiziontal move when element loads */}
          <img
            id="Ring"
            onLoad={moveImageLeft}
            src={imgRing}
            alt="Image 2"
            className="  absolute bottom-0  halghe left-0 -mb-16 ml-8 w-[20%]  h-auto filter drop-shadow-[0_10px_5px_rgba(0,0,0,0.25)]"
            style={image2Style}
          />
        </div>
      </div>
    </>
  );
}

export default DownCard;
