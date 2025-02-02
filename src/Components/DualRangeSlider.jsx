import { useState } from "react";

const DualRangeSlider = () => {
  const [minValue, setMinValue] = useState(10);
  const [maxValue, setMaxValue] = useState(90);

  const handleMinChange = (e) => {
    const value = Math.min(parseInt(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(parseInt(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  return (
    <div className="p-6 w-full mx-auto bg-white rounded-lg shadow-md">
      <div className="relative">
        {/* Background track */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 rounded-lg transform -translate-y-1/2"></div>

        {/* Highlighted range between min and max */}
        <div
          className="absolute top-1/2 bg-[#e8d2b4] h-[2px] rounded-lg transform -translate-y-1/2"
          style={{
            left: `${(minValue / 100) * 100}%`,
            width: `${((maxValue - minValue) / 100) * 100}%`,
          }}
        ></div>

        {/* Min Thumb */}
        <input
          type="range"
          min="0"
          max="100"
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none"
          style={{ zIndex: 10 }}
        />

        {/* Max Thumb */}
        <input
          type="range"
          min="0"
          max="100"
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none"
          style={{ zIndex: 10 }}
        />

        {/* Custom Styling for Thumbs */}
        <style jsx>{`
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 4px;
            height: 16px;
            background: #caa984;
            border-radius: 25%;
            cursor: pointer;
            pointer-events: auto;
          }

          input[type="range"]::-moz-range-thumb {
            width: 16px;
            height: 16px;
            background: blue;
            border-radius: 50%;
            cursor: pointer;
            pointer-events: auto;
          }
        `}</style>
      </div>

      <div className="flex justify-around text-sm text-gray-500 mt-4 text-end">
       <span  dir="ltr">
        قیمت از <span style={{fontSize: '1.1rem'}}> {minValue} </span> الی <span  style={{fontSize: '1.1rem'}}>  {maxValue} </span> هزار تومان
       </span>
       
      
      </div>
    </div>
  );
};

export default DualRangeSlider;
