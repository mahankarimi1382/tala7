import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

function NewsFeed() {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch news data
  const fetchNews = async () => {
    try {
      const response = await axios.get("http://tala7.com:44/api/News/Get_5new_News");
      setNewsItems(response.data);
      setError(null); 
    } catch (err) {
      console.error("Error fetching news:", err);
      setError("خطا در بارگذاری اخبار");
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchNews(); 

    const interval = setInterval(() => {
      fetchNews(); // Fetch every 100 seconds
    }, 100000); 

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="relative w-full overflow-hidden  ">
      <div className="bg-gradient-to-l from-[#c7a984] to-orange-100 sticky z-[50] flex items-center py-2 sm:py-[1px] sm:ps-4 sm:rounded-lg shadow-md">

        {/* Title with ping animation */}
        <div className=" hidden sm:flex items-center gap-2 font-bold text-lg text-gray-700 relative whitespace-nowrap py-2 shadow-[-10px_0_15px_-3px_rgba(0,0,0,0.1)] rounded-lg">
          اخبار امروز
          <span className="relative flex h-3 w-3 mx-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cf352a] opacity-100"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#d3b795]"></span>
          </span>
        </div>

        {/* News List */}
        <div className="overflow-hidden flex-1">
          {loading ? (
            <span className="text-gray-700 mx-4">در حال بارگذاری...</span>
          ) : error ? (
            <span className="text-red-600 mx-4">{error}</span>
          ) : newsItems.length === 0 ? (
            <span className="text-gray-700 mx-4">هیچ خبری موجود نیست</span>
          ) : (
            <ul className="marquee-ul">
              {newsItems.map((item, index) => (
                <li key={index} className="news-item list-disc list-inside">
                  {item.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
