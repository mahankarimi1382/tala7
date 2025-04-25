import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");
console.log(token);
export const axiosConfig = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: token || "",
  },
});
