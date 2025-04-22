import React, { useEffect, useState } from "react"; // Make sure to import React
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import moment from "moment-jalaali";

import {
  Create_Seller,
  Get_All_Sellers,
  Get_All_Users,
} from "../../../apicalling/ApiCalling";
import AdminMenu from "../AdminMenu";
import AddThingsModal from "../BasicDetails/AddThingsModal";

const toPersianNumbers = (num) => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const formattedNumber = Number(num)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return formattedNumber
    .replace(/[0-9]/g, (x) => persianDigits[x])
    .replace(/,/g, "،");
};

const toPersianDate = (dateStr) => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return moment(dateStr)
    .format("jYYYY/jMM/jDD")
    .replace(/[0-9]/g, (x) => persianDigits[x]);
};

function Rate() {
  // All your existing states
  const [users, setUsers] = useState([]);
  const [isVitrin, setIsVitrin] = useState(false);
  const [sellers, setSellers] = useState([]);
  const [dollarPrices, setDollarPrices] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [share_Benefit_Percent, setShare_Benefit_Percent] = useState("");
  const [address, setAddress] = useState("");
  const [applicationUserId, setApplicationUserId] = useState("");

  // Add the new dollar price state
  const [dollarPriceInput, setDollarPriceInput] = useState("");

  // Your existing data object
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

  // Add the submit function for dollar price
  const submitDollarPrice = async () => {
    if (!dollarPriceInput) return;

    try {
      const response = await fetch(
        "http://tala7.com:44/api/DollarPrice/CreateGoldPrice",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            metadata: {
              userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              userName: "string",
              userNameforC: "string",
            },
            lastDatetime_DollarPrice: new Date().toISOString().split("T")[0],
            dollar_Price: dollarPriceInput,
            description: "string",
            status: 0,
          }),
        }
      );

      if (response.ok) {
        setDollarPriceInput(""); // Clear input
        fetchDollarPrices(); // Refresh list
      }
    } catch (error) {
      console.error("Error submitting dollar price:", error);
    }
  };

  // Your existing fetch functions
  const fetchData = async () => {
    const data = await Get_All_Users();
    if (data) {
      setUsers(data);
    }
  };

  const fetchDollarPrices = async () => {
    try {
      const response = await fetch(
        "http://tala7.com:44/api/DollarPrice/Get_All_DollarPrice",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pagenumber: 1,
            pagesize: 15,
          }),
        }
      );
      const data = await response.json();
      if (data && data.response_List) {
        setDollarPrices(data.response_List);
      }
    } catch (error) {
      console.error("Error fetching dollar prices:", error);
    }
  };

  useEffect(() => {
    fetchData();
    Get_All_Sellers(setSellers);
    fetchDollarPrices();
  }, []);

  return (
    <div className="w-full h-screen flex overflow-hidden">
      <AdminMenu />
      {isModal && (
        <AddThingsModal
          submitFn={() => Create_Seller(data, setIsModal)}
          title="فروشنده"
          closeModal={() => setIsModal(false)}
        >
          <input
            onChange={(e) => setAddress(e.target.value)}
            className=" w-full p-3 outline-none border rounded"
            placeholder="آدرس"
          />
          <div className=" flex items-center w-full gap-2">
            <h5>درصد سود:</h5>
            <select
              onChange={(e) => setShare_Benefit_Percent(e.target.value)}
              className=" border"
            >
              <option value="1">1%</option>
              <option value="1.5">1.5%</option>
              <option value="2">2%</option>
              <option value="2.5">2.5%</option>
              <option value="3">3%</option>

              <option value="3.5">3.5%</option>
              <option value="4">4%</option>
              <option value="4.5">4.5%</option>
              <option value="5">5%</option>
            </select>
          </div>
        </AddThingsModal>
      )}
      <div className="w-full lg:w-5/6 p-2 overflow-y-auto">
        <div className="w-full rounded p-1 bg-white min-h-full ">
          <div className="w-full h-full flex flex-col gap-5 items-start p-4">
            <h5 className="text-xl font-semibold w-full text-right">
              نرخ لحظه ای
            </h5>
            <div className="w-full flex flex-col items-center gap-8">
              <div className="w-full  flex flex-wrap justify-center gap-x-6 gap-y-20 p-5">
                {/* Gold Rate */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-full bg-gray-50 rounded-lg p-3 text-center">
                    <h5 className="text-lg   mb-2">آخرین قیمت دلار</h5>
                    <div className="max-h-40 overflow-y-auto border rounded mx-auto">
                      <table className="w-full text-center">
                        <thead className="bg-gray-100 sticky top-0">
                          <tr>
                            <th className="p-2">ردیف</th>
                            <th className="p-2">قیمت</th>
                            <th className="p-2">تاریخ</th>
                          </tr>
                        </thead>

                        <tbody>
                          {dollarPrices.map((price, index) => (
                            <tr key={price.id} className="border-t">
                              <td className="p-2">
                                {toPersianNumbers(index + 1)}
                              </td>
                              <td className="p-2">
                                {toPersianNumbers(price.dollar_Price)}
                              </td>
                              <td className="p-2">
                                {toPersianDate(price.lastDatetime_DollarPrice)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="w-full p-4 bg-gray-50 rounded-lg shadow-sm flex flex-col items-center">
                    <h5 className="text-lg mb-2"> قیمت دلار</h5>
                    <input
                      type="text"
                      value={dollarPriceInput}
                      onChange={(e) => setDollarPriceInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          submitDollarPrice();
                        }
                      }}
                      className="w-3/4 p-3 outline-none border-2 border-gray-300 rounded-md text-center
  focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
                    />
                    <button
                      onClick={submitDollarPrice}
                      className="w-1/2 bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-md mt-3 transition-colors"
                    >
                      ثبت
                    </button>
                  </div>
                </div>{" "}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-full bg-gray-50 rounded-lg p-3 text-center">
                    <h5 className="text-lg   mb-2">آخرین قیمت طلا</h5>
                    <div className="max-h-40 overflow-y-auto border rounded mx-auto">
                      <table className="w-full text-center">
                        <thead className="bg-gray-100 sticky top-0">
                          <tr>
                            <th className="p-2">ردیف</th>
                            <th className="p-2">قیمت</th>
                            <th className="p-2">تاریخ</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="w-full p-4 bg-gray-50 rounded-lg shadow-sm flex flex-col items-center">
                    <h5 className="text-lg   mb-2"> قیمت هر گرم طلا</h5>
                    <input
                      className="w-3/4 p-3 outline-none border-2 border-gray-300 rounded-md text-center
                      focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-200"
                    />
                    <button className="w-1/2 bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-md mt-3 transition-colors">
                      ثبت
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full  flex flex-wrap justify-center gap-x-6 gap-y-20 p-5">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-full bg-gray-50 rounded-lg p-3 text-center">
                    <h5 className="text-lg   mb-2">آخرین قیمت امامی</h5>
                    <div className="max-h-40 overflow-y-auto border rounded mx-auto">
                      <table className="w-full text-center">
                        <thead className="bg-gray-100 sticky top-0">
                          <tr>
                            <th className="p-2">ردیف</th>
                            <th className="p-2">قیمت</th>
                            <th className="p-2">تاریخ</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">2,500,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">2,500,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">2,500,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">2,500,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">2,500,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">2,500,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">2,500,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">2,500,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">2,500,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">2,500,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="w-full p-4 bg-gray-50 rounded-lg shadow-sm flex flex-col items-center">
                    <h5 className="text-lg   mb-2"> قیمت سکه امامی </h5>
                    <input
                      className="w-3/4 p-3 outline-none border-2 border-gray-300 rounded-md text-center
                      focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-200"
                    />
                    <button className="w-1/2 bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-md mt-3 transition-colors">
                      ثبت
                    </button>
                  </div>
                </div>
                {/* Dollar Rate */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-full bg-gray-50 rounded-lg p-3 text-center">
                    <h5 className="text-lg   mb-2">آخرین قیمت بهار آزادی</h5>
                    <div className="max-h-40 overflow-y-auto border rounded mx-auto">
                      <table className="w-full text-center">
                        <thead className="bg-gray-100 sticky top-0">
                          <tr>
                            <th className="p-2">ردیف</th>
                            <th className="p-2">قیمت</th>
                            <th className="p-2">تاریخ</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">58,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">58,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">58,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">58,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="w-full p-4 bg-gray-50 rounded-lg shadow-sm flex flex-col items-center">
                    <h5 className="text-lg   mb-2"> قیمت بهار آزادی</h5>
                    <input
                      className="w-3/4 p-3 outline-none border-2 border-gray-300 rounded-md text-center
                      focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-200"
                    />
                    <button className="w-1/2 bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-md mt-3 transition-colors">
                      ثبت
                    </button>
                  </div>
                </div>
                {/* Coin Rate */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-full bg-gray-50 rounded-lg p-3 text-center">
                    <h5 className="text-lg   mb-2">آخرین قیمت نیم سکه</h5>
                    <div className="max-h-40 overflow-y-auto border rounded mx-auto">
                      <table className="w-full text-center">
                        <thead className="bg-gray-100 sticky top-0">
                          <tr>
                            <th className="p-2">ردیف</th>
                            <th className="p-2">قیمت</th>
                            <th className="p-2">تاریخ</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="w-full p-4 bg-gray-50 rounded-lg shadow-sm flex flex-col items-center">
                    <h5 className="text-lg   mb-2"> قیمت نیم سکه </h5>
                    <input
                      className="w-3/4 p-3 outline-none border-2 border-gray-300 rounded-md text-center
                      focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-200"
                    />
                    <button className="w-1/2 bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-md mt-3 transition-colors">
                      ثبت
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-full bg-gray-50 rounded-lg p-3 text-center">
                    <h5 className="text-lg   mb-2">آخرین قیمت ربع سکه</h5>
                    <div className="max-h-40 overflow-y-auto border rounded mx-auto">
                      <table className="w-full text-center">
                        <thead className="bg-gray-100 sticky top-0">
                          <tr>
                            <th className="p-2">ردیف</th>
                            <th className="p-2">قیمت</th>
                            <th className="p-2">تاریخ</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="w-full p-4 bg-gray-50 rounded-lg shadow-sm flex flex-col items-center">
                    <h5 className="text-lg   mb-2"> قیمت ربع سکه </h5>
                    <input
                      className="w-3/4 p-3 outline-none border-2 border-gray-300 rounded-md text-center
                      focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-200"
                    />
                    <button className="w-1/2 bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-md mt-3 transition-colors">
                      ثبت
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-full bg-gray-50 rounded-lg p-3 text-center">
                    <h5 className="text-lg   mb-2">آخرین قیمت سکه گرمی</h5>
                    <div className="max-h-40 overflow-y-auto border rounded mx-auto">
                      <table className="w-full text-center">
                        <thead className="bg-gray-100 sticky top-0">
                          <tr>
                            <th className="p-2">ردیف</th>
                            <th className="p-2">قیمت</th>
                            <th className="p-2">تاریخ</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">3,200,000</td>
                            <td className="p-2">1403/04/15</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="w-full p-4 bg-gray-50 rounded-lg shadow-sm flex flex-col items-center">
                    <h5 className="text-lg   mb-2"> قیمت سکه گرمی</h5>
                    <input
                      className="w-3/4 p-3 outline-none border-2 border-gray-300 rounded-md text-center
                      focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-200"
                    />
                    <button className="w-1/2 bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-md mt-3 transition-colors">
                      ثبت
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rate;
