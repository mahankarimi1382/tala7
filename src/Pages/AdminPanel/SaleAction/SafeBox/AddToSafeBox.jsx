import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import {
  Create_DocStore,
  Delete_DocStore,
  Get_All_Product,
  Get_All_Sellers,
  Get_Products_InStore,
} from "../../../../apicalling/ApiCalling";

import AdminMenu from "../../AdminMenu";
import AddThingsModal from "../../BasicDetails/AddThingsModal";
import { Pagination } from "@mui/material";
import Base64Uploader from "../../../../Components/utils/Base64Uploader";
import { Eror } from "../../../../Components/ToastAlerts";
import DeletingModal from "../../BasicDetails/DeletingModal";

function AddToSafeBox() {
  const [logoImage1, setLogoImage1] = useState("");
  const [logoImage2, setLogoImage2] = useState("");
  const [productId, setProductId] = useState(0);
  const [wieght_Gold, setWieght_Gold] = useState(0);
  const [wieght_Stone, setWieght_Stone] = useState(0);
  const [stone_Sale_Price, setStone_Sale_Price] = useState(0);
  const [stone_Sale_Bonakdar_price, setStone_Sale_Bonakdar_price] = useState(0);
  const [sellerProfileId, setSellerProfileId] = useState(0);
  const [wage_Percent, setWage_Percent] = useState(0);
  const [wage_Bonakdar_Percent, setWage_Bonakdar_Percent] = useState(0);
  const [benefit_Percent, setBenefit_Percent] = useState(0);
  const [discount_Benefit_Percent, setDiscount_Benefit_Percent] = useState(0);
  const [isAdult, setIsAdult] = useState(false);
  const [isBaby, setIsBaby] = useState(false);
  const [isWoman, setIsWoman] = useState(false);
  const [isMan, setIsMan] = useState(false);
  const [freeShipment, setFreeShipment] = useState(false);
  const [specialSale, setSpecialSale] = useState(false);
  const [specialSaleDate, setSpecialSaleDate] = useState(0);
  const [product_Size, setProduct_Size] = useState(0);
  const [gold_Color, setGold_Color] = useState(0);
  const [gold_Model, setGold_Model] = useState(0);
  const [gold_Made, setGold_Made] = useState(0);
  const [isInstallment, setIsInstallment] = useState(false);
  const [desc, setDesc] = useState("");
  const [placeStatus, setPlaceStatus] = useState(0);
  const [pic1, setPic1] = useState("");
  const [pic2, setPic2] = useState("");
  const [pic3, setPic3] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState("");
  const [isModal, setIsModal] = useState(false);

  const [products, setProducts] = useState([]);
  const [inVitrin, setInVitrin] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [selectedProductID, setSelectedProductID] = useState(0);
  const [product_Name, setProduct_Name] = useState("");
  console.log(inVitrin);
  const [isDeletingModal, setIsDeletingModal] = useState(false);
  console.log(sellers);
  console.log(inVitrin);
  const [isVitrin, setIsVitrin] = useState(false);
  console.log(products);
  useEffect(() => {
    Get_All_Sellers(setSellers);
    Get_Products_InStore(setInVitrin, currentPage);

    Get_All_Product(setProducts);
  }, [currentPage, isVitrin, isDeletingModal]);
  const numbersTo20 = [];
  for (let i = 1; i <= 20; i += 0.5) {
    numbersTo20.push(i);
  }
  const numbersTo5 = [];
  for (let i = 1; i <= 5; i += 0.5) {
    numbersTo5.push(i);
  }
  const numbersTo25 = [];
  for (let i = 1; i <= 25; i += 0.5) {
    numbersTo25.push(i);
  }
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    console.log("Selected Page:", value);
  };

  const data = {
    metadata: {
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userName: "string",
      userNameforC: "string",
    },

    productId,
    wieght_Gold,
    wieght_Stone,
    stone_Sale_Price,
    stone_Sale_Bonakdar_price,
    sellerProfileId,
    wage_Percent,
    wage_Bonakdar_Percent,
    benefit_Percent,
    discount_Benefit_Percent,
    isAdult,
    isBaby,
    isWoman,
    isMan,
    freeShipment,
    specialSale: discount_Benefit_Percent ? true : false,
    specialSaleDate,
    product_Size: Number(product_Size),
    gold_Color: Number(gold_Color),
    gold_Model: Number(gold_Model),
    gold_Made: Number(gold_Made),
    isInstallment,
    desc,
    placeStatus,
    logoImage1,
    logoImage2,
    ufcr: {
      idList: ["3fa85f64-5717-4562-b3fc-2c963f66afa6"],
    },
  };

  return (
    <div className=" w-full min-h-screen flex items-center">
      <AdminMenu />
      {isDeletingModal && (
        <DeletingModal
          id={selectedProductID}
          DeletingFn={Delete_DocStore}
          title={product_Name}
          closeModal={() => setIsDeletingModal(false)}
        />
      )}
      {isModal && (
        <AddThingsModal
          // submitFn={() => Create_Seller(data, setIsModal)}
          title="به گاوصندوق"
          closeModal={() => setIsModal(false)}
          submitFn={() => {
            if (!sellerProfileId) {
              Eror("انتخاب فروشنده الزامیست");
            } else if (!logoImage2 && !logoImage1) {
              Eror("وارد کردن عکس های محصول الزامیست");
            } else {
              Create_DocStore(data, setIsModal);
            }
          }}
        >
          <div className=" h-[290px] flex flex-col w-full gap-2 overflow-auto">
            <h2>وزن طلا به گرم:</h2>
            <input
              className=" w-full p-3 outline-none border rounded"
              placeholder="وزن طلا به گرم"
              onChange={(e) => setWieght_Gold(e.target.value)}
            />
            <h2>وزن سنگ به گرم:</h2>

            <input
              className=" w-full p-3 outline-none border rounded"
              placeholder="وزن سنگ به گرم"
              onChange={(e) => setWieght_Stone(e.target.value)}
            />
            <h2>قیمت فروش سنگ:</h2>

            <input
              className=" w-full p-3 outline-none border rounded"
              placeholder="قیمت فروش سنگ"
              onChange={(e) => setStone_Sale_Price(e.target.value)}
            />
            <h2>سهم فروشنده از سنگ:</h2>

            <input
              className=" w-full p-3 outline-none border rounded"
              placeholder="سهم فروشنده از سنگ"
              onChange={(e) => setStone_Sale_Bonakdar_price(e.target.value)}
            />
            <h2>انتخاب فروشنده:</h2>

            <select
              onChange={(e) => {
                const selectedWeight =
                  e.target.options[e.target.selectedIndex].getAttribute(
                    "data-weight"
                  );
                setWage_Bonakdar_Percent(selectedWeight);
                setSellerProfileId(e.target.value);
              }}
              className=" w-full p-3 outline-none border rounded"
            >
              <option value={null}>انتخاب فروشنده</option>
              {sellers.map((item) => {
                return (
                  <option
                    data-weight={item.share_Benefit_Percent}
                    key={item.id}
                    value={item.id}
                  >
                    {item.sellerName} {item.sellerFamily}
                  </option>
                );
              })}
            </select>
            <h2>نرخ کارمرزد:</h2>

            <select
              className=" w-full p-3 outline-none border rounded"
              onChange={(e) => setWage_Percent(e.target.value)}
            >
              <option>نرخ کارمرزد</option>
              {numbersTo20.map((item) => {
                return <option key={item.id}>{item}</option>;
              })}
            </select>
            <h2>نرخ کارمرزد فزوشنده:</h2>

            <select
              value={wage_Bonakdar_Percent}
              className=" w-full p-3 outline-none border rounded"
              onChange={(e) => setWage_Bonakdar_Percent(e.target.value)}
            >
              <option>نرخ کارمرزد فزوشنده</option>
              {numbersTo5.map((item) => {
                return <option key={item.id}>{item}</option>;
              })}
            </select>
            <h2>نرخ سود:</h2>

            <select
              className=" w-full p-3 outline-none border rounded"
              onChange={(e) => setBenefit_Percent(e.target.value)}
            >
              <option>نرخ سود</option>
              {numbersTo25.map((item) => {
                return <option key={item.id}>{item}</option>;
              })}
            </select>
            <h2>درصد تخفیف:</h2>

            <input
              onChange={(e) => setDiscount_Benefit_Percent(e.target.value)}
              className=" w-full p-3 outline-none border rounded"
              placeholder="درصد تخفیف"
            />
            <h2>سایز محصول:</h2>

            <select
              onChange={(e) => setProduct_Size(e.target.value)}
              className=" w-full p-3 outline-none border rounded"
            >
              <option value={null}>سایز محصول</option>
              <option value={1}>small</option>
              <option value={2}>medium</option>
              <option value={3}>large</option>
              <option value={4}>free size</option>
            </select>
            <h2>رنگ طلا:</h2>

            <select
              onChange={(e) => setGold_Color(e.target.value)}
              className=" w-full p-3 outline-none border rounded"
            >
              <option value={null}>رنگ طلا</option>
              <option value={1}>طلایی</option>
              <option value={2}>سفید</option>
              <option value={3}>رزگلد</option>
              <option value={4}>شامپاینی</option>
            </select>
            <h2>مدل طلا:</h2>

            <select
              onChange={(e) => setGold_Model(e.target.value)}
              className=" w-full p-3 outline-none border rounded"
            >
              <option
                onChange={(e) => setGold_Model(e.target.value)}
                value={null}
              >
                مدل طلا
              </option>
              <option value={1}>کلاسیک</option>
              <option value={2}>اسپرت</option>
            </select>
            <h2>کشور سازنده:</h2>

            <select
              onChange={(e) => setGold_Made(e.target.value)}
              className=" w-full p-3 outline-none border rounded"
            >
              <option value={null}>کشور سازنده</option>
              <option value={1}>ایران</option>
              <option value={2}>ایتالیا</option>
            </select>
            <div className=" w-full flex flex-wrap gap-5">
              <label className=" flex items-center gap-2">
                <input
                  onChange={(e) => setIsAdult(e.target.checked)}
                  type="checkbox"
                />
                بزرگسال
              </label>
              <label className=" flex items-center gap-2">
                <input
                  onChange={(e) => setIsBaby(e.target.checked)}
                  type="checkbox"
                />
                بچگانه
              </label>
              <label className=" flex items-center gap-2">
                <input
                  onChange={(e) => setIsWoman(e.target.checked)}
                  type="checkbox"
                />
                زنانه
              </label>
              <label className=" flex items-center gap-2">
                <input
                  onChange={(e) => setIsMan(e.target.checked)}
                  type="checkbox"
                />
                مردانه
              </label>
              <label className=" flex items-center gap-2">
                <input type="checkbox" />
                مردانه
              </label>

              <label className=" flex items-center gap-2">
                <input
                  onChange={(e) => setIsInstallment(e.target.checked)}
                  type="checkbox"
                />
                امکان خرید قسطی
              </label>
              <label className=" flex items-center gap-2">
                <input
                  onChange={(e) => setFreeShipment(e.target.checked)}
                  type="checkbox"
                />
                ارسال رایگان
              </label>
            </div>
            <Base64Uploader
              image={logoImage1}
              setImage={setLogoImage1}
              title="عکس اول"
            />
            <Base64Uploader
              image={logoImage2}
              setImage={setLogoImage2}
              title="عکس دوم"
            />
            <h2>توضیحات:</h2>

            <input
              onChange={(e) => setDesc(e.target.value)}
              className=" w-full p-3 outline-none border rounded"
              placeholder="توضیحات"
            />
          </div>

          {/* <div className=" flex items-center w-full gap-2">
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
          </div> */}
        </AddThingsModal>
      )}
      <div className=" w-full lg:w-5/6 flex p-5 justify-center h-screen">
        <div className=" w-full rounded p-2 bg-white shadow-xl h-full flex flex-col">
          <div className=" w-full flex justify-center gap-10">
            <button
              onClick={() => setIsVitrin(false)}
              className={!isVitrin && "border-b-2 border-teal-500"}
            >
              محصولات
            </button>
            <button
              onClick={() => setIsVitrin(true)}
              className={isVitrin && "border-b-2 border-teal-500"}
            >
              گاوصندوق
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
                            <button
                              onClick={() => {
                                setProductId(item.id);
                                setIsModal(true);
                                setLogoImage1("");
                                setLogoImage2("");
                              }}
                              className=" p-2 flex justify-center items-center gap-2 rounded-sm bg-teal-500 text-white"
                            >
                              افزودن به گاوصندوق
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
              <h5 className=" text-xl font-semibold">گاوصندوق</h5>
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
                <div className=" border gap-2 w-[90%] flex flex-col">
                  <div className=" py-4 w-full bg-teal-900 text-white flex items-center justify-start">
                    <h5 className=" text-center w-1/5">عنوان محصول</h5>
                    <h5 className=" text-center w-2/5">توضیحات</h5>
                    <h5 className=" text-center w-1/5">کد محصول</h5>
                    <h5 className=" text-center w-1/5">عملیات</h5>
                  </div>
                  <div className="  h-[400px] overflow-auto  w-full flex items-center flex-col">
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
                            {/* {item.product_Description} */}
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
                              حذف از گاوصندوق
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
          )}
        </div>
      </div>
    </div>
  );
}

export default AddToSafeBox;
