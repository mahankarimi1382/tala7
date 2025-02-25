import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { GoPerson } from "react-icons/go";


const FooterSidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay (closes sidebar when clicked) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar - Opens from the left */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-4"
      >
        <div className="flex justify-between mb-3">
                <div>
                    <p className="font-bold text-[20px]">ورود</p>
                </div>
                <div className="flex gap-2  items-center">
                <button onClick={onClose} className="text-gray-600 hover:text-black">
                  <AiOutlineClose size={20} />
                </button>
                <p className="text-[15px]">بستن</p>
                </div>
                </div>
                <hr />
               <p className="mt-4">نام کاربری یا آدرس ایمیل 
                <span className="text-red-600">*</span>
               </p>
               <input type="text" className="border w-full mt-2 rounded-lg h-10"/>
               <p className="mt-4">رمز عبور
                <span className="text-red-600">*</span>
               </p>
               <input type="text" className="border w-full mt-2 rounded-lg h-10"/>
               <a href="" className="flex justify-center mt-3 bg-[#caa984] hover:bg-[#093937] p-3 rounded-lg text-white hover:text-white">ورود</a>
           <div className="flex justify-between text-[13px] mt-3">
           <div className="flex gap-1">
              <input type="checkbox" />
              <p>مرا به خاطر بسپار</p>
              </div>
              <div>
              <a href="" className="text-[#caa984] hover:text-[#caa984]">رمز عبور را فراموش کرده اید؟</a>
              </div>
           </div>
           <br />
           <hr />
           <br />
           <i className="bi bi-person-add"></i>
           <div className="flex justify-center text-[80px] opacity-20">
           <GoPerson/>
           </div>
           <p className="text-center mt-3 text-[13px] text-extrabold font-bold">هنوز حساب کاربری ندارید؟
        
        </p>
        <div className="flex justify-center">
        <a href="" className=" mt-3 text-[13px] text-extrabold font-bold hover-underline-animation center hover:text-black">ایجاد حساب کاربری</a>
        </div>
        <br /><br />
        <hr />
      </motion.div>
    </>
  );
};

export default FooterSidebar;
