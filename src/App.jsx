import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsWithButtons from "./NewsWithButtons";
import NewsWithInfiniteScroll from "./NewsWithInfiniteScroll";
import Navbar from "./Navbar";

function NewsCard({ article }) {
  const { title, description, url, urlToImage } = article;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className="rounded-t-lg" src={urlToImage} alt={title} />
      </a>
      <div className="p-5">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title || "Noteworthy technology acquisitions 2021"}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description ||
            "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

function App() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 5;
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    fetchNews();
  }, [currentPage]);

  const fetchNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&page=${currentPage}&apiKey=${apiKey}`;

    try {
      const response = await axios.get(url);
      setArticles(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="bg-gray-600 min-h-screen">
      <Navbar/>
      {/* OPTION 1 */}
      <NewsWithButtons/>
      {/* OPTION 2 */}
      <NewsWithInfiniteScroll/>
    </div>
  );
}

export default App;
