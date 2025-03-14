import { useEffect, useState } from "react";
import AdminMenu from "../AdminMenu";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import {
  Create_TypeProduct_SubMaster,
  Get_All_MasterProduct,
  Get_All_SubMasterProduct,
} from "../../../apicalling/ApiCalling";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import AddThingsModal from "./AddThingsModal";

function SubMasterProduct() {
  const [subMasterProduct, setSubMasterProduct] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [masterProduct, setMasterProduct] = useState([]);
  console.log(masterProduct);
  const [nameTypeProduct_SubMaster, setNameTypeProduct_SubMaster] =
    useState("");
  const [typeProductCode_SubMaster, setTypeProductCode_SubMaster] =
    useState("");
  const [typeProduct_MasterId, setTypeProduct_MasterId] = useState("");
  const data = {
    metadata: {
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userName: "string",
      userNameforC: "string",
    },
    nameTypeProduct_SubMaster,
    typeProductCode_SubMaster,
    status: 0,
    typeProduct_MasterId,
  };
  console.log(subMasterProduct);
  useEffect(() => {
    Get_All_MasterProduct(setMasterProduct);

    Get_All_SubMasterProduct(setSubMasterProduct);
  }, [isModal]);
  return (
    <div className=" w-full min-h-screen flex items-center">
      <AdminMenu />
      {isModal && (
        <AddThingsModal
          title="زیرگروه"
          submitFn={() => Create_TypeProduct_SubMaster(data, setIsModal)}
          closeModal={() => setIsModal(false)}
        >
          <input
            onChange={(e) => setNameTypeProduct_SubMaster(e.target.value)}
            className=" w-full p-3 outline-none border rounded"
            placeholder="عنوان زیرگروه"
          />
          <input
            onChange={(e) => setTypeProductCode_SubMaster(e.target.value)}
            className=" w-full p-3 outline-none border rounded"
            placeholder="کد"
          />
          <div className=" flex items-center w-full gap-2">
            <h5>تخصیص به سرگروه:</h5>
            <select
              onChange={(e) => setTypeProduct_MasterId(e.target.value)}
              className=" border"
            >
              {masterProduct.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.nameTypeProduct_Master}
                  </option>
                );
              })}
            </select>
          </div>
        </AddThingsModal>
      )}
      <div className=" w-5/6 flex p-5 justify-center h-screen">
        <div className=" w-full rounded p-2 bg-white shadow-xl h-full flex flex-col">
          <div className=" w-full flex flex-col gap-5 items-start">
            <h5 className=" text-xl font-semibold">زیرگروه</h5>
            <div className=" flex items-center w-full justify-start gap-5">
              <label className=" w-1/5 px-2 p-2 border rounded-sm flex items-center bg-white">
                <CiSearch className=" text-xl text-slate-500" />

                <input
                  className=" outline-none"
                  placeholder="جستجو در زیرگروه ها"
                />
              </label>
              <button
                onClick={() => setIsModal(true)}
                className=" p-2 flex justify-center items-center gap-2 rounded-sm bg-teal-900 text-white"
              >
                افزودن
                <FaPlus className=" text-white text-xl" />
              </button>
            </div>
            <div className=" w-full flex justify-center items-center">
              <div className=" border w-[90%] flex flex-col">
                <div className=" py-4 w-full bg-teal-900 text-white flex items-center justify-start">
                  <h5 className=" text-center w-1/4">عنوان زیرگروه</h5>
                  <h5 className=" text-center w-1/4">سرگروه</h5>
                  {/* <h5 className=" text-center w-1/5">دسته بندی</h5> */}
                  <h5 className=" text-center w-1/4">کد</h5>
                  <h5 className=" text-center w-1/4">عملیات</h5>
                </div>
                <div className="  w-full flex items-center flex-col">
                  {subMasterProduct.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="w-full py-2 border-b last:border-b-0 bg-white  flex items-center justify-start"
                      >
                        <h5 className=" text-center w-1/4">
                          {item.nameTypeProduct_SubMaster}
                        </h5>
                        <h5 className=" text-center w-1/4">
                          {item.typeProduct_Master_name}
                        </h5>
                        <h5 className=" text-center w-1/4">
                          {item.typeProductCode_SubMaster}
                        </h5>
                        <h5 className=" flex justify-center gap-5 items-center w-1/4">
                          <FaEdit className=" text-xl text-teal-600 hover:text-green-600" />
                          <MdDeleteForever className=" text-teal-600 text-xl hover:text-red-600" />
                          <MdOutlineRemoveRedEye className=" text-teal-600 text-xl hover:text-blue-500" />
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

export default SubMasterProduct;
