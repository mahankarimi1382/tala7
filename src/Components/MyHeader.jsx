import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faChevronDown, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const MyHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [subDropdownOpen, setSubDropdownOpen] = useState(null);
  const subMenuRefs = useRef({});
  const timeoutRef = useRef(null); // <-- Used for delay

  // Handle main dropdown hover
  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current); // Prevent closing too soon
    setDropdownOpen(index);
    setSubDropdownOpen(null);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(null);
      setSubDropdownOpen(null);
    }, 200); // <-- Adds a delay before closing
  };

  // Handle sub-menu hover
  const handleSubMouseEnter = (index) => {
    clearTimeout(timeoutRef.current); // Prevent closing too soon
    setSubDropdownOpen(index);
  };

  const handleSubMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setSubDropdownOpen(null);
    }, 200);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current); // Cleanup on unmount
  }, []);

  const transitionClasses = "transition-opacity duration-200 transform";
  const chevronTransitionClasses = "transition-opacity duration-200";

  const navItems = [
    { label: "خانه", path: "/" },
    { label: "", path: "/" },
    {
      label: "محصولات",
      path: "/search-product",
      dropdownItems: [
        { label: "انواع محصولات", subItems: ["زنانه", "مردانه", "بچگانه", "بزرگسال"] },
        { label: "مدل ها", subItems: ["اسپرت", "کلاسیک", "سنتی"] },
        { label: "طرح های فروش", subItems: ["فروش ویژه", "بدون اجرت", "تخفیف دار"] },
      ],
    },
    { label: "معاملات آنی", dropdownItems: [{ label: "سکه" }, { label: "ارز" }] },
    { label: "تالار معاملات", path: "/trading-hall" },
    { label: "خرید قسطی", dropdownItems: [{ label: "ثبت درخواست" }, { label: "پیگیری درخواست" }] },
  ];

  return (
    <header className="sticky top-0 bg-[#FAFAFA] shadow-md z-30 hidden md:block">
      <nav className="container mx-auto px-4 py-2 flex justify-center items-center">
        <ul className="flex space-x-7 relative">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={item.path || "#"} 
                className="text-black px-1 cursor-pointer hover:text-gray-500 flex items-center p-2 hover-underline-animation left"
              >
                {item.label}
                {item.dropdownItems && <FontAwesomeIcon icon={faChevronDown} className={`mr-[6px] ${chevronTransitionClasses}`} />}
              </Link>

              {dropdownOpen === index && item.dropdownItems && (
                <ul
                  className={`absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-48 ${transitionClasses}`}
                  onMouseEnter={() => clearTimeout(timeoutRef.current)} // Prevent closing when mouse is inside
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdownItems.map((dropItem, dropIndex) => (
                    <li
                      key={`${index}-${dropIndex}`}
                      className="relative px-4 py-2 hover:bg-gray-100"
                      onMouseEnter={() => handleSubMouseEnter(dropIndex)}
                      onMouseLeave={handleSubMouseLeave}
                    >
                      <Link to={item.label === "محصولات" ? "/search-product" : "#"} target="_blank" rel="noopener noreferrer" className="text-black flex items-center hover:text-slate-600">
                        {dropItem.label}
                        {dropItem.subItems && <FontAwesomeIcon icon={faChevronLeft} className="ml-2 text-sm p-[6px] " />}
                      </Link>

                      {dropItem.subItems && subDropdownOpen === dropIndex && (
                        <ul
                          ref={(el) => (subMenuRefs.current[dropIndex] = el)}
                          className="absolute right-full top-0 mt-0 bg-white border border-blue-200 rounded-md shadow-lg w-40"
                          onMouseEnter={() => clearTimeout(timeoutRef.current)}
                          onMouseLeave={handleSubMouseLeave}
                        >
                          {dropItem.subItems.map((subItem, subIndex) => (
                            <li key={`${index}-${dropIndex}-${subIndex}`} className="px-4 py-2 hover:bg-gray-100">
                              <Link to="/search-product" target="_blank" rel="noopener noreferrer" className="block text-gray-800">{subItem}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MyHeader;
