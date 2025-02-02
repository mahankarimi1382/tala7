import { useState } from "react";

const CheckboxList = () => {
  const [specialSale, setSpecialSale] = useState(false);
  const [inStock, setInStock] = useState(false);

  return (
    <div className="flex flex-col space-y-2 text-right">
      {/* Special Sale */}
      <label className="flex items-center space-x-2 space-x-reverse cursor-pointer text-gray-700">
        <input
          type="checkbox"
          checked={specialSale}
          onChange={() => setSpecialSale(!specialSale)}
          className="peer hidden"
        />
        <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center transition-all 
                        peer-checked:bg-[#caa984] peer-checked:border-gray-300">
          {specialSale && <span className="text-white text-xs font-bold">✔</span>}
        </div>
        <span>فروش ویژه</span>
      </label>

      {/* In Stock */}
      <label className="flex items-center space-x-2 space-x-reverse cursor-pointer text-gray-700">
        <input
          type="checkbox"
          checked={inStock}
          onChange={() => setInStock(!inStock)}
          className="peer hidden"
        />
        <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center transition-all 
                        peer-checked:bg-[#caa984] peer-checked:border-gray-300">
          {inStock && <span className="text-white text-xs font-bold">✔</span>}
        </div>
        <span>موجود در انبار</span>
      </label>
    </div>
  );
};

export default CheckboxList;
