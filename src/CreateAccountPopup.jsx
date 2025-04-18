import { useState, useRef } from "react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import SubmitPassModal from "./Modals/SubmitPassModal";

const CreateAccountPopup = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCodePopupOpen, setIsCodePopupOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
  ]);
  const [codeError, setCodeError] = useState("");
  const [isPassModal, setIsPassModal] = useState(false);
  // Refs for inputs to manage focus
  const inputsRef = useRef([]);

  // Validate phone number: Must be 11 digits and start with "09"
  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);

    const isValid = /^(09)\d{9}$/.test(value);

    if (!isValid && value.length > 0) {
      setPhoneNumberError("شماره تلفن باید ۱۱ رقم باشد و با ۰۹ شروع شود.");
    } else {
      setPhoneNumberError("");
    }
  };

  // Handle form submission (Phone Number)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phoneNumberError || !phoneNumber) return;
    setIsPassModal(true);

    // try {
    //   await axios.post("https://jsonplaceholder.typicode.com/posts", {
    //     phone: phoneNumber,
    //   });

    //   setSuccessMessage("✅ شماره تلفن با موفقیت ارسال شد!");
    //   setPhoneNumber(""); // Clear input
    //   setIsCodePopupOpen(true); // Open verification popup
    // } catch (error) {
    //   setErrorMessage("❌ خطا در ارسال اطلاعات. لطفاً دوباره امتحان کنید.");
    // } finally {
    //   setIsLoading(false);
    // }
  };

  // Handle verification code input
  const handleCodeChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d$/.test(value) && value !== "") return; // Only allow digits

    const updatedCode = [...verificationCode];
    updatedCode[index] = value;
    setVerificationCode(updatedCode);

    // Move to next input automatically
    if (value && index < 4) {
      inputsRef.current[index + 1].focus();
    }

    // Handle backspace (move focus to the previous input field)
    if (value === "" && index > 0) {
      inputsRef.current[index - 1].focus();
    }

    // Check if all 5 digits are filled in, then submit
    if (updatedCode.every((digit) => digit !== "")) {
      handleVerifyCode(updatedCode.join(""));
    }
  };

  // Send verification code to API
  const handleVerifyCode = async (code) => {
    setIsLoading(true);
    setCodeError("");

    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", { code });

      setSuccessMessage("✅ کد تایید شد! حساب شما ایجاد شد.");
      setTimeout(onClose, 1000); // Close popup after success
    } catch (error) {
      setCodeError("❌ کد وارد شده نامعتبر است. لطفاً دوباره امتحان کنید.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[99999] flex justify-center items-center">
      {/* Phone Number Popup */}
      {isPassModal && (
        <SubmitPassModal
          onClose={onClose}
          phoneNumber={phoneNumber}
          closeModal={() => setIsPassModal(false)}
        />
      )}
      {!isCodePopupOpen && (
        <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">ایجاد حساب کاربری</h2>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-black"
              aria-label="Close"
            >
              <AiOutlineClose size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <label className="block text-sm font-medium text-gray-700">
              شماره تلفن (۱۱ رقم با ۰۹ شروع شود):
            </label>
            <input
              dir="rtl"
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className="mt-1 border outline-none block w-full rounded-md border-gray-300 shadow-sm p-2"
              required
            />
            {phoneNumberError && (
              <p className="text-red-600 mt-2 text-sm">{phoneNumberError}</p>
            )}
            {successMessage && (
              <p className="text-green-600 mt-2 text-sm">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-red-600 mt-2 text-sm">{errorMessage}</p>
            )}

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className={`rounded-md py-2 px-4 font-medium text-white shadow-sm ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#caa984] hover:bg-[#093937]"
                }`}
                disabled={!!phoneNumberError || isLoading}
              >
                {isLoading ? "در حال ارسال..." : "ثبت "}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Verification Code Popup */}
      {isCodePopupOpen && (
        <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">تایید کد</h2>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-black"
            >
              <AiOutlineClose size={20} />
            </button>
          </div>

          <label className="block text-sm font-medium text-gray-700">
            لطفاً کد ۵ رقمی ارسال‌شده را وارد کنید:
          </label>
          <div dir="ltr" className="flex justify-between mt-4">
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleCodeChange(e, index)}
                maxLength="1"
                className="w-12 h-12 text-center text-lg border rounded-md"
                ref={(el) => (inputsRef.current[index] = el)}
              />
            ))}
          </div>

          {codeError && (
            <p className="text-red-600 mt-2 text-sm">{codeError}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CreateAccountPopup;
