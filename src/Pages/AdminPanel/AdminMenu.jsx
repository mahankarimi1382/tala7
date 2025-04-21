import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function AdminMenu() {
  const [activeTab, setActiveTab] = useState("news");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [accordionState, setAccordionState] = useState({
    baseInfo: false,
    salesOperations: false,
    installmentRequests: false,
    reports: false,
    news: false,
    articles: false,
    salesOperationsDetails: false,
    Wallet: false,
    rate: false,
  });

  const toggleAccordion = (key) => {
    setAccordionState((prevState) => {
      const newState = Object.fromEntries(
        Object.keys(prevState).map((k) => [k, false])
      );
      newState[key] = !prevState[key];
      return newState;
    });
  };

  const handleLinks = (tab) => {
    if (tab == "masster") {
      return (
        <Link to="/AdminPannel/basic-details/add-master-product">
          تعریف سرگروه
        </Link>
      );
    } else if (tab == "subMaster") {
      return (
        <Link to="/AdminPannel/basic-details/add-subbmaster-product">
          تعریف زیرگروه
        </Link>
      );
    } else if (tab == "products") {
      return <Link to="/AdminPannel/basic-details/products">محصولات</Link>;
    } else if (tab == "seller") {
      return (
        <Link to="/AdminPannel/basic-details/create-seller">تعریف فروشنده</Link>
      );
    }
  };

  return (
    <>
      {/* Mobile Toggle Button - Positioned on the right */}
      <button
        className="fixed lg:hidden z-50 top-4 right-4 p-2 bg-teal-800 text-white rounded-md shadow-lg"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <FaBars size={20} /> : <FaTimes size={20} />}
      </button>

      {/* Sidebar - Emerges from right */}
      <div
        className={`
        fixed lg:static
        w-[280px] lg:w-1/5
        min-h-screen
        bg-gradient-to-b from-teal-950 to-teal-900
        text-white p-2
        transition-all duration-300 ease-in-out
        z-40
        ${isCollapsed ? "-right-[280px]" : "right-0"}
      `}
      >
        <h5 className="text-center py-4 text-lg font-semibold">پنل مدیریت</h5>

        {/* Base Info */}
        <div className="w-full">
          <div
            className="bg-gray-700 p-3 rounded cursor-pointer flex justify-between items-center mt-2"
            onClick={() => toggleAccordion("baseInfo")}
          >
            <span className="font-bold">اطلاعات پایه</span>
            {accordionState.baseInfo ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {accordionState.baseInfo && (
            <ul className="mt-2 bg-white text-black rounded-lg shadow-md">
              {["masster", "subMaster", "products", "seller"].map((tab) => (
                <li
                  key={tab}
                  className={`p-2 cursor-pointer ${
                    activeTab === tab ? "bg-gray-200" : "hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {handleLinks(tab)}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Sales Operations */}
        <div className="w-full">
          <div
            className="bg-gray-700 p-3 rounded cursor-pointer flex justify-between items-center mt-2"
            onClick={() => toggleAccordion("salesOperations")}
          >
            <span className="font-bold">عملیات فروش</span>
            {accordionState.salesOperations ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </div>
          {accordionState.salesOperations && (
            <ul className="mt-2 bg-white flex flex-col text-black rounded-lg shadow-md">
              <Link
                to="/AdminPannel/sale-action/safe-box"
                className="p-2 cursor-pointer hover:bg-gray-100"
              >
                ورود به گاو صندوق
              </Link>
              <Link
                to="/AdminPannel/sale-action/vitrin"
                className="p-2 cursor-pointer hover:bg-gray-100"
              >
                ورود به ویترین
              </Link>
            </ul>
          )}
        </div>

        {/* Wallet */}
        <div className="w-full">
          <div
            className="bg-gray-700 p-3 rounded cursor-pointer flex justify-between items-center mt-2"
            onClick={() => toggleAccordion("Wallet")}
          >
            <span className="font-bold">شارژ کیف پول</span>
            {accordionState.Wallet ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {accordionState.Wallet && (
            <ul className="mt-2 bg-white flex flex-col text-black rounded-lg shadow-md">
              <Link
                to="/AdminPannel/wallet/gold"
                className="p-2 cursor-pointer hover:bg-gray-100"
              >
                شارژ کیف پول طلا
              </Link>
              <Link
                to="/AdminPannel/wallet/tooman"
                className="p-2 cursor-pointer hover:bg-gray-100"
              >
                شارژ کیف پول تومان
              </Link>
              <Link
                to="/AdminPannel/wallet/Aghsat"
                className="p-2 cursor-pointer hover:bg-gray-100"
              >
                شارژ کیف پول اقساط
              </Link>
            </ul>
          )}
        </div>

        {/* Rate */}
        <div className="w-full">
          <div
            className="bg-gray-700 p-3 rounded cursor-pointer flex justify-between items-center mt-2"
            onClick={() => toggleAccordion("installmentRequests")}
          >
            <Link
              to="/AdminPannel/rate"
              className="font-bold w-full text-right"
            >
              نرخ لحظه ای
            </Link>
          </div>
        </div>

        {/* Settings */}
        <div className="w-full">
          <div
            className="bg-gray-700 p-3 rounded cursor-pointer flex justify-between items-center mt-2"
            onClick={() => toggleAccordion("installmentRequests")}
          >
            <Link
              to="/AdminPannel/setting"
              className="font-bold w-full text-right"
            >
              تنظیمات
            </Link>
          </div>
        </div>

        {/* News */}
        <div className="w-full">
          <div
            className="bg-gray-700 p-3 rounded cursor-pointer flex justify-between items-center mt-2"
            onClick={() => toggleAccordion("news")}
          >
            <span className="font-bold">اخبار</span>
            {accordionState.news ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {accordionState.news && (
            <ul className="mt-2 p-2 bg-white text-black rounded-lg shadow-md">
              <Link className="p-2" to="/AdminPannel/news">
                اخبار
              </Link>
            </ul>
          )}
        </div>

        {/* Installment Requests */}
        <div className="w-full">
          <div
            className="bg-gray-700 p-3 rounded cursor-pointer flex justify-between items-center mt-2"
            onClick={() => toggleAccordion("installmentRequests")}
          >
            <Link
              to="/AdminPannel/InstallmentInspection "
              className="font-bold w-full text-right"
            >
              درخواست اقساط
            </Link>
          </div>
        </div>

        {/* Reports */}
        <div className="w-full">
          <div
            className="bg-gray-700 p-3 rounded cursor-pointer flex justify-between items-center mt-2"
            onClick={() => toggleAccordion("reports")}
          >
            <span className="font-bold">گزارشات</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminMenu;
