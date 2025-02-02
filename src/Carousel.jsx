import React, { useState, useRef, useEffect } from "react";
import UpCard from "./Components/UpCard"; // Adjust path if needed
import "../src/index.css";




const Carousel = ({ cards, autoplayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at index 1
    const [transitioning, setTransitioning] = useState(false);
  const [isAutoplaying, setIsAutoplaying] = useState(true);
  const carouselRef = useRef(null); // Get reference to the carousel
  const intervalRef = useRef(null);

    // Function to calculate visible cards (always 1 in this case)
    const getVisibleCards = () => 1;
    const [visibleCards, setVisibleCards] = useState(getVisibleCards);

    // update visible cards when the screen is resized
    useEffect(() => {
        const handleResize = () => {
            setVisibleCards(getVisibleCards());
        };

        window.addEventListener("resize", handleResize);
        handleResize();//run once to calculate the initial value
        return () => window.removeEventListener("resize", handleResize);
    }, []);



  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);

      setCurrentIndex((prevIndex) => {
          let newIndex = prevIndex - 1;
          if(newIndex < 0) {
              newIndex = cards.length;
           }
           return newIndex;
      });
      setTimeout(() => setTransitioning(false), 300);

  };

  const nextSlide = () => {
     if (transitioning) return;
      setTransitioning(true);
      setCurrentIndex((prevIndex) => {
          let newIndex = prevIndex + 1;
          if(newIndex > cards.length + 1){
              newIndex = 1
          }
          return newIndex;
      });
       setTimeout(() => setTransitioning(false), 300);
  };

    const canGoBack = currentIndex > 0;
    const canGoForward = currentIndex < cards.length + 1;


    const sliderTransform = {
        transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`,
        transition: transitioning ? "transform 0.3s ease-in-out": "none",
    };

     const handleDotClick = (index) => {
          if (transitioning) return;
          setTransitioning(true);
         setCurrentIndex(index+1);
         setTimeout(() => setTransitioning(false), 300);
      };
      const dots = [];


  for (let i = 0; i < cards.length; i++) {
    dots.push(
      <button
        key={i}
        onClick={() => handleDotClick(i)}
        className={`h-3 w-3 mx-1 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-200 ${
          currentIndex === i + 1 ? "bg-teal-500" : "bg-teal-200"
        }`}
      ></button>
    );
  }

  // Add cloned elements to achieve an infinite loop
    const clonedCards = [cards[cards.length - 1], ...cards, cards[0]];

    // Autoplay functionality
    useEffect(() => {
        if (!isAutoplaying) {
            clearInterval(intervalRef.current);
            return;
        }
        intervalRef.current = setInterval(() => {
            if(isAutoplaying){
               nextSlide()
            }
        }, autoplayInterval);
        return () => clearInterval(intervalRef.current);
    }, [isAutoplaying, nextSlide, autoplayInterval]);


  return (
    <div
      className="relative overflow-hidden mx-auto w-full mt-11"
        onMouseEnter={() => setIsAutoplaying(false)}
        onMouseLeave={() => setIsAutoplaying(true)}
    >
      <div
        ref={carouselRef}
          className="w-full flex transition-transform duration-500 ease-in-out"
      >
        <div className="flex relative" style={sliderTransform}>
            {clonedCards.map((card, index) => (
                <div className="flex-shrink-0 w-full" key={index}>
                    <UpCard IMGAddress={card.IMGAddress} />
                </div>
            ))}
        </div>
      </div>
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-2 md:px-4 lg:px-12">
        <button
            disabled={!canGoBack}
            onClick={prevSlide}
            className={`z-10 p-2 rounded-full text-teal-900 hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-200 ${!canGoBack && 'opacity-50 cursor-not-allowed'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
            disabled={!canGoForward}
            onClick={nextSlide}
          className={`z-10 p-2 rounded-full text-teal-900 hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-200 ${!canGoForward && 'opacity-50 cursor-not-allowed'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      {/* Pagination Dots */}
      <div className="flex justify-center mt-4">{dots}</div>
    </div>
  );
};

export default Carousel;