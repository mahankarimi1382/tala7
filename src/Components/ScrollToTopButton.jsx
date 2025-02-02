import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Or any other arrow icon of your choice

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Adjust this value to set when the button appears
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling animation
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-16 right-4 bg-[#fce9d1] hover:bg-[#cdb18d] z-50 text-white p-3 rounded-full shadow-md transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none' // Toggle visibility and pointer interaction
      }`}
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;