import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

import {
  Create_Seller,
  Get_All_Sellers,
  Get_All_Users,
} from "../../../apicalling/ApiCalling";
import AdminMenu from "../AdminMenu";
import AddThingsModal from "../BasicDetails/AddThingsModal";

function Rate() {
  const [users, setUsers] = useState([]);
  console.log(users);
  //   const [inVitrin, setInVitrin] = useState([]);
  const [isVitrin, setIsVitrin] = useState(false);
  const [sellers, setSellers] = useState([]);
  console.log(sellers);
  const [isModal, setIsModal] = useState(false);
  const [share_Benefit_Percent, setShare_Benefit_Percent] = useState("");
  const [address, setAddress] = useState("");
  const [applicationUserId, setApplicationUserId] = useState("");
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
  useEffect(() => {
    fetchData();
    Get_All_Sellers(setSellers);
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
  <h5 className="text-xl font-semibold w-full text-right">نرخ لحظه ای</h5>
  <div className="w-full flex flex-col items-center gap-8">
    <div className="w-full  flex flex-wrap justify-center gap-x-6 gap-y-20 p-5">
      
      {/* Gold Rate */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-full bg-gray-50 rounded-lg p-3 text-center">
          <h5 className="text-lg font-medium mb-2">آخرین  قیمت امامی</h5>
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
          <h5 className="text-lg font-medium mb-2">  قیمت سکه امامی </h5>
          <input 
            className="w-3/4 p-3 outline-none border-2 border-gray-300 rounded-md text-center
                      focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200" 
          />
          <button className="w-1/2 bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-md mt-3 transition-colors">
            ثبت
          </button>
        </div>
      </div>

      {/* Dollar Rate */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-full bg-gray-50 rounded-lg p-3 text-center">
          <h5 className="text-lg font-medium mb-2">آخرین  قیمت بهار آزادی</h5>
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
          <h5 className="text-lg font-medium mb-2">   قیمت بهار آزادی</h5>
          <input 
            className="w-3/4 p-3 outline-none border-2 border-gray-300 rounded-md text-center
                      focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200" 
          />
          <button className="w-1/2 bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-md mt-3 transition-colors">
            ثبت
          </button>
        </div>
      </div>

      {/* Coin Rate */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-full bg-gray-50 rounded-lg p-3 text-center">
          <h5 className="text-lg font-medium mb-2">آخرین  قیمت نیم سکه</h5>
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
          <h5 className="text-lg font-medium mb-2">  قیمت نیم سکه </h5>
          <input 
            className="w-3/4 p-3 outline-none border-2 border-gray-300 rounded-md text-center
                      focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200" 
          />
          <button className="w-1/2 bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-md mt-3 transition-colors">
            ثبت
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="w-full bg-gray-50 rounded-lg p-3 text-center">
          <h5 className="text-lg font-medium mb-2">آخرین  قیمت ربع سکه</h5>
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
          <h5 className="text-lg font-medium mb-2">  قیمت ربع سکه </h5>
          <input 
            className="w-3/4 p-3 outline-none border-2 border-gray-300 rounded-md text-center
                      focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200" 
          />
          <button className="w-1/2 bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-md mt-3 transition-colors">
            ثبت
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="w-full bg-gray-50 rounded-lg p-3 text-center">
          <h5 className="text-lg font-medium mb-2">آخرین  قیمت سکه گرمی</h5>
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
          <h5 className="text-lg font-medium mb-2">  قیمت سکه گرمی</h5>
          <input 
            className="w-3/4 p-3 outline-none border-2 border-gray-300 rounded-md text-center
                      focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200" 
          />
          <button className="w-1/2 bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-md mt-3 transition-colors">
            ثبت
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="w-full bg-gray-50 rounded-lg p-3 text-center">
          <h5 className="text-lg font-medium mb-2">آخرین  قیمت دلار</h5>
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
          <h5 className="text-lg font-medium mb-2">   قیمت دلار</h5>
          <input 
            className="w-3/4 p-3 outline-none border-2 border-gray-300 rounded-md text-center
                      focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200" 
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
