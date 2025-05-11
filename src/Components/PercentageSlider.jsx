import { useState, useEffect } from "react";

const PercentageSlider = ({ title, min = 0, max = 25, onRangeChange }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = (e) => {
    const value = Math.min(parseInt(e.target.value), maxValue - 1);
    setMinValue(value);
    onRangeChange?.(value, maxValue);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(parseInt(e.target.value), minValue + 1);
    setMaxValue(value);
    onRangeChange?.(minValue, value);
  };

  return (
    <div className="filteregheimat shadow-lg p-5 rounded-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(0, 0, 0, 0.1)" }}>
      <div>
        <div className="bg-[#ececec] rounded-lg h-[50px] text-[16px] font-semibold text-center pt-3 mb-3 shadow-md">
          {title}
        </div>
        <div dir="ltr" className="flex justify-center items-center bg-white">
          <div className="p-6 w-full mx-auto bg-white rounded-lg shadow-md">
            <div className="relative">
              {/* Background track */}
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 rounded-lg transform -translate-y-1/2"></div>

              {/* Highlighted range between min and max */}
              <div
                className="absolute top-1/2 bg-[#e8d2b4] h-[2px] rounded-lg transform -translate-y-1/2"
                style={{
                  left: `${(minValue / max) * 100}%`,
                  width: `${((maxValue - minValue) / max) * 100}%`,
                }}
              ></div>

              {/* Min Thumb */}
              <input
                type="range"
                min={min}
                max={max}
                value={minValue}
                onChange={handleMinChange}
                className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none"
                style={{ zIndex: 10 }}
              />

              {/* Max Thumb */}
              <input
                type="range"
                min={min}
                max={max}
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
                  background: #caa984;
                  border-radius: 50%;
                  cursor: pointer;
                  pointer-events: auto;
                }
              `}</style>
            </div>

            <div className="flex justify-center text-sm text-gray-500 mt-4 text-center">
              <span dir="rtl">
                از <span style={{fontSize: '1.1rem'}}> {minValue.toLocaleString('fa-IR')} </span> تا <span style={{fontSize: '1.1rem'}}> {maxValue.toLocaleString('fa-IR')} </span> درصد
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PercentageSlider; 