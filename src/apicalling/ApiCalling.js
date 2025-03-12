import axios from "axios";

export const signup = () => {
  axios
    .post("https://tala7.com:44/api/Applicant/register", {
      metadata: {
        userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        userName: "string",
        userNameforC: "string",
      },
      mobile: "09305485308",
      password: "Mahan1382",
    })
    .then((res) => {
      console.log(res);
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
