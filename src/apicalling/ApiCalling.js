import axios from "axios";
import { Eror, success } from "../Components/ToastAlerts";

export const signup = (data, closeModal, onClose) => {
  console.log(data);
  axios
    .post("http://tala7.com:44/api/Applicant/register", data)
    .then((res) => {
      console.log(res);
      success("ثبت نام انجام شد");
      closeModal();
      onClose();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchNews = async (setLoading, setError, apiUrl, setNewsItems) => {
  setLoading(true);
  setError(null);

  try {
    const response = await axios.get(apiUrl);
    const data = response.data; // API returns an array of objects

    if (Array.isArray(data)) {
      setNewsItems(data.map((item) => item.lead)); // Extract "lead" field from each object
    } else {
      setNewsItems([]); // If response is unexpected, set empty list
    }
  } catch (error) {
    console.error("Error fetching news:", error);
    setError("Failed to fetch news. Please try again later.");
  } finally {
    setLoading(false);
  }
};

export const signin = (data, setToken) => {
  console.log(data);
  axios
    .post("http://tala7.com:44/api/Applicant/login", {
      metadata: {
        userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        userName: "string",
        userNameforC: "string",
      },
      mobile: data.username,
      password: data.password,
    })
    .then((res) => {
      setToken(res.data.token);
      success("خوش امدید");
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Get_All_Product = (setProducts) => {
  axios
    .post("http://tala7.com:44/api/Product/Get_All_Product", {
      metadata: {
        userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        userName: "string",
        userNameforC: "string",
      },
      pagenumber: 1,
      pagesize: 10,
    })
    .then((res) => {
      setProducts(res.data.response_List);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Get_All_MasterProduct = (setMasterProduct) => {
  axios
    .post("http://tala7.com:44/api/Product/Get_All_TypeMasterProduct", {
      metadata: {
        userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        userName: "string",
        userNameforC: "string",
      },
      pagenumber: 1,
      pagesize: 10,
    })
    .then((res) => {
      setMasterProduct(res.data.response_List);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Get_All_SubMasterProduct = (setSubMasterProduct) => {
  axios
    .post("http://tala7.com:44/api/Product/Get_All_TypeSubMasterProduct", {
      metadata: {
        userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        userName: "string",
        userNameforC: "string",
      },
      pagenumber: 1,
      pagesize: 10,
    })
    .then((res) => {
      setSubMasterProduct(res.data.response_List);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Create_TypeProduct_Master = (data, setIsModal) => {
  console.log(data);
  axios
    .post("http://tala7.com:44/api/Product/Create_TypeProduct_Master", data)
    .then((res) => {
      setIsModal(false);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      Eror("خطا");
    });
};

export const Create_TypeProduct_SubMaster = (data, setIsModal) => {
  console.log(data);
  axios
    .post("http://tala7.com:44/api/Product/Create_TypeProduct_SubMaster", data)
    .then((res) => {
      setIsModal(false);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      Eror("خطا");
    });
};

export const Create_Product = (data, setIsModal) => {
  console.log(data);
  axios
    .post("http://tala7.com:44/api/Product/Create_Product", data)
    .then((res) => {
      setIsModal(false);
      console.log(res);
    })
    .catch((err) => {
      Eror("خطا");
      console.log(err);
    });
};

// export const Get_Products_InStore = async () => {
//   try {
//     const response = await axios.get(
//       "http://tala7.com:44/api/DocStore/Get_Products_In_Safebox"
//     );
//     const SafeBox = response.data;
//     console.log(SafeBox);
//     return SafeBox;
//   } catch (error) {
//     console.error("Error fetching specialties:", error);
//     return null;
//   }
// };

export const Get_Products_InStore = (setInVitrin, currentPage) => {
  axios
    .post("http://tala7.com:44/api/DocStore/Get_Products_In_Safebox", {
      metadata: {
        userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        userName: "string",
        userNameforC: "string",
      },
      pagenumber: currentPage,
      pagesize: 30,
    })
    .then((res) => {
      setInVitrin(res.data.response_List);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Get_All_News = (setNews) => {
  axios
    .post("http://tala7.com:44/api/News/Get_All_News", {
      metadata: {
        userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        userName: "string",
        userNameforC: "string",
      },
      pagenumber: 1,
      pagesize: 10,
    })
    .then((res) => {
      setNews(res.data.response_List);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const CreateNews = (data, setIsModal) => {
  axios
    .post("http://tala7.com:44/api/News/CreateNews", data)
    .then((res) => {
      setIsModal(false);

      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Get_All_Users = async () => {
  try {
    const response = await axios.get(
      "http://tala7.com:44/api/Admin/UsersDropdown"
    );
    const users = response.data;
    console.log(users);
    return users;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};

export const Create_Seller = (data, setIsModal) => {
  console.log(data);
  axios
    .post("http://tala7.com:44/api/Seller/CreateSeller", data)
    .then((res) => {
      setIsModal(false);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Get_All_Sellers = (setSellers) => {
  axios
    .post("http://tala7.com:44/api/Seller/Get_All_Sellers", {
      metadata: {
        userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        userName: "string",
        userNameforC: "string",
      },
      pagenumber: 0,
      pagesize: 10,
    })
    .then((res) => {
      setSellers(res.data.response_List);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Create_DocStore = (data, setIsModal) => {
  console.log(data);
  axios
    .post("http://tala7.com:44/api/DocStore/Create_DocStore", data)
    .then((res) => {
      success("محصول به گاوصندوق افزوده شد");
      setIsModal(false);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Edit_TypeProduct_Master = (data, setIsEditingModal, id) => {
  console.log(data);
  axios
    .post(`http://tala7.com:44/api/Product/Edit_TypeProduct_Master/${id}`, data)
    .then((res) => {
      setIsEditingModal(false);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      Eror("خطا");
    });
};

export const EnterVitrin_DocStore = (id, setDocStore) => {
  axios
    .post(`http://tala7.com:44/api/DocStore/EnterVitrin_DocStore`, {
      metadata: {
        userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        userName: "string",
        userNameforC: "string",
      },
      id,
      dateOfVitrin: "2025-03-28",
    })
    .then((res) => {
      success("محصول به ویترین افزوده شد");
      console.log(res);
      Get_Products_InStore(setDocStore, 1);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Get_Products_InVitrin = (setInVitrin, currentPage) => {
  axios
    .post(`http://tala7.com:44/api/DocStore/Get_Products_InVitrin`, {
      metadata: {
        userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        userName: "string",
        userNameforC: "string",
      },
      pagenumber: currentPage,
      pagesize: 10,
    })
    .then((res) => {
      setInVitrin(res.data.response_List);

      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const Get_Products_Show_InVitrin = (setVitrinShow, currentPage) => {
  axios
    .post(`http://tala7.com:44/api/DocStore/Get_Products_Show_InVitrin`, {
      metadata: {
        userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        userName: "string",
        userNameforC: "string",
      },
      pagenumber: currentPage,
      pagesize: 100,
    })
    .then((res) => {
      setVitrinShow(res.data.response_List);

      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const DeleteTypeProduct_Master = async (id, closeModal) => {
  console.log(id);
  try {
    const response = await axios.get(
      `http://tala7.com:44/api/Product/DeleteTypeProduct_Master/${id}`
    );
    console.log("Data fetched successfully:", response.data);
    closeModal();
  } catch (error) {
    console.error(
      "Error while fetching data:",
      error.response ? error.response.data : error.message
    );
  }
};

export const Edit_TypeProduct_SubMaster = (data, setIsEditingModal, id) => {
  console.log(data);
  axios
    .post(
      `http://tala7.com:44/api/Product/Edit_TypeProduct_SubMaster/${id}`,
      data
    )
    .then((res) => {
      setIsEditingModal(false);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      Eror("خطا");
    });
};
export const EditProduct = (data, setIsEditingModal, id) => {
  console.log(data);
  axios
    .post(`http://tala7.com:44/api/Product/EditProduct?id=${id}`, data)
    .then((res) => {
      setIsEditingModal(false);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      Eror("خطا");
    });
};
export const DeleteTypeProduct_SubMaster = async (id, closeModal) => {
  console.log(id);
  try {
    const response = await axios.get(
      `http://tala7.com:44/api/Product/DeleteTypeProduct_SubMaster/${id}`
    );
    console.log("Data fetched successfully:", response.data);
    closeModal();
  } catch (error) {
    console.error(
      "Error while fetching data:",
      error.response ? error.response.data : error.message
    );
  }
};
export const DeleteProduct = async (id, closeModal) => {
  console.log(id);
  try {
    const response = await axios.get(
      `http://tala7.com:44/api/Product/DeleteProduct/${id}`
    );
    console.log("Data fetched successfully:", response.data);
    closeModal();
  } catch (error) {
    console.error(
      "Error while fetching data:",
      error.response ? error.response.data : error.message
    );
  }
};
export const Get_All_Applicants = (setAplicantUsers, currentPage) => {
  axios
    .post(`http://tala7.com:44/api/Applicant/Get_All_Applicants`, {
      metadata: {
        userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        userName: "string",
        userNameforC: "string",
      },
      pagenumber: currentPage,
      pagesize: 100,
    })
    .then((res) => {
      console.log(res.data.response_List);
      setAplicantUsers(res.data.response_List);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const SharzhWallet_Gold = (data, setIsModal) => {
  axios
    .post(
      `http://tala7.com:44/api/Wallet_Gold/SharzhWallet_Gold?SharzhValue=${data.sharzhValue}&Exist_gold=0&ApplicantId=${data.applicantId}`,
      {
        metadata: {
          userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          userName: "string",
          userNameforC: "string",
        },
        exist_Gold: "string",
        applicantId: 0,
        parent_Id: 0,
      }
    )
    .then((res) => {
      setIsModal(false);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const Get_Wallet_gold_By_ApplicantId = async (id, setWalletInfo) => {
  try {
    const response = await axios.get(
      `http://tala7.com:44/api/Wallet_Gold/Get_Wallet_gold_By_ApplicantId/${id}`
    );
    console.log("Data fetched successfully:", response);
    setWalletInfo(response.data);
  } catch (error) {
    console.error(
      "Error while fetching data:",
      error.response ? error.response.data : error.message
    );
  }
};
export const Get_Wallet_toman_By_ApplicantId = async (id, setWalletInfo) => {
  try {
    const response = await axios.get(
      `http://tala7.com:44/api/WalletToman/Get_Wallet_toman_By_ApplicantId/${id}`
    );
    console.log("Data fetched successfully:", response);
    setWalletInfo(response.data);
  } catch (error) {
    console.error(
      "Error while fetching data:",
      error.response ? error.response.data : error.message
    );
  }
};
export const SharzhWallet_toman = (data, setIsModal) => {
  axios
    .post(
      `http://tala7.com:44/api/WalletToman/SharzhWallet_toman?SharzhValue=${data.sharzhValue}&Exist_toman=0&ApplicantId=${data.applicantId}`,
      {
        metadata: {
          userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          userName: "string",
          userNameforC: "string",
        },
        exist_toman: "string",
        applicantId: 0,
        old_Wallet_toman_Id: 0,
      }
    )
    .then((res) => {
      setIsModal(false);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const Get_Wallet_Installment_Purchase_By_ApplicantId = async (
  id,
  setWalletInfo
) => {
  try {
    const response = await axios.get(
      `http://tala7.com:44/api/Wallet_Installment_Purchase/Get_Wallet_Installment_Purchase_By_ApplicantId/${id}`
    );
    console.log("Data fetched successfully:", response);
    setWalletInfo(response.data);
  } catch (error) {
    console.error(
      "Error while fetching data:",
      error.response ? error.response.data : error.message
    );
  }
};
export const SharzhWallet_Wallet_Installment_Purchase = (data, setIsModal) => {
  axios
    .post(
      `http://tala7.com:44/api/Wallet_Installment_Purchase/SharzhWallet_Wallet_Installment_Purchase?SharzhValue=${data.sharzhValue}&exist_Installment_Purchase=0&ApplicantId=${data.applicantId}`,
      {
        metadata: {
          userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          userName: "string",
          userNameforC: "string",
        },
        exist_Installment_Purchase: "string",
        applicantId: 0,
        old_Wallet_Installment_Purchase_Id: 0,
      }
    )
    .then((res) => {
      setIsModal(false);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const Reject_Vitrin_DocStore_To_Safebox = (id, setIsModal) => {
  axios
    .post(
      `http://tala7.com:44/api/DocStore/Reject_Vitrin_DocStore_To_Safebox`,
      {
        metadata: {
          userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          userName: "string",
          userNameforC: "string",
        },
        id,
        dateOfVitrin: "2025-04-21T12:32:26.267Z",
      }
    )
    .then((res) => {
      setIsModal(false);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const Delete_DocStore = (id, setIsModal) => {
  axios
    .post(`http://tala7.com:44/api/DocStore/Delete_DocStore`, {
      metadata: {
        userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        userName: "string",
        userNameforC: "string",
      },
      id,
      dateOfVitrin: "2025-04-21T12:32:26.267Z",
    })
    .then((res) => {
      setIsModal(false);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const Get_Products_FreeShipment_Show_InVitrin = (setVitrinShow) => {
  axios
    .post(
      `http://tala7.com:44/api/DocStore/Get_Products_FreeShipment_Show_InVitrin`
    )
    .then((res) => {
      setVitrinShow(res.data);

      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
