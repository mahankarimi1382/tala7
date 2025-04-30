import { useState } from 'react';
import PropTypes from 'prop-types';

const DualRangeSlider = ({ min, max, onRangeChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  const handleMinChange = (e) => {
    const value = Math.min(parseInt(e.target.value), maxVal - 1);
    setMinVal(value);
    onRangeChange(value, maxVal);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(parseInt(e.target.value), minVal + 1);
    setMaxVal(value);
    onRangeChange(minVal, value);
  };

  const getPercent = (value) => ((value - min) / (max - min)) * 100;

  const formatPrice = (price) => {
    if (price >= 1000000000) {
      return `${(price / 1000000000).toLocaleString('fa-IR')} میلیارد`;
    } else if (price >= 1000000) {
      return `${(price / 1000000).toLocaleString('fa-IR')} میلیون`;
    } else if (price >= 1000) {
      return `${(price / 1000).toLocaleString('fa-IR')} هزار`;
    }
    return price.toLocaleString('fa-IR');
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
            left: `${getPercent(minVal)}%`,
            width: `${getPercent(maxVal) - getPercent(minVal)}%`,
          }}
        ></div>

        {/* Min Thumb */}
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={handleMinChange}
          className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none"
          style={{ zIndex: 10 }}
        />

        {/* Max Thumb */}
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={handleMaxChange}
          className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none"
          style={{ zIndex: 10 }}
        />

        {/* Custom Styling for Thumbs */}
        <style>{`
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

      <div className="flex justify-center text-sm text-gray-500 mt-4 text-center">
        <span dir="rtl">
          از <span style={{fontSize: '1.1rem'}}> {formatPrice(minVal)} </span> تا <span style={{fontSize: '1.1rem'}}> {formatPrice(maxVal)} </span> تومان
        </span>
      </div>
    </div>
  );
};

DualRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onRangeChange: PropTypes.func.isRequired
};

export default DualRangeSlider;
