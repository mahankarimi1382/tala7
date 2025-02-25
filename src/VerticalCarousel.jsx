import { useState, useEffect, useRef } from "react";
import img1 from "../src/assets/img/ring8.png";
import img2 from "../src/assets/img/ring7.png";
import img3 from "../src/assets/img/secondring.png";
import img4 from "../src/assets/img/85764.png";
import img5 from "../src/assets/img/GoldenRing.png";
import img6 from "../src/assets/img/774.png";
import img7 from "../src/assets/img/gyf.png";
import img8 from "../src/assets/img/654684.png";

const images = [img1, img2, img3, img4, img5 , img6 , img7 , img8];

const HoverImageEffect = ({ src, size }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const maxMove = 5;
    const offsetX = (0.5 - (e.clientX - left) / width) * (maxMove * 8);
    const offsetY = (0.5 - (e.clientY - top) / height) * (maxMove * 8);

    setPosition({
      x: Math.max(-maxMove, Math.min(maxMove, offsetX)),
      y: Math.max(-maxMove, Math.min(maxMove, offsetY)),
    });
  };

  return (
    <div
      className={`relative ${size} overflow-hidden rounded-lg scale-90 hover:scale-105 transition-transform duration-300 ease-in-out`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
    >
      <img
        src={src}
        alt="Hover Effect"
        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ease-out"
        style={{ transform: `translate(${position.x}%, ${position.y}%)` }}
      />
    </div>
  );
};

const ImageCarousel = ({ visibleThumbnails = 3, autoplaySpeed = 3000, pauseOnHover = true, resumeDelay = 2000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [firstVisible, setFirstVisible] = useState(0);
  const [isVertical, setIsVertical] = useState(window.innerWidth >= 768);
  const autoplayRef = useRef(null);
  const pauseTimeoutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsVertical(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
    setFirstVisible((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    setFirstVisible((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (autoplaySpeed > 0) {
      autoplayRef.current = setInterval(nextImage, autoplaySpeed);
      return () => clearInterval(autoplayRef.current);
    }
  }, [autoplaySpeed]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      clearInterval(autoplayRef.current);
      clearTimeout(pauseTimeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      pauseTimeoutRef.current = setTimeout(() => {
        autoplayRef.current = setInterval(nextImage, autoplaySpeed);
      }, resumeDelay);
    }
  };

  const getThumbnails = () => {
    let thumbList = [...images, ...images];
    return thumbList.slice(firstVisible, firstVisible + visibleThumbnails);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`flex ${isVertical ? "flex-row-reverse" : "flex-col"} items-center gap-4`}>
        {/* Main Display */}
        <div className="relative bg-[#f7f7f7]">
          <HoverImageEffect src={images[activeIndex]} size="w-[60vw] h-[60vw] md:w-[33vw] md:h-[33vw]" />
        </div>

        {/* Thumbnails Section */}
        <div className={`flex ${isVertical ? "flex-col" : "flex-row"} items-center overflow-hidden`}>          
          <button
            onClick={prevImage}
            className="p-2 rounded-full  opacity-100 hover:opacity-50 text-black hover:text-white"
          >
            {isVertical ? (
              <i className="UpFlash"></i>
            ) : (
              <i className="RightFlash"></i>
            )}
          </button>
          {getThumbnails().map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex((firstVisible + index) % images.length)}
              className={`w-20 h-20 overflow-hidden rounded-lg border-2 flex-shrink-0 ${
                activeIndex === (firstVisible + index) % images.length ? "border-yellow-500" : "border-transparent"
              } hover:scale-105 transition-all duration-200`}
            >
              <img src={img} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
            </button>
          ))}
          <button
            onClick={nextImage}
            className="p-4 rounded-full opacity-100 hover:opacity-50   text-black hover:text-white"
          >
             {isVertical ? (
              <i className="DownFlash"></i>
            ) : (
              <i className="LeftFlash"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
