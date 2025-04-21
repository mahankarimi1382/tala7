import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

import {

  Get_All_Applicants,
  SharzhWallet_Gold,
  Get_Wallet_gold_By_ApplicantId,
} from "../../../apicalling/ApiCalling";
import AdminMenu from "../AdminMenu";
import AddThingsModal from "../BasicDetails/AddThingsModal";

function WalletTala() {
  const [walletInfo, setWalletInfo] = useState([]);
  console.log(walletInfo);
  const [aplicantUsers, setAplicantUsers] = useState([]);
  console.log(aplicantUsers);
  //   const [inVitrin, setInVitrin] = useState([]);
  const [sharzhValue, setSharzhValue] = useState(0);
  const [applicantId, setApplicantId] = useState(null);

  const [isModal, setIsModal] = useState(false);
  const data = {
    sharzhValue,
    applicantId,
  };
  const fetchData = async () => {
    Get_All_Applicants(setAplicantUsers);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" w-full min-h-screen flex items-center">
      <AdminMenu />
      {isModal && (
        <AddThingsModal
          submitFn={() => SharzhWallet_Gold(data, setIsModal)}
          title="شارژ طلا"
          closeModal={() => setIsModal(false)}
        >
          <div className=" flex flex-col gap-2  rounded w-full">
            <input
              onChange={(e) => setSharzhValue(e.target.value)}
              className=" w-full p-3 outline-none border rounded"
              placeholder="گرم"
            />
            <p className="">
              موجودی فعلی: {walletInfo.exist_Gold}
            </p>
          </div>
          <p> لیست تراکنش ها</p>
          <div className=" border h-36 overflow-auto rounded p-2 w-full">
            <div className=" pb-3 border-teal-500 border-b-2 w-full flex justify-between px-5">
              <h5>تاریخ و ساعت</h5>
              <h5>موجودی</h5>
            </div>
            {walletInfo.savabegh &&
              walletInfo.savabegh.map((item) => {
                return (
                  <div
                    className="w-full py-1 flex justify-between px-5"
                    key={item.id}
                  >
                    <h5 className=" text-gray-700">{item.date_register}</h5>
                    <h5 className=" text-gray-700">{item.exist_Gold}</h5>
                  </div>
                );
              })}
          </div>
        </AddThingsModal>
      )}
      <div className=" w-full lg:w-5/6 flex p-5 justify-center h-screen">
        <div className=" w-full rounded p-2 bg-white shadow-xl h-full flex flex-col">
          <div className=" w-full flex flex-col gap-5 items-start">
            <h5 className=" text-xl font-semibold">کیف پول طلا</h5>
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
                <div className="  w-full flex items-center flex-col">
                  {aplicantUsers.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="w-full border-b last:border-b-0 py-2 bg-white  flex items-center justify-start"
                      >
                        <h5 className=" text-center w-1/2">
                          {item.applicationUser.mobile}
                        </h5>

                        <h5 className=" flex justify-center gap-5 items-center w-1/2">
                          <button
                            onClick={() => {
                              Get_Wallet_gold_By_ApplicantId(
                                item.id,
                                setWalletInfo
                              );
                              setApplicantId(item.id);
                              setIsModal(true);
                            }}
                            className=" p-2 flex justify-center items-center gap-2 rounded-sm bg-teal-500 text-white"
                          >
                            شارژ کیف پول طلا
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

export default WalletTala;
