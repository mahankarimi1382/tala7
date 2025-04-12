import React, { useState, useEffect, useRef, useCallback } from 'react';

const SimpleDropdown = ({ options = [], defaultLabel = 'Select an option' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultLabel);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Toggle dropdown open/close
  const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);

  // Handle option selection
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={` relative w-full text-center  ${isOpen ? 'z-50' : 'z-40'}`} ref={dropdownRef}>
      <button
        type="button"
        ref={buttonRef}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        className="inline-flex  justify-between items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {selectedOption}
        <svg
          className={`ml-2 h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="listbox"
        >
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              role="option"
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SimpleDropdown;
