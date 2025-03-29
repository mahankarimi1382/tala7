import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

function DeletingModal(props) {
  return (
    <div className=" w-full fixed top-0 right-0 flex justify-center items-center h-screen bg-black bg-opacity-50">
      <div className=" relative bg-white rounded p-4 w-1/3 h-[20%] items-center flex flex-col gap-5">
        <div className=" text-center w-full">
          <h5 className="  text-lg">
            {" "}
            آیا از حذف {props.title} از لیست اطمینان دارید؟
          </h5>
        </div>
        <div className=" absolute bottom-5 mx-auto flex w-[90%] justify-between">
          <button
            onClick={props.submitFn}
            className="bg-red-500 text-white  px-4 py-2 rounded flex items-center"
          >
            <RxCross2 className="mr-2" /> حذف
          </button>
          <button
            onClick={props.closeModal}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletingModal;
