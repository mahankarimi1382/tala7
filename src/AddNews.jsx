import React, { useState } from "react";  // <-- Add this import
import { FaChevronDown, FaChevronUp, FaPlus, FaSort, FaEdit, FaTrashAlt } from "react-icons/fa";
import Modal from "./Modals/Modal";
import { Link } from 'react-router-dom';

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("news");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [visitFilter, setVisitFilter] = useState("");
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const [accordionState, setAccordionState] = useState({
    baseInfo: true,
    salesOperations: false, 
    installmentRequests: false,
    reports: false,
    news: false,
    articles: false,
    salesOperationsDetails: false,
  });

  const MyTitle = "صفحه مدیریت سامانه طلا 7";

  const [items, setItems] = useState({
    news: [
      {
        title: "Breaking News",
        author: "John Doe",
        visits: 120,
        lead: "Short lead",
        body: "News content",
        image: null,
      },
      {
        title: "Tech Update",
        author: "Alice",
        visits: 200,
        lead: "Latest tech trends",
        body: "Tech news",
        image: null,
      },
    ],
    products: [
      { name: "Product A", seller: "Seller 1", visits: 45, image: null },
      { name: "Product B", seller: "Seller 2", visits: 100, image: null },
    ],
    articles: [
      { title: "Article 1", author: "Writer 1", visits: 30, image: null },
      { title: "Article 2", author: "Writer 2", visits: 50, image: null },
    ],
  });

  const handleSubmit = () => {
    if (!formData.title && !formData.name) {
      alert("Title/Name is required!");
      return;
    }

    const type = activeTab;
    const updatedItems = [...items[type]];

    if (editingIndex !== null) {
      updatedItems[editingIndex] = formData;
    } else {
      updatedItems.push({ ...formData, visits: 0 });
    }

    setItems({ ...items, [type]: updatedItems });
    setShowModal(false);
    setFormData({});
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    setFormData(items[activeTab][index]);
    setEditingIndex(index);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    setItems({
      ...items,
      [activeTab]: items[activeTab].filter((_, i) => i !== index),
    });
  };

  const toggleAccordion = (key) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  // 🔍 Filtering & Sorting Logic
  const filteredItems = items[activeTab]
    .filter((item) =>
      (item.title || item.name)
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    )
    .filter((item) =>
      visitFilter ? item.visits >= parseInt(visitFilter) : true
    )
    .sort((a, b) => {
      if (!sortField) return 0;
      if (sortOrder === "asc") {
        return a[sortField] > b[sortField] ? 1 : -1;
      } else {
        return a[sortField] < b[sortField] ? 1 : -1;
      }
    });

  return (
    <div>
      <div className="flex justify-between bg-gradient-to-r  from-teal-950 to-teal-900 items-center text-white font-bold">
        <Link to="/" className="">
          <div className="p-6 hover:text-white"> صفحه اصلی</div>
        </Link>
        <div className="p-6 items-center text-white"> کاربر </div>
      </div>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gradient-to-b  from-teal-950 to-teal-900 text-white p-4">
          <h2 className="text-lg font-bold mb-4">{MyTitle}</h2>

          {/* Base Info */}
        
          <div>
  <div
    className="bg-gray-700 p-3 rounded cursor-pointer flex justify-between items-center mt-2"
    onClick={() => toggleAccordion("baseInfo")}
  >
    <span className="font-bold">اطلاعات پایه</span>
    {accordionState.baseInfo ? <FaChevronUp /> : <FaChevronDown />}
  </div>

  {accordionState.baseInfo && (
    <ul className="mt-2 bg-white text-black rounded-lg shadow-md">
      {["products", "articles"].map((tab) => (
        <li
          key={tab}
          className={`p-2 cursor-pointer ${
            activeTab === tab ? "bg-gray-200" : "hover:bg-gray-100"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab === "products" ? "محصولات" : "تعریف فروشنده"}
        </li>
      ))}
    </ul>
  )}
</div>

          {/* Additional Headers without subitems */}
          <div>
            <div
              className="bg-gray-700 p-3 rounded cursor-pointer flex justify-between items-center mt-2"
              onClick={() => toggleAccordion("salesOperations")}
            >
              <span className="font-bold">عملیات فروش</span>
              {accordionState.salesOperations ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {accordionState.salesOperations && (
              <ul className="mt-2 bg-white text-black rounded-lg shadow-md">
                <li
                  className="p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => {}}
                >
                  ورود به گاو صندوق
                </li>
                <li
                  className="p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => {}}
                >
                  ورود به ویترین
                </li>
              </ul>
            )}
          </div>

          {/* Sales Operations Details */}
          <div>
            <div
              className="bg-gray-700 p-3 rounded cursor-pointer flex justify-between items-center mt-2"
              onClick={() => toggleAccordion("news")}
            >
              <span className="font-bold">اخبار</span>
              {accordionState.news ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {accordionState.news && (
              <ul className="mt-2 bg-white text-black rounded-lg shadow-md">
                {["news"].map((tab) => (
                  <li
                    key={tab}
                    className={`p-2 cursor-pointer ${
                      activeTab === tab ? "bg-gray-200 rounded-lg" : "hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    اخبار
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <div
              className="bg-gray-700 p-3 rounded cursor-pointer flex justify-between items-center mt-2"
              onClick={() => toggleAccordion("installmentRequests")}
            >
              <span className="font-bold">درخواست اقساط</span>
            </div>
          </div>

          <div>
            <div
              className="bg-gray-700 p-3 rounded cursor-pointer flex justify-between items-center mt-2"
              onClick={() => toggleAccordion("reports")}
            >
              <span className="font-bold">گزارشات</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <h1 className="text-xl font-bold mb-4">
            {activeTab === "news"
              ? "News"
              : activeTab === "products"
              ? "Products"
              : "Articles"}
          </h1>

          {/* 🔍 Search & Filter */}
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="🔍 Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 border border-gray-300 rounded mr-2"
            />
            <input
              type="number"
              placeholder="📌 Min Visits"
              value={visitFilter}
              onChange={(e) => setVisitFilter(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          <button
            onClick={() => {
              setShowModal(true);
              setEditingIndex(null);
              setFormData({});
            }}
            className="mb-4 flex items-center bg-gradient-to-r  from-teal-950 to-teal-900 text-white px-4 py-2 rounded"
          >
            <FaPlus className="mx-2" /> افزودن{" "}
            {activeTab === "news"
              ? "خبر"
              : activeTab === "products"
              ? "محصول"
              : "فروشنده"}
          </button>

          {/* Table */}
          <table className="w-full mt-4 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th
                  className="border p-2 cursor-pointer"
                  onClick={() => setSortField("title" || "name")}
                >
                  {activeTab === "news" || activeTab === "articles"
                    ? "Title"
                    : "Name"}{" "}
                  <FaSort />
                </th>
                <th className="border p-2">
                  {activeTab === "news" || activeTab === "articles"
                    ? "Author"
                    : "Seller"}
                </th>
                <th
                  className="border p-2 cursor-pointer"
                  onClick={() => setSortField("visits")}
                >
                  Visits <FaSort />
                </th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item, index) => (
                <tr key={index} className="border">
                  <td className="border p-2">{item.title || item.name}</td>
                  <td className="border p-2">{item.author || item.seller}</td>
                  <td className="border p-2">{item.visits}</td>
                  <td className=" p-2 flex justify-center gap-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="text-green-500 mr-2 hover:text-green-700 scale-100 hover:scale-125 transition ease-in-out duration-100"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-500 hover:text-red-700 scale-100 hover:scale-125 transition ease-in-out duration-100"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
          isEditing={editingIndex !== null}
          type={activeTab}
        />
      </div>
    </div>
  );
}
