import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

import {
  Create_Seller,
  Get_All_Sellers,
  Get_All_Users,
} from "../../../apicalling/ApiCalling";
import AdminMenu from "../AdminMenu";
import AddThingsModal from "./AddThingsModal";

function CreateSeller() {
  const [users, setUsers] = useState([]);
  console.log(users);
  //   const [inVitrin, setInVitrin] = useState([]);
  const [isVitrin, setIsVitrin] = useState(false);
  const [sellers, setSellers] = useState([]);
  console.log(sellers);
  const [isModal, setIsModal] = useState(false);
  const [sellerName, setSellerName] = useState("");
  const [sellerFamily, setSellerFamily] = useState("");

  const [share_Benefit_Percent, setShare_Benefit_Percent] = useState("");
  const [address, setAddress] = useState("");
  const [applicationUserId, setApplicationUserId] = useState("");
  const data = {
    metadata: {
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userName: "string",
      userNameforC: "string",
    },
    sellerName,
    sellerFamily,
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
  }, [isVitrin]);
  return (
    <div className=" w-full min-h-screen flex items-center">
      <AdminMenu />
      {isModal && (
        <AddThingsModal
          submitFn={() => Create_Seller(data, setIsModal)}
          title="فروشنده"
          closeModal={() => setIsModal(false)}
        >
          <input
            onChange={(e) => setSellerName(e.target.value)}
            className=" w-full p-3 outline-none border rounded"
            placeholder="نام"
          />{" "}
          <input
            onChange={(e) => setSellerFamily(e.target.value)}
            className=" w-full p-3 outline-none border rounded"
            placeholder="نام خانوادگی"
          />
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
      <div className=" w-full lg:w-5/6 flex p-5 justify-center h-screen">
        <div className=" w-full rounded p-2 bg-white shadow-xl h-full flex flex-col">
          <div className=" w-full flex justify-center gap-10">
            <button
              onClick={() => setIsVitrin(false)}
              className={!isVitrin && "border-b-2 border-teal-500"}
            >
              کاربران
            </button>
            <button
              onClick={() => setIsVitrin(true)}
              className={isVitrin && "border-b-2 border-teal-500"}
            >
              فروشنده ها
            </button>
          </div>
          {!isVitrin ? (
            <div className=" w-full flex flex-col gap-5 items-start">
              <h5 className=" text-xl font-semibold">کاربران</h5>
              <div className=" flex items-center w-full justify-start gap-5">
                <label className=" w-1/5 px-2 p-2 border rounded-sm flex items-center bg-white">
                  <CiSearch className=" text-xl text-slate-500" />

                  <input
                    className=" outline-none"
                    placeholder="جستجو در کاربران"
                  />
                </label>
              </div>
              <div className=" w-full flex justify-center items-center">
                <div className=" border w-[90%] flex flex-col">
                  <div className=" py-4 w-full bg-teal-900 text-white flex items-center justify-start">
                    <h5 className=" text-center w-1/2">کاربران</h5>

                    <h5 className=" text-center w-1/2">عملیات</h5>
                  </div>
                  <div className=" overflow-auto h-[350px]  w-full flex items-center flex-col">
                    {users.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="w-full border-b last:border-b-0 py-2 bg-white  flex items-center justify-start"
                        >
                          <h5 className=" text-center w-1/2">
                            {item.userName}
                          </h5>

                          <h5 className=" flex justify-center gap-5 items-center w-1/2">
                            <button
                              onClick={() => {
                                setApplicationUserId(item.userId);
                                setIsModal(true);
                              }}
                              className=" p-2 flex justify-center items-center gap-2 rounded-sm bg-teal-500 text-white"
                            >
                              تعریف فروشنده
                              <FaPlus className=" text-white text-xl" />
                            </button>
                          </h5>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className=" w-full flex flex-col gap-5 items-start">
              <h5 className=" text-xl font-semibold">فروشنده ها</h5>
              <div className=" flex items-center w-full justify-start gap-5">
                <label className=" w-1/5 px-2 p-2 border rounded-sm flex items-center bg-white">
                  <CiSearch className=" text-xl text-slate-500" />

                  <input
                    className=" outline-none"
                    placeholder="جستجو در فروشنده"
                  />
                </label>
              </div>
              <div className=" w-full flex justify-center items-center">
                <div className=" border w-[90%] flex flex-col">
                  <div className=" py-4 w-full bg-teal-900 text-white flex items-center justify-start">
                    <h5 className=" text-center w-1/4">نلم و نام خانوادگی</h5>
                    <h5 className=" text-center w-1/4">درصد</h5>
                    <h5 className=" text-center w-1/4">کد </h5>
                    <h5 className=" text-center w-1/4">عملیات</h5>
                  </div>
                  <div className="  w-full flex items-center flex-col">
                    {sellers.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="w-full border-b last:border-b-0 py-2 bg-white  flex items-center justify-start"
                        >
                          <h5 className=" text-center w-1/4">
                            {item.sellerName} {item.sellerFamily}
                          </h5>
                          <h5 className=" text-center w-1/4">
                            {item.share_Benefit_Percent}
                          </h5>

                          <h5 className=" text-center w-1/4">
                            {item.seller_code}
                          </h5>
                          <h5 className=" flex justify-center gap-5 items-center w-1/4">
                            <button
                              onClick={() => console.log(item)}
                              className=" p-2 flex justify-center items-center gap-2 rounded-sm bg-red-500 text-white"
                            >
                              حذف از فروشنده
                            </button>
                          </h5>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateSeller;
