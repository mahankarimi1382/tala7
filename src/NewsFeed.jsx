import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

function NewsFeed() {
  const [newsItems, setNewsItems] = useState([]); // State to store fetched news items
  const apiUrl = "https://tala7.com:44/api/News/Get_5new_News"; // API endpoint

  // Function to fetch data from the API
  const fetchNews = async () => {
    try {
      const response = await axios.get(apiUrl);
      const data = response.data; // Assuming the data has a 'lead' property with an array
      setNewsItems(data.lead || []); // Update state with 'lead' property if it exists
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  // Fetch news when component mounts and set interval to refresh every 1 minute
  useEffect(() => {
    fetchNews(); // Fetch initially

    const intervalId = setInterval(() => {
      fetchNews(); // Fetch every 1 minute
    }, 60000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div
        className="news-container bg-gradient-to-l from-[#c7a984] to-orange-100 sticky z-50 hidden sm:block"
        aria-live="polite"
        aria-label="Today’s news updates"
      >
        <div className="title bg-gradient-to-r from-[#c7a984] to-orange-100 shadow focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]">
          اخبار امروز
          <span className="relative flex h-3 w-3 mx-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cf352a] opacity-100"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#d3b795]"></span>
          </span>
        </div>

        <ul>
          {newsItems.length > 0 ? (
            newsItems.map((newsItem, index) => (
              <li key={index} className="matnekhabar">
                {newsItem}
              </li>
            ))
          ) : (
            <li className="matnekhabar">Loading news...</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default NewsFeed;
