import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsWithButtons from "./NewsWithButtons";
import NewsWithInfiniteScroll from "./NewsWithInfiniteScroll";

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
      <nav className="sticky top-0 z-50 bg-gray-600 shadow shadow-gray-600 w-100 px-8 md:px-auto">
        <div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
          <div class="flex items-center">
            <div class="text-indigo-500 md:order-1 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
              <span class="ml-2 text-xl font-bold">Newsify 📰</span>
            </div>
          </div>

          <div class="order-2 md:order-3">
            <button class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
            <a
            href="https://www.instagram.com/20s.hamza/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-gray-300"
          >
            <svg
              class="w-6 h-6 text-gray-800 dark:text-pink-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="ml-2">20s.hamza</span>
          </a>
            </button>
          </div>
        </div>
      </nav>
      {/* OPTION 1 */}
      <NewsWithButtons/>
      {/* OPTION 2 */}
      <NewsWithInfiniteScroll/>
    </div>
  );
}

export default App;
