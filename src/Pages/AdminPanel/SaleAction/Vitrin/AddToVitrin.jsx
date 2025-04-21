import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import {
  EnterVitrin_DocStore,
  Get_Products_InStore,
  Get_Products_InVitrin,
  Reject_Vitrin_DocStore_To_Safebox,
} from "../../../../apicalling/ApiCalling";

import AdminMenu from "../../AdminMenu";
import { Pagination } from "@mui/material";
import DeletingModal from "../../BasicDetails/DeletingModal";

function AddToVitrin() {
  const [currentPage, setCurrentPage] = useState(1);

  const [docStore, setDocStore] = useState([]);
  const [inVitrin, setInVitrin] = useState([]);
  const [selectedProductID, setSelectedProductID] = useState(0);
  const [product_Name, setProduct_Name] = useState("");
  console.log(inVitrin);
  const [isVitrin, setIsVitrin] = useState(false);
  const [isDeletingModal, setIsDeletingModal] = useState(false);
  useEffect(() => {
    Get_Products_InVitrin(setInVitrin, currentPage);
    Get_Products_InStore(setDocStore, currentPage);
  }, [currentPage, isVitrin, isDeletingModal]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    console.log("Selected Page:", value);
  };

  return (
    <div className=" w-full h-screen flex items-center">
      {isDeletingModal && (
        <DeletingModal
          id={selectedProductID}
          DeletingFn={Reject_Vitrin_DocStore_To_Safebox}
          title={product_Name}
          closeModal={() => setIsDeletingModal(false)}
        />
      )}
      <AdminMenu />

      <div className=" w-full lg:w-5/6 flex p-5 justify-center min-h-screen">
        <div className=" w-full rounded p-2 bg-white shadow-xl h-full flex flex-col">
          <div className=" w-full flex justify-center gap-10">
            <button
              onClick={() => setIsVitrin(false)}
              className={!isVitrin && "border-b-2 border-teal-500"}
            >
              موجودی گاوصندوق
            </button>
            <button
              onClick={() => setIsVitrin(true)}
              className={isVitrin && "border-b-2 border-teal-500"}
            >
              ویترین
            </button>
          </div>
          {!isVitrin ? (
            <div className=" w-full flex flex-col gap-5 items-start">
              <h5 className=" text-xl font-semibold">محصولات</h5>
              <div className=" flex items-center w-full justify-start gap-5">
                <label className=" w-1/5 px-2 p-2 border rounded-sm flex items-center bg-white">
                  <CiSearch className=" text-xl text-slate-500" />

                  <input
                    className=" outline-none"
                    placeholder="جستجو در محصولات"
                  />
                </label>
              </div>
              <div className=" w-full flex justify-center items-center">
                <div className=" border gap-2 w-[90%] flex flex-col">
                  <div className=" py-4 w-full bg-teal-900 text-white flex items-center justify-start">
                    <h5 className=" text-center w-1/5">عنوان محصول</h5>
                    <h5 className=" text-center w-2/5">توضیحات</h5>
                    <h5 className=" text-center w-1/5">کد محصول</h5>
                    <h5 className=" text-center w-1/5">عملیات</h5>
                  </div>
                  <div className="  h-[400px] overflow-auto  w-full flex items-center flex-col">
                    {docStore.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="w-full border-b last:border-b-0 py-2 bg-white  flex items-center justify-start"
                        >
                          <h5 className=" text-center w-1/5">
                            {item.productName}
                          </h5>
                          <h5 className=" text-center w-2/5">
                            {/* {item.product_Description} */}
                          </h5>

                          <h5 className=" text-center w-1/5">
                            {/* {item.product.product_Code} */}
                          </h5>
                          <h5 className=" flex justify-center gap-5 items-center w-1/5">
                            <button
                              onClick={() =>
                                EnterVitrin_DocStore(item.id, setDocStore)
                              }
                              className=" p-2 flex justify-center items-center gap-2 rounded-sm bg-teal-500 text-white"
                            >
                              افزودن به ویترین
                              <FaPlus className=" text-white text-xl" />
                            </button>
                          </h5>
                        </div>
                      );
                    })}
                  </div>
                  <div className=" justify-center flex items-center" dir="ltr">
                    <Pagination
                      onChange={handlePageChange}
                      page={currentPage}
                      count={10}
                      color="primary"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className=" w-full flex flex-col gap-5 items-start">
              <h5 className=" text-xl font-semibold">ویترین</h5>
              <div className=" flex items-center w-full justify-start gap-5">
                <label className=" w-1/5 px-2 p-2 border rounded-sm flex items-center bg-white">
                  <CiSearch className=" text-xl text-slate-500" />

                  <input
                    className=" outline-none"
                    placeholder="جستجو در ویترین"
                  />
                </label>
              </div>
              <div className=" w-full flex justify-center items-center">
                <div className=" border w-[90%] flex flex-col">
                  <div className=" py-4 w-full bg-teal-900 text-white flex items-center justify-start">
                    <h5 className=" text-center w-1/5">عنوان محصول</h5>
                    <h5 className=" text-center w-2/5">توضیحات</h5>
                    <h5 className=" text-center w-1/5">کد محصول</h5>
                    <h5 className=" text-center w-1/5">عملیات</h5>
                  </div>
                  <div className=" h-[450px] overflow-auto  w-full flex items-center flex-col">
                    {inVitrin.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="w-full border-b last:border-b-0 py-2 bg-white  flex items-center justify-start"
                        >
                          <h5 className=" text-center w-1/5">
                            {item.productName}
                          </h5>
                          <h5 className=" text-center w-2/5">
                            {/* {item.product.product_Description} */}
                          </h5>

                          <h5 className=" text-center w-1/5">
                            {/* {item.product.product_Code} */}
                          </h5>
                          <h5 className=" flex justify-center gap-5 items-center w-1/5">
                            <button
                              onClick={() => {
                                setProduct_Name(item.productName);
                                setSelectedProductID(item.id);
                                setIsDeletingModal(true);
                              }}
                              className=" p-2 flex justify-center items-center gap-2 rounded-sm bg-red-500 text-white"
                            >
                              حذف از ویترین
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

export default AddToVitrin;
