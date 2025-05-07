import { useState, useEffect } from "react";

const PercentageSlider = ({ title }) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(25);
  const [products, setProducts] = useState([]);

  const handleMinChange = (e) => {
    const value = Math.min(parseInt(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(parseInt(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  const handleSearch = async () => {
    const requestBody = { /* ... */ };
    console.log("Sending request body:", requestBody);

    try {
      const response = await fetch("http://tala7.com:44/api/DocStore/Search_Products_In_InVitrin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody)
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Network response was not ok:", errorText);
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("API response data:", data);
      setProducts(data.response_List || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://tala7.com:44/api/DocStore/Get_Products_Show_InVitrin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          metadata: {
            userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            userName: "string",
            userNameforC: "string"
          },
          pagenumber: 1,
          pagesize: 15
        })
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setProducts(data.response_List || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // This runs on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

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
                  left: `${(minValue / 25) * 100}%`,
                  width: `${((maxValue - minValue) / 25) * 100}%`,
                }}
              ></div>

              {/* Min Thumb */}
              <input
                type="range"
                min="0"
                max="25"
                value={minValue}
                onChange={handleMinChange}
                className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none"
                style={{ zIndex: 10 }}
              />

              {/* Max Thumb */}
              <input
                type="range"
                min="0"
                max="25"
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