import { useState } from "react";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";

const SidebarProducts = () => {
  const [selected, setSelected] = useState({
    types: [],
    models: [],
    sales: [],
  });

  const handleSubheaderChange = (category, items) => {
    setSelected((prev) => ({
      ...prev,
      [category]: prev[category].length === items.length ? [] : items,
    }));
  };

  const handleItemChange = (category, item) => {
    setSelected((prev) => {
      const newItems = prev[category].includes(item)
        ? prev[category].filter((i) => i !== item)
        : [...prev[category], item];
      return { ...prev, [category]: newItems };
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
            <Checkbox
              checked={selected.models.length === 3}
              onChange={() => handleSubheaderChange("models", ["اسپرت", "کلاسیک", "سنتی"])}
            />
            <span className="font-semibold">مدل ها</span>
          </div>
          <div className="ml-6 space-y-1 ms-8 my-3">
            {["اسپرت", "کلاسیک", "سنتی"].map((item) => (
              <div key={item} className="flex items-center gap-2 ">
                <Checkbox
                  checked={selected.models.includes(item)}
                  onChange={() => handleItemChange("models", item)}
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
              checked={selected.sales.length === 3}
              onChange={() => handleSubheaderChange("sales", ["فروش ویژه", "بدون اجرت", "تخفیف دار"])}
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

export default SidebarProducts;