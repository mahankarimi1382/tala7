import { useState, useEffect } from "react";
import img1 from "../src/assets/img/ring8.png";
import img2 from "../src/assets/img/containerring1.png";
import img3 from "../src/assets/img/containerring2.png";
import img4 from "../src/assets/img/containerring3.png";
import img5 from "../src/assets/img/containerring4.png";

const images = [img1, img2, img3, img4, img5];

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
        style={{
          transform: `translate(${position.x}%, ${position.y}%)`,
        }}
      />
    </div>
  );
};

const VerticalCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [firstVisible, setFirstVisible] = useState(0);
  const visibleThumbnails = 3;
  const autoplaySpeed = 3000; // 3 seconds per image

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
    if ((firstVisible + 1) % images.length < images.length - visibleThumbnails + 1) {
      setFirstVisible((prev) => (prev + 1) % images.length);
    } else {
      setFirstVisible(0); // Loop back to the start
    }
  };

  useEffect(() => {
    const autoplay = setInterval(nextImage, autoplaySpeed);
    return () => clearInterval(autoplay);
  }, []);

  return (
    <div className="flex items-center gap-4 p-4">
      {/* Thumbnails Section */}
      <div className="flex flex-col items-center p-6 space-y-5">
        {/* Up Button */}
        <button
          onClick={() => setFirstVisible((prev) => (prev === 0 ? images.length - visibleThumbnails : prev - 1))}
          className="p-2  rounded-full hover:bg-gray-200 transition "
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" classNamess="bi bi-chevron-compact-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
          </svg>
        </button>

        {/* Visible Thumbnails */}
        <div className="relative h-[250px] w-[80px] overflow-hidden flex flex-col">
          {images.slice(firstVisible, firstVisible + visibleThumbnails).map((img, index) => (
            <button
              key={firstVisible + index}
              onClick={() => setActiveIndex(firstVisible + index)}
              className={`w-20 h-20 overflow-hidden rounded-lg border-2 flex-shrink-0 ${
                activeIndex === firstVisible + index ? "border-yellow-500" : "border-transparent"
              } hover:scale-105 transition-all duration-200`}
            >
              <img src={img} alt={`Thumbnail ${firstVisible + index}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Down Button */}
        <button
          onClick={() => setFirstVisible((prev) => (prev + 1) % images.length)}
          className="p-2  rounded-full hover:bg-gray-200 transition"
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-down" viewBox="0 0 16 16">
           <path fillRule-rule= "evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
         </svg>
        </button>
      </div>

      {/* Main Display */}
      <div className="relative">
        <HoverImageEffect src={images[activeIndex]} size="w-96 h-96" />
      </div>
    </div>
  );
};

export default VerticalCarousel;
