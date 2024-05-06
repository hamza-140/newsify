import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";


function NewsWithButtons() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);

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
      setTotalArticles(response.data.totalResults);
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
    if (articles.length < totalArticles) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button
          onClick={handlePrevClick}
          disabled={currentPage === 1}
          className="bg-red-500 text-white px-6 py-2 rounded mr-4 disabled:opacity-50 hover:bg-blue-600 disabled:hover:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={handleNextClick}
          disabled={ currentPage * pageSize == totalArticles }
          className="bg-green-500 text-white px-6 py-2 rounded disabled:opacity-50 hover:bg-blue-600 hover:cursor-pointer disabled:hover:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default NewsWithButtons;
