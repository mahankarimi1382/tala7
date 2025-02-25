import { useState, useRef, useEffect } from "react";
import centralLogo from "../assets/img/centrallogo.png";

const HamburgerBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subItemsOpen, setSubItemsOpen] = useState({});

  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) setSubItemsOpen({});
  };

  const handleSubItemsHover = (itemKey, isOpen) => {
    setSubItemsOpen((prevState) => ({
      ...prevState,
      [itemKey]: isOpen,
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        setSubItemsOpen({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="block sticky md:hidden mt-11 z-40 ">
      <div className="relative">
        <div
          ref={overlayRef}
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-5 transition-opacity duration-300 ${
            menuOpen ? "opacity-100 backdrop-blur-sm z-50" : "opacity-0 pointer-events-none"
          }`}
        />
        <nav className="bg-white text-black p-4 relative flex justify-between items-center flex-row">
          <button
            className="text-black text-3xl focus:outline-none mr-4 relative z-50"
            onClick={handleMenuToggle}
          >
            ☰
          </button>
          <div className=" mx-auto">
            <img src={centralLogo} alt="Logo" className="h-10 w-auto" />
          </div>
          <div ref={menuRef} className={`absolute top-full right-0 bg-[#f4e0c5] rounded-lg  p-4 mt-1 w-64 transform transition-all duration-300 origin-top-right z-50 ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
            <ul className="text-right">
              {menuItems.map((item) => (
                <li key={item.id} className="relative group" onMouseEnter={() => handleSubItemsHover(item.id, true)} onMouseLeave={() => handleSubItemsHover(item.id, false)}>
                  <button className="block py-2 px-4 hover:bg-[#FDEBD3] rounded-lg w-full font-bold text-right">
                    {item.name}
                  </button>
                  {item.subItems.length > 0 && (
                    <ul className={`ml-4 transition-all duration-300 ease-in-out transform ${subItemsOpen[item.id] ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"}`}>
                      {item.subItems.map((subItem) => (
                        <li key={subItem.id} className="relative group" onMouseEnter={() => handleSubItemsHover(subItem.id, true)} onMouseLeave={() => handleSubItemsHover(subItem.id, false)}>
                          <button className="block py-2 px-4 hover:bg-[#FDEBD3] rounded-lg font-light w-full text-left">
                            {subItem.name}
                          </button>
                          <ul className={`ml-6 transition-all duration-300 ease-in-out transform ${subItemsOpen[subItem.id] ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"}`}>
                            {subItem.subSubItems.map((subSubItem) => (
                              <li key={subSubItem.id}>
                                <a href="#" className="block py-2 px-4 hover:bg-[#FDEBD3] text-center rounded-lg hover:text-black">
                                  {subSubItem.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

const menuItems = [
  {
    id: "item1",
    name: "خانه",
    subItems: [
     
    ],
  },
  {
    id: "item2",
    name: "محصولات",
    subItems: [
      {
        id: "sub2.1",
        name: "انواع محصولات",
        subSubItems: [
          { id: "subsub2.1.1", name: "زنانه" },
          { id: "subsub2.1.1", name: "مردانه" },
          { id: "subsub2.1.1", name: "بچگانه" },
          { id: "subsub2.1.1", name: "بزرگسال" },
        ],
      },
      {
        id: "sub2.2",
        name: "مدل ها ",
        subSubItems: [
          { id: "subsub2.2.1", name: "اسپرت" },
          { id: "subsub2.2.2", name: "کلاسیک" },
          { id: "subsub2.2.3", name: "سنتی" },
        ],
      },
      {
        id: "sub2.3",
        name: " طرح های فروش ",
        subSubItems: [
          { id: "subsub2.3.1", name: "فروش ویژه" },
          { id: "subsub2.3.2", name: "بدون اجرت" },
          { id: "subsub2.3.3", name: "تخفیف دار" },
        ],
      },
    ],
  },
  {
    id: "item3",
    name: "معاملات آنی",
    subItems: [
      {
        id: "sub3.1",
        name: " سکه",
        subSubItems: [
         
        ],
      },
      {
        id: "sub3.2",
        name: " ارز ",
        subSubItems: [
         
        ],
      },
      
    ],
  },
  {
    id: "item4",
    name: "تالار معاملات",
    subItems: [
     
    ],
  },
  {
    id: "item5",
    name: " خرید قسطی",
    subItems: [
      {
        id: "sub5.1",
        name: " ثبت درخواست",
        subSubItems: [
         
        ],
      },
      {
        id: "sub5.2",
        name: " پیگیری درخواست ",
        subSubItems: [
         
        ],
      },
      
    ],
  },
];

export default HamburgerBar;