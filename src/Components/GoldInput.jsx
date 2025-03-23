import { useState } from "react";

export default function GoldInput() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    let inputValue = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    setValue(inputValue);
  };

  const formattedValue = (value / 1000).toLocaleString("fa-IR");

  return (
    <div>
      <div className="flex justify-between mt-3 mb-2">
        <p className='text-sm'>مقدار</p>
        <p className='text-[10px] text-gray-600'>معادل {formattedValue} گرم</p>
      </div>
      <div className="relative w-full">
        <input
          type="text"
          className="border rounded-lg w-full p-2 rtl:pr-8 rtl:pl-14 text-center placeholder:text-center focus:text-start"
          placeholder='مقدار طلا به میلی گرم'
          value={value}
          onChange={handleChange}
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm">میلی گرم</span>
      </div>
    </div>
  );
}
