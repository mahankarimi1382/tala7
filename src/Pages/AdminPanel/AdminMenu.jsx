import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

function AdminMenu() {
  const [activeTab, setActiveTab] = useState("news");

  const [accordionState, setAccordionState] = useState({
    baseInfo: true,
    salesOperations: false,
    installmentRequests: false,
    reports: false,
    news: false,
    articles: false,
    salesOperationsDetails: false,
  });
  const toggleAccordion = (key) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  const handleLinks = (tab) => {
    if (tab == "masster") {
      return (
        <Link to="/AdminPannel/basic-details/add-master-product">
          تغریف سرگروه
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
      return "تعریف فروشنده";
    }
  };
  return (
    <div className=" w-1/5 h-screen bg-gradient-to-b flex flex-col items-center  from-teal-950 to-teal-900 text-white p-2 ">
      <h5>پنل مدیریت</h5>
      {/* <h2 className="text-lg font-bold mb-4">{MyTitle}</h2> */}

      {/* Base Info */}

      <div className=" w-full">
        <div
          className="bg-gray-700   p-3 rounded cursor-pointer flex justify-between items-center mt-2"
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

      {/* Additional Headers without subitems */}
      <div className=" w-full">
        <div
          className="bg-gray-700 p-3 rounded cursor-pointer flex justify-between items-center mt-2"
          onClick={() => toggleAccordion("salesOperations")}
        >
          <span className="font-bold">عملیات فروش</span>
          {accordionState.salesOperations ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {accordionState.salesOperations && (
          <ul className="mt-2 bg-white flex flex-col text-black rounded-lg shadow-md">
            <Link
              to="/AdminPannel/sale-action/safe-box"
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {}}
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

      {/* Sales Operations Details */}
      <div className=" w-full">
        <div
          className="bg-gray-700 p-3 rounded cursor-pointer flex justify-between items-center mt-2"
          onClick={() => toggleAccordion("news")}
        >
          <span className="font-bold">اخبار</span>
          {accordionState.news ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {accordionState.news && (
          <ul className="mt-2 p-2 bg-white text-black rounded-lg shadow-md">
            <Link className=" p-2" to="/AdminPannel/news">
              اخبار
            </Link>
          </ul>
        )}
      </div>

      <div className=" w-full">
        <div
          className="bg-gray-700 p-3 rounded cursor-pointer flex justify-between items-center mt-2"
          onClick={() => toggleAccordion("installmentRequests")}
        >
          <span className="font-bold">درخواست اقساط</span>
        </div>
      </div>

      <div className=" w-full">
        <div
          className="bg-gray-700 p-3 rounded cursor-pointer flex justify-between items-center mt-2"
          onClick={() => toggleAccordion("reports")}
        >
          <span className="font-bold">گزارشات</span>
        </div>
      </div>
    </div>
  );
}

export default AdminMenu;
