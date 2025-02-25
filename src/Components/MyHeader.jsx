import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const MyHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [subDropdownOpen, setSubDropdownOpen] = useState(null);
  const subMenuRefs = useRef({});
  const [chevronRotation, setChevronRotation] = useState(null);
  const [isMouseOverHeader, setIsMouseOverHeader] = useState(false);
  const transitionClasses =
    "transition-opacity transition-transform animate-fade-in   duration-1000 transform";
  const chevronTransitionClasses = "transition-opacity  duration-2000";
  const navItems = [
    {
      label: "خانه",
      dropdownItems: [],
    },
    {
        label: "",
        dropdownItems: [],
      },
    {
      label: "محصولات",
      dropdownItems: [
        {
          label: "انواع محصولات",
          subItems: ["زنانه", "مردانه", "بچگانه", "بزرگسال"],
        },
        {
          label: "مدل ها",
          subItems: ["اسپرت", "کلاسیک", "سنتی"],
        },
        {
          label: "طرح های فروش",
          subItems: ["فروش ویژه", "بدون اجرت", "تخفیف دار"],
        },
      ],
    },
    {
      label: "معاملات آنی",
      dropdownItems: [
        { label: "سکه" },
        {
          label: "ارز",
        },
      ],
    },
    {
      label: "تالار معاملات",
      dropdownItems: [
       
      ],
    },
    {
      label: "خرید قسطی",
      dropdownItems: [
        { label: "ثبت درخواست" },
        {
          label: "پیگیری درخواست",
          subItems: [
          ],
        },
        
      ],
    },
  ];

  useEffect(() => {
    // Dynamically position the sub-menus
    if (subDropdownOpen !== null) {
      const subMenuElement = subMenuRefs.current[subDropdownOpen];
      if (subMenuElement) {
        const rect = subMenuElement.getBoundingClientRect();
        if (rect.right > window.innerWidth) {
          subMenuElement.style.left = "-100%";
        }
      }
    }
  }, [subDropdownOpen]);
  const handleMouseEnter = (index) => {
    setDropdownOpen(index);
    setSubDropdownOpen(null);
    setChevronRotation(index);
  };
  const handleMouseLeave = () => {
    // This now does nothing as we track header level mouse leave
  };

  const handleSubMouseEnter = (index) => {
    setSubDropdownOpen(index);
  };

  const handleSubMouseLeave = () => {
    setSubDropdownOpen(null);
  };

  const handleHeaderMouseEnter = () => {
    setIsMouseOverHeader(true);
  };
  const handleHeaderMouseLeave = () => {
    setIsMouseOverHeader(false);
    setDropdownOpen(null);
    setSubDropdownOpen(null);
    setChevronRotation(null);
  };
  return (
    <header
      className="  sticky top-10 bg-[#FAFAFA] shadow-md z-30 hidden md:block"
      onMouseEnter={handleHeaderMouseEnter}
      onMouseLeave={handleHeaderMouseLeave}
    >
      <nav className="container mx-auto px-4 py-2 flex justify-center items-center">
        <ul className="flex space-x-7 relative">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="text-black px-1  hover-underline-animation left cursor-pointer hover:text-gray-500 font flex items-center p-2">
                {item.label}
                {item.dropdownItems.length > 0 && (
                  <FontAwesomeIcon
                    icon={
                      chevronRotation === index ? faChevronDown : faChevronDown
                    }
                    className={`mr-1 ${chevronTransitionClasses} ${
                      chevronRotation === index
                        ? "opacity-100 rotate-0"
                        : "opacity-0 rotate-0"
                    } transform`}
                  />
                )}
              </span>
              {dropdownOpen === index && (
                <ul
                  className={`absolute top-full -left-30 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-48 ${transitionClasses} ${
                    dropdownOpen === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  {item.dropdownItems.map((dropItem, dropIndex) => (
                    <li
                      key={dropIndex}
                      className="relative px-4 py-2 hover:bg-gray-100"
                      onMouseEnter={() => handleSubMouseEnter(dropIndex)}
                      onMouseLeave={handleSubMouseLeave}
                    >
                      <a
                        href="#"
                        className=" text-black flex items-center hover:text-slate-600"
                      >
                        {dropItem.label}
                        {dropItem.subItems && (
                          <FontAwesomeIcon
                            icon={
                              subDropdownOpen === dropIndex
                                ? faChevronLeft
                                : faChevronLeft
                            }
                            className={`mr-2 text-sm ${chevronTransitionClasses} ${
                              subDropdownOpen === dropIndex
                                ? "opacity-100 rotate-0"
                                : "opacity-0 rotate-0"
                            } transform`}
                          />
                        )}
                      </a>
                      {dropItem.subItems && subDropdownOpen === dropIndex && (
                        <ul
                          ref={(el) => (subMenuRefs.current[dropIndex] = el)}
                          className={`absolute right-full top-0 mt-0 bg-white border border-blue-200 rounded-md shadow-lg w-40 ${transitionClasses}
                                                      ${
                                                        subDropdownOpen ===
                                                        dropIndex
                                                          ? "opacity-100 scale-100"
                                                          : "opacity-0 scale-95"
                                                      }`}
                        >
                          {dropItem.subItems.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="px-4 py-2 hover:bg-gray-100"
                            >
                              <a href="#" className="block text-gray-800">
                                {subItem}
                              </a>
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
