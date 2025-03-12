import { useState, useEffect } from "react";
import "./index.css";
import { fetchNews } from "./apicalling/ApiCalling";

function NewsFeed() {
  const [newsItems, setNewsItems] = useState([]); // Store news leads
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = "/api/News/Get_5new_News"; // Use Vite proxy

  // Function to fetch news from API
  // const fetchNews = useCallback(async () => {
  //   setLoading(true);
  //   setError(null);

  //   try {
  //     const response = await axios.get(apiUrl);
  //     const data = response.data; // API returns an array of objects

  //     if (Array.isArray(data)) {
  //       setNewsItems(data.map(item => item.lead)); // Extract "lead" field from each object
  //     } else {
  //       setNewsItems([]); // If response is unexpected, set empty list
  //     }
  //   } catch (error) {
  //     console.error("Error fetching news:", error);
  //     setError("Failed to fetch news. Please try again later.");
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [apiUrl]);

  // Fetch news when component mounts and refresh every 1 minute
  useEffect(() => {
    fetchNews(setLoading, setError, apiUrl, setNewsItems);
    const intervalId = setInterval(fetchNews, 60000); // Refresh every 60 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <div
        className="news-container bg-gradient-to-l from-[#c7a984] to-orange-100 sticky z-50 hidden sm:block"
        aria-live="polite"
        aria-label="Today’s news updates"
      >
        <div className="title bg-gradient-to-r from-[#c7a984] to-orange-100 shadow relative">
          اخبار امروز
          <span className="relative flex h-3 w-3 mx-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cf352a] opacity-100"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#d3b795]"></span>
          </span>
        </div>

        <ul role="list">
          {loading ? (
            <li className="matnekhabar">Loading news...</li>
          ) : error ? (
            <li className="matnekhabar text-red-500">{error}</li>
          ) : newsItems.length > 0 ? (
            newsItems.map((newsItem, index) => (
              <li key={index} className="matnekhabar">
                {newsItem}
              </li>
            ))
          ) : (
            <li className="matnekhabar">No news available.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default NewsFeed;
