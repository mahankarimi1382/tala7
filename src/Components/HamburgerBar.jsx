import { useState, useRef, useEffect } from "react";

const HamburgerBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subItemsOpen, setSubItemsOpen] = useState({
    item1: false,
    item2: false,
  });
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    // Collapse sub-items when the menu closes
    if (menuOpen) {
      setSubItemsOpen({ item1: false, item2: false });
    }
  };

  const handleSubItemsToggle = (itemKey) => {
    setSubItemsOpen((prevState) => ({
      ...prevState,
      [itemKey]: !prevState[itemKey],
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        // Collapse sub-items when menu is collapsed
        setSubItemsOpen({ item1: false, item2: false });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="block sticky md:hidden   mt-11 z-40 Hamburger">
      <div className="relative">
        {/* Overlay (Hidden by default) */}
        <div
          ref={overlayRef}
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300  ${
            menuOpen
              ? "opacity-100 backdrop-blur-sm z-50"
              : "opacity-0 pointer-events-none"
          }`}
        />
        <nav className="bg-white text-black p-4 relative flex justify-between items-center flex-row">
          {/* Hamburger Menu Icon (Right) */}
          <button
            className="text-black text-3xl focus:outline-none mr-4 relative z-50"
            onClick={handleMenuToggle}
          >
            ☰
          </button>

          {/* Image 2 (Left) */}
          <div className="flex">
            <img
              src="src\assets\img\tala7.jpeg"
              alt="Image 2"
              className="h-10 w-auto"
            />
          </div>

          {/* Image 1 (Center) */}
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-cart2
transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-gray-500 duration-200"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </div>

          {/* Menu Items (Hidden by default) */}
          <div
            ref={menuRef}
            className={`absolute top-full right-0 bg-slate-200 p-4 mt-1 w-64 transform transition-all duration-300 origin-top-right z-50 ${
              menuOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            } `}
          >
            <ul className="text-right">
              <li>
                <button
                  className="block py-2 px-4 hover:bg-gray-600 w-full text-right"
                  onClick={() => handleSubItemsToggle("item1")}
                >
                  مورد اول{" "}
                </button>

                {subItemsOpen.item1 && (
                  <ul className="ml-4">
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-600">
                        Sub Item 1.1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-600">
                        Sub Item 1.2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-600">
                        Sub Item 1.3
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-600">
                        Sub Item 1.4
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-600">
                        Sub Item 1.5
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <button
                  className="block py-2 px-4 hover:bg-gray-600 w-full text-right"
                  onClick={() => handleSubItemsToggle("item2")}
                >
                  مورد دوم{" "}
                </button>
                {subItemsOpen.item2 && (
                  <ul className="ml-4">
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-600">
                        Sub Item 2.1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-600">
                        Sub Item 2.2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-600">
                        Sub Item 2.3
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-600">
                        Sub Item 2.4
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-600">
                        Sub Item 2.5
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-600 text-right"
                >
                  مورد سوم{" "}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerBar;
