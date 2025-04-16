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

function WalletAghsat() {
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
    <div className=" w-full min-h-screen flex items-center">
      <AdminMenu />
      {isModal && (
        <AddThingsModal
          submitFn={() => Create_Seller(data, setIsModal)}
          title="شارژ اقساط"
          closeModal={() => setIsModal(false)}
        >
          <div className="utline-none border rounded p-2 w-full"> 
          <input
            onChange={(e) => setAddress(e.target.value)}
            className=" w-full p-3 outline-none border rounded"
            placeholder="گرم"
          />
          <p className=" ml-auto mt-3">موجودی فعلی: 127 تومان</p>
          </div>
<p>          لیست تراکنش ها
</p>
<div className="utline-none border rounded p-2 w-full"> 
</div>
        
        </AddThingsModal>
      )}
      <div className=" w-5/6 flex p-5 justify-center h-screen">
        <div className=" w-full rounded p-2 bg-white shadow-xl h-full flex flex-col">
          <div className=" w-full flex flex-col gap-5 items-start">
            <h5 className=" text-xl font-semibold">
              کیف پول اقساط
              </h5>
            <div className=" flex items-center w-full justify-start gap-5">
              <label className=" w-1/5 px-2 p-2 border rounded-sm flex items-center bg-white">
                <CiSearch className=" text-xl text-slate-500" />

                <input
                  className=" outline-none"
                  placeholder="جستجو در کاربران"
                />
              </label>
              <button className=" p-2 flex justify-center items-center gap-2 rounded-sm bg-teal-500 text-white">
                شارژ کیف اقساط
                <FaPlus className=" text-white text-xl" />
              </button>
            </div>
            <div className=" w-full flex justify-center items-center">
              <div className=" border w-[90%] flex flex-col">
                <div className=" py-4 w-full bg-teal-900 text-white flex items-center justify-start">
                  <h5 className=" text-center w-1/2">کاربران</h5>

                  <h5 className=" text-center w-1/2">عملیات</h5>
                </div>
                <div className="  w-full flex items-center flex-col">
                  {users.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="w-full border-b last:border-b-0 py-2 bg-white  flex items-center justify-start"
                      >
                        <h5 className=" text-center w-1/2">{item.userName}</h5>

                        <h5 className=" flex justify-center gap-5 items-center w-1/2"></h5>

                        <h5 className=" flex justify-center gap-5 items-center w-1/2">
                            <button
                              onClick={() => {
                                setApplicationUserId(item.userId);
                                setIsModal(true);
                              }}
                              className=" p-2 flex justify-center items-center gap-2 rounded-sm bg-teal-500 text-white"
                            >
                             شارژ کیف پول اقساط
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
        </div>
      </div>
    </div>
  );
}

export default WalletAghsat;
