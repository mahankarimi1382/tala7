import React, { useState } from "react";

const Admin = () => {
  const [activeSection, setActiveSection] = useState(null);

  const addNewsSection = () => {
    setActiveSection("news");
  };

  const addProductSection = () => {
    setActiveSection("product");
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-row w-full">
        <div className="flex-1 p-6 mr-64"> {/* Added margin to prevent overlap */}
          <h1 className="text-2xl font-bold">Main Content</h1>
          {activeSection === "news" && (
            <div className="mt-4 p-4 bg-gray-100 rounded shadow">
              <h2 className="text-lg font-semibold">News Section</h2>
              <input type="text" placeholder="Title" className="block w-full p-2 mt-2 border rounded" />
              <input type="text" placeholder="Description" className="block w-full p-2 mt-2 border rounded" />
              <input type="text" placeholder="Author" className="block w-full p-2 mt-2 border rounded" />
              <input type="text" placeholder="Date" className="block w-full p-2 mt-2 border rounded" />
            </div>
          )}
          {activeSection === "product" && (
            <div className="mt-4 p-4 bg-gray-100 rounded shadow">
              <h2 className="text-lg font-semibold">Product Section</h2>
              <input type="text" placeholder="Product Name" className="block w-full p-2 mt-2 border rounded" />
              <input type="text" placeholder="Price" className="block w-full p-2 mt-2 border rounded" />
              <input type="text" placeholder="Category" className="block w-full p-2 mt-2 border rounded" />
              <input type="text" placeholder="Stock" className="block w-full p-2 mt-2 border rounded" />
            </div>
          )}
        </div>
        <div className="w-64 bg-gray-200 p-4 h-full shadow-lg fixed right-0 top-0"> {/* Ensured sidebar stays fixed on the right */}
          <a 
            href="#" 
            className="block mb-4 text-blue-600 hover:underline" 
            onClick={addNewsSection}
          >
            Add News
          </a>
          <a 
            href="#" 
            className="block mb-4 text-blue-600 hover:underline" 
            onClick={addProductSection}
          >
            Add Product
          </a>
        </div>
      </div>
    </div>
  );
};

export default Admin;
