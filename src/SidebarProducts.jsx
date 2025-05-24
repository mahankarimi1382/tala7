import { useState } from "react";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";
import PropTypes from 'prop-types';

const SidebarProducts = ({ onModelChange, onFiltersChange }) => {
  const [selected, setSelected] = useState({
    types: [],
    models: "",
    sales: [],
  });

  const handleSubheaderChange = (category, items) => {
    setSelected((prev) => {
      const newState = {
        ...prev,
        [category]: prev[category].length === items.length ? [] : items,
      };
      
      // Update parent with new filter values
      if (category === "types") {
        onFiltersChange?.({
          isWoman: newState.types.includes("زنانه"),
          isMan: newState.types.includes("مردانه"),
          isBaby: newState.types.includes("بچگانه"),
          isAdult: newState.types.includes("بزرگسال"),
        });
      } else if (category === "sales") {
        onFiltersChange?.({
          specialSale: newState.sales.includes("فروش ویژه"),
          freeShipment: newState.sales.includes("ارسال رایگان"),
        });
      }
      
      return newState;
    });
  };

  const handleItemChange = (category, item) => {
    setSelected((prev) => {
      const newItems = prev[category].includes(item)
        ? prev[category].filter((i) => i !== item)
        : [...prev[category], item];
      
      const newState = {
        ...prev,
        [category]: newItems,
      };

      // Update parent with new filter values
      if (category === "types") {
        onFiltersChange?.({
          isWoman: newItems.includes("زنانه"),
          isMan: newItems.includes("مردانه"),
          isBaby: newItems.includes("بچگانه"),
          isAdult: newItems.includes("بزرگسال"),
        });
      } else if (category === "sales") {
        onFiltersChange?.({
          specialSale: newItems.includes("فروش ویژه"),
          freeShipment: newItems.includes("ارسال رایگان"),
        });
      }
      
      return newState;
    });
  };

  const handleRadioChange = (category, item) => {
    // Map the model selection to API values
    const modelMapping = {
      "اسپرت": "1",
      "کلاسیک": "2",
      "سنتی": "3"
    };
    
    setSelected((prev) => {
      const newState = {
        ...prev,
        [category]: prev[category] === item ? "" : item,
        gold_Model: prev[category] === item ? "" : modelMapping[item]
      };
      // Call the onModelChange prop with the new gold_Model value
      onModelChange?.(newState.gold_Model);
      return newState;
    });
  };

  const Checkbox = ({ checked, onChange }) => (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer hidden"
      />
      <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center transition-all
                      peer-checked:bg-[#caa984] peer-checked:border-gray-300">
        {checked && <span className="text-white text-xs font-bold">✔</span>}
      </div>
    </label>
  );

  const RadioButton = ({ checked, onChange }) => (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer hidden"
      />
      <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center transition-all
                      peer-checked:bg-[#caa984] peer-checked:border-gray-300">
        {checked && <span className="text-white text-xs font-bold">✔</span>}
      </div>
    </label>
  );

  return (
    <div className="w-64 flex flex-col justify-center items-center rounded-lg  p-4 bg-white">
      <div className="bg-[#ececec] rounded-lg h-[50px] text-[16px] font-semibold text-center pt-3 mb-3 shadow-md w-full">محصولات</div>
      <div className="mt-2 space-y-2 self-start">
        {/* انواع محصولات */}
        <div>
          <div className="flex items-center gap-2 ms-2">
            <Checkbox
              checked={selected.types.length === 4}
              onChange={() => handleSubheaderChange("types", ["زنانه", "مردانه", "بچگانه", "بزرگسال"])}
            />
            <span className="font-semibold">انواع محصولات</span>
          </div>
          <div className="ml-6 space-y-1 ms-8 my-3">
            {["زنانه", "مردانه", "بچگانه", "بزرگسال"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Checkbox
                  checked={selected.types.includes(item)}
                  onChange={() => handleItemChange("types", item)}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* مدل ها */}
        <div>
          <div className="flex items-center gap-2 ms-2">
            <span className="font-semibold">مدل ها</span>
          </div>
          <div className="ml-6 space-y-1 ms-8 my-3">
            {["اسپرت", "کلاسیک", "سنتی"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <RadioButton
                  checked={selected.models === item}
                  onChange={() => handleRadioChange("models", item)}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* طرح های فروش */}
        <div>
          <div className="flex items-center gap-2 ms-2">
            <Checkbox
              checked={selected.sales.length === 2}
              onChange={() => handleSubheaderChange("sales", ["فروش ویژه", "ارسال رایگان"])}
            />
            <span className="font-semibold">طرح های فروش</span>
          </div>
          <div className="ml-6 space-y-1 ms-8 my-3">
            {["فروش ویژه", "ارسال رایگان"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Checkbox
                  checked={selected.sales.includes(item)}
                  onChange={() => handleItemChange("sales", item)}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

SidebarProducts.propTypes = {
  onModelChange: PropTypes.func,
  onFiltersChange: PropTypes.func
};

export default SidebarProducts;