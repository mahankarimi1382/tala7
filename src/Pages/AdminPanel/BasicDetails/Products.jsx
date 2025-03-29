import { useEffect, useState } from "react";
import AdminMenu from "../AdminMenu";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import {
  Create_Product,
  Get_All_Product,
  Get_All_SubMasterProduct,
} from "../../../apicalling/ApiCalling";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import AddThingsModal from "./AddThingsModal";
import EditThingsModal from "./EditThingsModal";
import DeletingModal from "./DeletingModal";

function Products() {
  const [subMasterProduct, setSubMasterProduct] = useState([]);
  const [product_Name, setProduct_Name] = useState("");
  const [products, setProducts] = useState([]);
  const [product_Description, setProduct_Description] = useState("");
  const [product_Code, setProduct_Code] = useState("");
  const [typeProduct_SubMasterId, setTypeProduct_SubMasterId] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [selectedProductID, setSelectedProductID] = useState({});
  const [isDeletingModal, setIsDeletingModal] = useState(false);

  console.log(selectedProductID);
  const data = {
    metadata: {
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userName: "string",
      userNameforC: "string",
    },
    product_Name,
    product_Description,
    product_Code,
    saleStatus: 0,
    counting_Unit_Type: 0,
    price_Calculation_Method: 0,
    type_sell: 0,
    typeProduct_SubMasterId,
  };
  console.log(products);
  useEffect(() => {
    Get_All_Product(setProducts);
    Get_All_SubMasterProduct(setSubMasterProduct);
  }, [isModal]);
  return (
    <div className=" w-full min-h-screen flex items-center">
      <AdminMenu />
      {isModal && (
        <AddThingsModal
          title="محصولات"
          submitFn={() => Create_Product(data, setIsModal)}
          closeModal={() => setIsModal(false)}
        >
          <input
            onChange={(e) => setProduct_Name(e.target.value)}
            className=" w-full p-3 outline-none border rounded"
            placeholder="عنوان محصول"
          />
          <input
            onChange={(e) => setProduct_Description(e.target.value)}
            className=" w-full p-3 outline-none border rounded"
            placeholder="توضیحات"
          />
          <input
            onChange={(e) => setProduct_Code(e.target.value)}
            className=" w-full p-3 outline-none border rounded"
            placeholder="کد محصول"
          />
          <div className=" flex items-center w-full gap-2">
            <h5>تخصیص به زیرگروه:</h5>
            <select
              onChange={(e) => setTypeProduct_SubMasterId(e.target.value)}
              className=" border"
            >
              <option></option>

              {subMasterProduct.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.nameTypeProduct_SubMaster}
                  </option>
                );
              })}
            </select>
          </div>
        </AddThingsModal>
      )}
      {isEditModal && (
        <EditThingsModal
          title="محصولات"
          submitFn={() => Create_Product(data, setIsModal)}
          closeModal={() => setIsEditModal(false)}
        >
          <input
            value={product_Name}
            onChange={(e) => setProduct_Name(e.target.value)}
            className=" w-full p-3 outline-none border rounded"
            placeholder="عنوان محصول"
          />
          <input
            value={product_Description}
            onChange={(e) => setProduct_Description(e.target.value)}
            className=" w-full p-3 outline-none border rounded"
            placeholder="توضیحات"
          />
          <input
            value={product_Code}
            onChange={(e) => setProduct_Code(e.target.value)}
            className=" w-full p-3 outline-none border rounded"
            placeholder="کد محصول"
          />
          <div className=" flex items-center w-full gap-2">
            <h5>تخصیص به زیرگروه:</h5>
            <select
              value={typeProduct_SubMasterId}
              onChange={(e) => setTypeProduct_SubMasterId(e.target.value)}
              className=" border"
            >
              <option></option>
              {subMasterProduct.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.nameTypeProduct_SubMaster}
                  </option>
                );
              })}
            </select>
          </div>
        </EditThingsModal>
      )}
      {isDeletingModal && (
        <DeletingModal
          title={product_Name}
          closeModal={() => setIsDeletingModal(false)}
        />
      )}
      <div className=" w-5/6 flex p-5 justify-center h-screen">
        <div className=" w-full rounded p-2 bg-white shadow-xl h-full flex flex-col">
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
                  <h5 className=" text-center w-1/5">عنوان محصول</h5>
                  <h5 className=" text-center w-1/5">فروشنده</h5>
                  <h5 className=" text-center w-1/5">دسته بندی</h5>
                  <h5 className=" text-center w-1/5">کد محصول</h5>
                  <h5 className=" text-center w-1/5">عملیات</h5>
                </div>
                <div className="  w-full flex items-center flex-col">
                  {products.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="w-full border-b last:border-b-0 py-2 bg-white  flex items-center justify-start"
                      >
                        <h5 className=" text-center w-1/5">
                          {item.product_Name}
                        </h5>
                        <h5 className=" text-center w-1/5"></h5>
                        <h5 className=" text-center w-1/5">
                          {item.typeProduct_SubMaster_name}
                        </h5>
                        <h5 className=" text-center w-1/5">
                          {item.product_Code}
                        </h5>
                        <h5 className=" flex justify-center gap-5 items-center w-1/5">
                          <FaEdit
                            onClick={() => {
                              console.log(item);
                              setSelectedProductID(item.id);
                              setProduct_Name(item.product_Name);
                              setProduct_Description(item.product_Description);
                              setProduct_Code(item.product_Code);
                              setTypeProduct_SubMasterId(
                                item.typeProduct_SubMasterId
                              );
                              setIsEditModal(true);
                            }}
                            className=" text-xl text-teal-600 hover:text-green-600"
                          />
                          <MdDeleteForever
                            onClick={() => {
                              setIsDeletingModal(true);
                              setProduct_Name(item.product_Name);
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

export default Products;
