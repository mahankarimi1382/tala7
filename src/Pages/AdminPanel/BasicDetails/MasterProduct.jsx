import { useEffect, useState } from "react";
import AdminMenu from "../AdminMenu";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import {
  Create_TypeProduct_Master,
  Edit_TypeProduct_Master,
  Get_All_MasterProduct,
} from "../../../apicalling/ApiCalling";
// import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import AddThingsModal from "./AddThingsModal";
import EditThingsModal from "./EditThingsModal";
import DeletingModal from "./DeletingModal";

function MasterProduct() {
  const [isModal, setIsModal] = useState(false);
  const [isEditingModal, setIsEsitingModal] = useState(false);
  const [isDeletingModal, setIsDeletingModal] = useState(false);

  const [nameTypeProduct_Master, setNameTypeProduct_Master] = useState("");
  const [masterProduct, setMasterProduct] = useState([]);
  const [typeProductCode_Master, setTypeProductCode_Master] = useState("");
  const [selectedId, setSelectedId] = useState(0);
  const data = {
    metadata: {
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userName: "string",
      userNameforC: "string",
    },
    nameTypeProduct_Master,
    typeProductCode_Master,
    status: 0,
  };
  console.log(masterProduct);
  useEffect(() => {
    Get_All_MasterProduct(setMasterProduct);
  }, [isModal, isEditingModal]);
  return (
    <div className=" w-full min-h-screen flex items-center">
      <AdminMenu />
      {isModal && (
        <AddThingsModal
          title="سرگروه"
          submitFn={() => Create_TypeProduct_Master(data, setIsModal)}
          closeModal={() => setIsModal(false)}
        >
          <input
            onChange={(e) => setNameTypeProduct_Master(e.target.value)}
            className=" w-full p-3 outline-none border rounded"
            placeholder="عنوان سرگروه"
          />
          <input
            onChange={(e) => setTypeProductCode_Master(e.target.value)}
            className=" w-full p-3 outline-none border rounded"
            placeholder="کد"
          />
        </AddThingsModal>
      )}
      {isEditingModal && (
        <EditThingsModal
          title="ویرایش سرگروه"
          submitFn={() =>
            Edit_TypeProduct_Master(data, setIsEsitingModal, selectedId)
          }
          closeModal={() => setIsEsitingModal(false)}
        >
          <input
            value={nameTypeProduct_Master}
            onChange={(e) => setNameTypeProduct_Master(e.target.value)}
            className=" w-full p-3 outline-none border rounded"
            placeholder="عنوان سرگروه"
          />
          <input
            value={typeProductCode_Master}
            onChange={(e) => setTypeProductCode_Master(e.target.value)}
            className=" w-full p-3 outline-none border rounded"
            placeholder="کد"
          />
        </EditThingsModal>
      )}
      {isDeletingModal && (
        <DeletingModal
          title={nameTypeProduct_Master}
          closeModal={() => setIsDeletingModal(false)}
        />
      )}
      <div className=" w-5/6 flex p-5 justify-center h-screen">
        <div className=" w-full rounded p-2 bg-white shadow-xl h-full flex flex-col">
          <div className=" w-full flex flex-col gap-5 items-start">
            <h5 className=" text-xl font-semibold">سرگروه</h5>
            <div className=" flex items-center w-full justify-start gap-5">
              <label className=" w-1/5 px-2 p-2 border rounded-sm flex items-center bg-white">
                <CiSearch className=" text-xl text-slate-500" />

                <input
                  className=" outline-none"
                  placeholder="جستجو در سرگروه ها"
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
                  <h5 className=" text-center w-1/4">عنوان سرگروه</h5>
                  <h5 className=" text-center w-1/4">زیرگروه ها</h5>
                  <h5 className=" text-center w-1/4">کد </h5>
                  <h5 className=" text-center w-1/4">عملیات</h5>
                </div>
                <div className="  w-full flex items-center flex-col">
                  {masterProduct.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="w-full py-2 border-b last:border-b-0 bg-white  flex items-center justify-start"
                      >
                        <h5 className=" text-center w-1/4">
                          {item.nameTypeProduct_Master}
                        </h5>
                        <h5 className=" text-center w-1/4">
                          {item.nameTypeProduct_SubMaster}
                        </h5>
                        <h5 className=" text-center w-1/4">
                          {item.typeProductCode_Master}
                        </h5>

                        <h5 className=" flex justify-center gap-5 items-center w-1/4">
                          <FaEdit
                            onClick={() => {
                              setTypeProductCode_Master(
                                item.typeProductCode_Master
                              );
                              setNameTypeProduct_Master(
                                item.nameTypeProduct_Master
                              );
                              setSelectedId(item.id);
                              setIsEsitingModal(true);
                            }}
                            className=" text-xl text-teal-600 hover:text-green-600"
                          />
                          <MdDeleteForever
                            onClick={() => {
                              setIsDeletingModal(true);
                              setNameTypeProduct_Master(
                                item.nameTypeProduct_Master
                              );
                            }}
                            className=" text-teal-600 text-xl hover:text-red-600"
                          />
                          {/* <MdOutlineRemoveRedEye className=" text-teal-600 text-xl hover:text-blue-500" /> */}
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

export default MasterProduct;
