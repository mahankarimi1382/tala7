import { FaUpload, FaCheck } from "react-icons/fa";

export default function Modal({ isOpen, onClose, onSubmit, formData, setFormData, isEditing, type }) {
  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file ? URL.createObjectURL(file) : null });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-lg font-bold mb-4">{isEditing ? `Edit ${type}` : `Add ${type}`}</h2>

        <input className="w-full p-2 border rounded mb-2" name="title" placeholder="Title" value={formData.title || ""} onChange={handleChange} />
        <input className="w-full p-2 border rounded mb-2" name="author" placeholder="Author" value={formData.author || ""} onChange={handleChange} />

        {/* News-specific Fields */}
        {type === "news" && (
          <>
            <input className="w-full p-2 border rounded mb-2" name="lead" placeholder="Lead" value={formData.lead || ""} onChange={handleChange} />
            <textarea className="w-full p-2 border rounded mb-2 h-24" name="body" placeholder="News Body" value={formData.body || ""} onChange={handleChange} />
          </>
        )}

        {/* Product-specific Field */}
        {type === "products" && (
          <input className="w-full p-2 border rounded mb-2" name="seller" placeholder="Seller" value={formData.seller || ""} onChange={handleChange} />
        )}

        {/* Image Upload */}
        <div className="flex items-center mb-2">
          <FaUpload className="mr-2" />
          <input type="file" onChange={handleImageChange} />
        </div>

        {formData.image && (
          <div className="flex items-center mt-2">
            <img src={formData.image} alt="Preview" className="w-20 h-20 object-cover mr-2" />
            <button onClick={() => setFormData({ ...formData, image: null })} className="text-red-500">Remove Image</button>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-4 flex justify-between">
          <button onClick={onSubmit} className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
            <FaCheck className="mr-2" /> Submit
          </button>
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
}
