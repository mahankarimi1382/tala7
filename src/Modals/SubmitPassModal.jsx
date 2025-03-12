import { AiOutlineClose } from "react-icons/ai";
import { signup } from "../apicalling/ApiCalling";

function SubmitPassModal({ closeModal }) {
  return (
    <div className="fixed inset-0 z-[99999] flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">رمز عبور </h2>
          <button
            onClick={closeModal}
            className="text-gray-600 hover:text-black"
            aria-label="Close"
          >
            <AiOutlineClose size={20} />
          </button>
        </div>

        <form>
          <label className="block text-sm font-medium text-gray-700">
            رمز عبور خود را وارد کنید:
          </label>
          <input
            dir="rtl"
            type="password"
            className="mt-1 border outline-none block w-full rounded-md border-gray-300 shadow-sm p-2"
            required
          />

          <div className="mt-6 flex justify-end">
            <button
              onClick={signup}
              type="submit"
              className="rounded-md py-2 px-4 font-medium text-white shadow-sm bg-[#caa984] hover:bg-[#093937]"
            >
              ثبت
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SubmitPassModal;
