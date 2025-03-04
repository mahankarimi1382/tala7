import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";
import CreateAccountPopup from "./CreateAccountPopup.jsx";  // Import the new popup component

const Sidebar = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });
  const [isCreateAccountPopupOpen, setIsCreateAccountPopupOpen] = useState(false);  // State for the popup visibility

  const sidebarRef = useRef(null); // Reference to the sidebar element
  const firstFocusableElement = useRef(null); //Reference to the first focusable element

  useEffect(() => {
    if (isOpen && sidebarRef.current) {
      firstFocusableElement.current.focus();
    }
  }, [isOpen]);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Form data:', formData);
  };

  const handleOpenCreateAccountPopup = () => {
    setIsCreateAccountPopupOpen(true);
  };

  const handleCloseCreateAccountPopup = () => {
    setIsCreateAccountPopupOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-md z-40"
          onClick={onClose}
        ></div>
      )}

      <motion.div
        ref={sidebarRef}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 p-4"
        role="dialog"  // Accessibility
        aria-modal="true"
      >
        <div className="flex justify-between mb-3">
          <div>
            <p className="font-bold text-xl">ورود</p>
          </div>
          <div className="flex gap-2 items-center">
            <button onClick={onClose} className="text-gray-600 hover:text-black" aria-label="Close">
              <AiOutlineClose size={20} />
            </button>
            <p className="text-sm">بستن</p>
          </div>
        </div>
        <hr />

        <form onSubmit={handleSubmit} className="mt-4">
          <div>             <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              نام کاربری یا آدرس ایمیل <span className="text-red-600">*</span>
            </label>
            <input
              ref={firstFocusableElement}
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-3 h-8 block w-full rounded-md border border-gray-400 shadow-sm  sm:text-sm"
              required
            />
          </div>

          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              رمز عبور <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
                            className="mt-3 h-8 block w-full rounded-md border border-gray-400 shadow-sm  sm:text-sm"

              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-[#caa984] hover:bg-[#093937] py-2 px-4 font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            ورود
          </button>

          <div className="mt-3 flex justify-between text-sm">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="rememberMe" className="text-gray-500 w-full">مرا به خاطر بسپار</label>
            </div>
            
            <div>
              <a href="#" className="text-[#caa984] hover:text-[#093937] w-full">رمز عبور را فراموش کرده اید؟</a>
            </div>
          </div>
        </form>

        <hr className="my-4" />

        <div className="text-center flex flex-col">
          <div className="flex justify-center text-7xl opacity-20">
            <GoPerson />
          </div>
          <p className="mt-3 text-sm font-bold">هنوز حساب کاربری ندارید؟</p>
          <button // Changed to a button
            onClick={handleOpenCreateAccountPopup}
            className="mt-1 block text-sm font-bold hover:underline text-gray-700 "
          >
            ایجاد حساب کاربری
          </button>
          <Link to="/AddSomeNews" className="">
          <div className="text-sm font-bold hover:text-black">ورود ادمین</div>
          </Link>
          <Link to="/testpage" className="">
          <div className="text-sm font-bold hover:text-black">ورود به صفحه پروفایل</div>
          </Link>

        </div>
      

        <hr className="mt-4" />

        {isCreateAccountPopupOpen && (
          <CreateAccountPopup onClose={handleCloseCreateAccountPopup} />
        )}

      </motion.div>
    </>
  );
};

export default Sidebar;