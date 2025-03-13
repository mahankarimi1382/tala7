import axios from "axios";
import { success } from "../Components/ToastAlerts";

export const signup = (data) => {
  console.log(data);
  axios
    .post("http://tala7.com:44/api/Applicant/register", data)
    .then((res) => {
      console.log(res);
      success("ثبت نام انجام شد");
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
      console.log(err);
    });
};
export const Get_Products_InVitrin = async () => {
  try {
    const response = await axios.get(
      "http://tala7.com:44/api/DocStore/Get_Products_InVitrin"
    );
    const vitrin = response.data;
    console.log(vitrin);
    return vitrin;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};
export const Get_Products_InStore = async () => {
  try {
    const response = await axios.get(
      "http://tala7.com:44/api/DocStore/Get_Products_InStore"
    );
    const SafeBox = response.data;
    console.log(SafeBox);
    return SafeBox;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
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
