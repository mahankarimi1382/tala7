import { useEffect, useState } from "react";
import AdminMenu from "../AdminMenu";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import {
  Create_Product,
  CreateNews,
  Get_All_News,
} from "../../../apicalling/ApiCalling";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import AddThingsModal from "../BasicDetails/AddThingsModal";
import moment from "moment-jalaali";

function News() {
  moment.loadPersian({ dialect: "persian-modern" });

  // به‌دست آوردن تاریخ امروز
  const today = moment().format("jYYYY/jMM/jDD");
  console.log(today);

  const [isModal, setIsModal] = useState(false);
  const [news, setNews] = useState([]);
  const [title, setTitle] = useState("");
  const data = {
    metadata: {
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userName: "string",
      userNameforC: "string",
    },
    title,
    lead: title,
    content_news: title,
    date_publish: today,
  };
  console.log(news);

  useEffect(() => {
    Get_All_News(setNews);
  }, [isModal]);
  return (
    <div className=" w-full min-h-screen flex items-center">
      <AdminMenu />
      {isModal && (
        <AddThingsModal
          title="خبر"
          submitFn={() => CreateNews(data, setIsModal)}
          closeModal={() => setIsModal(false)}
        >
          <input
            onChange={(e) => setTitle(e.target.value)}
            className=" w-full p-3 outline-none border rounded"
            placeholder="عنوان خبر"
          />
        </AddThingsModal>
      )}
      <div className=" w-full lg:w-5/6 flex p-5 justify-center h-screen">
        <div className=" w-full rounded p-2 bg-white shadow-xl h-full flex flex-col">
          <div className=" w-full flex flex-col gap-5 items-start">
            <h5 className=" text-xl font-semibold">خبر</h5>
            <div className=" flex items-center w-full justify-start gap-5">
              <label className=" w-1/5 px-2 p-2 border rounded-sm flex items-center bg-white">
                <CiSearch className=" text-xl text-slate-500" />

                <input className=" outline-none" placeholder="جستجو در خبر" />
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
                  <h5 className=" text-center w-2/4">متن خبر</h5>
                  <h5 className=" text-center w-1/4">تاریخ خبر</h5>

                  <h5 className=" text-center w-1/4">عملیات</h5>
                </div>
                <div className="  w-full flex items-center flex-col">
                  {news.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="w-full border-b last:border-b-0 py-2 bg-white  flex items-center justify-start"
                      >
                        <h5 className=" text-center w-2/4">{item.title}</h5>
                        <h5 className=" text-center w-1/4">
                          {item.date_publish}
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

export default News;
