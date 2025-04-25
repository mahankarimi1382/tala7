import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";
import {
  Create_Seller,
  Get_All_Sellers,
  Get_All_Users,
} from "../../../apicalling/ApiCalling";
import AdminMenu from "../AdminMenu";
import AddThingsModal from "../BasicDetails/AddThingsModal";

function Setting() {
  const [users, setUsers] = useState([]);
  const [isVitrin, setIsVitrin] = useState(false);
  const [sellers, setSellers] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [share_Benefit_Percent, setShare_Benefit_Percent] = useState("");
  const [address, setAddress] = useState("");
  const [applicationUserId, setApplicationUserId] = useState("");
  const [settings, setSettings] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [rawGoldProfit, setRawGoldProfit] = useState(0);
  const [rawGoldPurchaseProfit, setRawGoldPurchaseProfit] = useState(0);

  const data = {
    metadata: {
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userName: "string",
      userNameforC: "string",
    },
    share_Benefit_Percent,
    address,
    applicationUserId,
  };

  const fetchData = async () => {
    const data = await Get_All_Users();
    if (data) {
      setUsers(data);
    }
  };

  const fetchSettings = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('http://tala7.com:44/api/Setting/Get_Last_SiteSEtting');
      if (response.data && response.data.length > 0) {
        const settingsData = response.data[0];
        setSettings(settingsData);
        // Set the initial values for range sliders
        setRawGoldProfit(settingsData.rawGoldSaleBenefitPercent || 0);
        setRawGoldPurchaseProfit(settingsData.rawGoldBuyBenefitPercent || 0);
      }
    } catch (error) {
      console.error("Error fetching settings:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveSettings = async () => {
    try {
      setIsSaving(true);
      const requestBody = {
        metadata: {
          userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          userName: "admin",
          userNameforC: "admin"
        },
        ...settings,
        rawGoldBuyBenefitPercent: rawGoldPurchaseProfit,
        rawGoldSaleBenefitPercent: rawGoldProfit
      };

      const response = await axios.post(
        'http://tala7.com:44/api/Setting/CreateSiteSetting',
        requestBody
      );

      if (response.status === 200) {
        alert("تنظیمات با موفقیت به روز شد");
        fetchSettings(); // Refresh the settings after update
      }
    } catch (error) {
      console.error("Error saving settings:", error);
      alert("خطا در به روز رسانی تنظیمات");
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    fetchData();
    Get_All_Sellers(setSellers);
    fetchSettings();
  }, []);

  const handleSelectChange = (name, value) => {
    setSettings(prev => ({
      ...prev,
      [name]: value === "true"
    }));
  };

  const handleRawGoldProfitChange = (value) => {
    setRawGoldProfit(value);
    setSettings(prev => ({
      ...prev,
      rawGoldProfitPercentage: value
    }));
  };

  const handleRawGoldPurchaseProfitChange = (value) => {
    setRawGoldPurchaseProfit(value);
    setSettings(prev => ({
      ...prev,
      rawGoldPurchaseProfitPercentage: value
    }));
  };

  const selectConfigs = [
    // تنظیمات خرید
    {
      label: "خرید محصول طلا انجام شود",
      name: "isBuyGoldProduct",
      options: [
        { label: "بله", value: "true" },
        { label: "خیر", value: "false" },
      ],
    },
    {
      label: "خرید طلای خام",
      name: "isBuyGoldRaw",
      options: [
        { label: "بله", value: "true" },
        { label: "خیر", value: "false" },
      ],
    },
    // تنظیمات فروش
    {
      label: "سفارش سکه",
      name: "isCoinOrder",
      options: [
        { label: "بله", value: "true" },
        { label: "خیر", value: "false" },
      ],
    },
    {
      label: "فروش طلا به صورت نقدی",
      name: "isSaleGoldProductCashAuto",
      options: [
        { label: "بله", value: "true" },
        { label: "خیر", value: "false" },
      ],
    },
    {
      label: "فروش طلا به صورت اقساطی",
      name: "isSaleGoldProductInstalment",
      options: [
        { label: "بله", value: "true" },
        { label: "خیر", value: "false" },
      ],
    },
    {
      label: "فروش طلای خام",
      name: "isSaleGoldRawAuto",
      options: [
        { label: "بله", value: "true" },
        { label: "خیر", value: "false" },
      ],
    },
    // تنظیمات API
    {
      label: "نحوه محاسبه قیمت سکه",
      name: "isCoinPriceAuto",
      options: [
        { label: "API", value: "true" },
        { label: "دستی", value: "false" },
      ],
    },
    {
      label: "نحوه محاسبه قیمت خرید محصول طلا  ",
      name: "isBuyGoldProductCashAuto",
      options: [
        { label: "API", value: "true" },
        { label: "دستی", value: "false" },
      ],
    },
    {
      label: "نحوه محاسبه قیمت دلار",
      name: "isPriceDollarAuto",
      options: [
        { label: "API", value: "true" },
        { label: "دستی", value: "false" },
      ],
    },
  ];

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-700"></div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex items-center">
      <AdminMenu />
      {isModal && (
        <AddThingsModal
          submitFn={() => Create_Seller(data, setIsModal)}
          title="فروشنده"
          closeModal={() => setIsModal(false)}
        >
          <input
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-3 outline-none border rounded"
            placeholder="آدرس"
          />
          <div className="flex items-center w-full gap-2">
            <h5>درصد سود:</h5>
            <select
              onChange={(e) => setShare_Benefit_Percent(e.target.value)}
              className="border"
            >
              {[1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((val) => (
                <option key={val} value={val}>
                  {val}%
                </option>
              ))}
            </select>
          </div>
        </AddThingsModal>
      )}

      <div className="w-full lg:w-5/6 flex p-5 justify-center h-screen ">
        <div className="w-full rounded p-2 bg-white  h-full flex flex-col">
          <div className="w-full h-full flex flex-col gap-5 items-start">
            <h5 className="text-xl mx-auto lg:mx-1 font-semibold">تنظیمات</h5>
            <div className="w-full gap-5 h-full items-start flex flex-col mt-4">
              <div className="w-[90%] bg-gray-100 rounded-lg p-4 flex flex-col lg:flex-row items-start shadow-sm gap-4">
                {/* تنظیمات خرید Column */}
                <div className="w-full lg:w-1/3 p-2 px-4 gap-4 flex flex-col">
                  <h5 className="text-lg font-semibold mb-2 text-center">تنظیمات خرید</h5>
                  {selectConfigs.slice(0, 2).map(({ label, name, options }) => (
                    <div
                      key={name}
                      className="flex gap-2 items-center justify-between p-3 bg-gray-200 rounded-md hover:shadow-md transition-all duration-200"
                    >
                      <h5>{label}</h5>
                      <select
                        className="w-24 border border-gray-300 rounded p-1 bg-white"
                        name={name}
                        value={settings[name] ? "true" : "false"}
                        onChange={(e) => handleSelectChange(name, e.target.value)}
                      >
                        {options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                  {/* درصد سود قیمت خرید طلای خام */}
                  <div className="flex flex-col gap-2 p-3 bg-gray-200 rounded-md hover:shadow-md transition-all duration-200">
                    <h5 className="text-right">درصد سود قیمت خرید طلای خام</h5>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600">10%</span>
                        <input
                          type="range"
                          min="0"
                          max="10"
                          step="0.1"
                          value={rawGoldPurchaseProfit}
                          onChange={(e) => handleRawGoldPurchaseProfitChange(parseFloat(e.target.value))}
                          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-teal-700 [&::-webkit-slider-thumb]:cursor-pointer"
                          dir="ltr"
                        />
                        <span className="text-sm text-gray-600">0%</span>
                      </div>
                      <div className="flex justify-center">
                        <span className="text-lg font-medium min-w-[3rem] text-center">
                          {rawGoldPurchaseProfit.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* تنظیمات فروش Column */}
                <div className="w-full lg:w-1/3 p-2 px-4 gap-4 flex flex-col">
                  <h5 className="text-lg font-semibold mb-2 text-center">تنظیمات فروش</h5>
                  {selectConfigs.slice(2, 6).map(({ label, name, options }) => (
                    <div
                      key={name}
                      className="flex gap-2 items-center justify-between p-3 bg-gray-200 rounded-md hover:shadow-md transition-all duration-200"
                    >
                      <h5>{label}</h5>
                      <select
                        className="w-24 border border-gray-300 rounded p-1 bg-white"
                        name={name}
                        value={settings[name] ? "true" : "false"}
                        onChange={(e) => handleSelectChange(name, e.target.value)}
                      >
                        {options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                  {/* درصد سود قیمت فروش طلای خام */}
                  <div className="flex flex-col gap-2 p-3 bg-gray-200 rounded-md hover:shadow-md transition-all duration-200">
                    <h5 className="text-right">درصد سود قیمت فروش طلای خام</h5>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600">10%</span>
                        <input
                          type="range"
                          min="0"
                          max="10"
                          step="0.1"
                          value={rawGoldProfit}
                          onChange={(e) => handleRawGoldProfitChange(parseFloat(e.target.value))}
                          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-teal-700 [&::-webkit-slider-thumb]:cursor-pointer"
                          dir="ltr"
                        />
                        <span className="text-sm text-gray-600">0%</span>
                      </div>
                      <div className="flex justify-center">
                        <span className="text-lg font-medium min-w-[3rem] text-center">
                          {rawGoldProfit.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* تنظیمات API Column */}
                <div className="w-full lg:w-1/3 p-2 px-4 gap-4 flex flex-col">
                  <h5 className="text-lg font-semibold mb-2 text-center">تنظیمات API</h5>
                  {selectConfigs.slice(6).map(({ label, name, options }) => (
                    <div
                      key={name}
                      className="flex gap-2 items-center justify-between p-3 bg-gray-200 rounded-md hover:shadow-md transition-all duration-200"
                    >
                      <h5>{label}</h5>
                      <select
                        className="w-24 border border-gray-300 rounded p-1 bg-white"
                        name={name}
                        value={settings[name] ? "true" : "false"}
                        onChange={(e) => handleSelectChange(name, e.target.value)}
                      >
                        {options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                className="w-1/5 rounded mx-auto bg-teal-700 text-white p-2 hover:bg-teal-800 transition-colors"
                onClick={saveSettings}
                disabled={isSaving}
              >
                {isSaving ? "در حال ذخیره..." : "ثبت"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;