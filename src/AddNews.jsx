import { useState } from "react";
import Modal from "./Modals/Modal";
import {
  FaPlus,
  FaEdit,
  FaTrashAlt,
  FaChevronDown,
  FaChevronUp,
  FaSort,
} from "react-icons/fa";

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
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold mb-4">
          {MyTitle.toLocaleString("fa")}
        </h2>

        {/* Accordions */}
        {[
          { key: "baseInfo", label: "اطلاعات پایه" },
          { key: "salesOperations", label: "عملیات فروش" },
          { key: "installmentRequests", label: "درخواست های اقساط" },
          { key: "reports", label: "گزارشات" },
        ].map(({ key, label }) => (
          <div key={key}>
            <div
              className="bg-gray-700 p-3 rounded cursor-pointer flex justify-between items-center mt-2"
              onClick={() => toggleAccordion(key)}
            >
              <span className="font-bold">{label}</span>
              {accordionState[key] ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {accordionState[key] && (
              <ul className="mt-2">
                <li
                  className={`p-2 cursor-pointer ${
                    activeTab === "news" ? "bg-gray-600" : ""
                  }`}
                  onClick={() => setActiveTab("news")}
                >
                  اخبار
                </li>
                <li
                  className={`p-2 cursor-pointer ${
                    activeTab === "products" ? "bg-gray-600" : ""
                  }`}
                  onClick={() => setActiveTab("products")}
                >
                  محصولات
                </li>
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-xl font-bold mb-4">
          {activeTab === "news" ? "News" : "Products"}
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
          className="mb-4 flex items-center bg-blue-500 text-white px-4 py-2 rounded"
        >
          <FaPlus className="mr-2" /> Add{" "}
          {activeTab === "news" ? "News" : "Product"}
        </button>

        {/* Table */}
        <table className="w-full mt-4 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th
                className="border p-2 cursor-pointer"
                onClick={() => setSortField("title" || "name")}
              >
                {activeTab === "news" ? "Title" : "Name"} <FaSort />
              </th>
              <th className="border p-2">
                {activeTab === "news" ? "Author" : "Seller"}
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
                <td className="border p-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-blue-500 mr-2"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500"
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
  );
}
