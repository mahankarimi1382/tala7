import { FaCheck } from "react-icons/fa";

function EditThingsModal(props) {
  return (
    <div className=" w-full fixed top-0 right-0 flex justify-center items-center h-screen bg-black bg-opacity-50">
      <div className=" relative bg-white rounded p-4 w-1/3 h-[60%] items-center flex flex-col gap-5">
        <div className=" w-full">
          <h5 className="  text-lg">ویرایش {props.title}</h5>
        </div>
        {props.children}
        <div className=" absolute bottom-5 mx-auto flex w-[90%] justify-between">
          <button
            onClick={props.submitFn}
            className="bg-green-500 text-white  px-4 py-2 rounded flex items-center"
          >
            <FaCheck className="mr-2" /> ویرایش
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

export default EditThingsModal;
