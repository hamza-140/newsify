import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsCard from "./NewsCard";



function NewsWithInfiniteScroll() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articleCount, setArticleCount] = useState(0);
  const [loadedUrls, setLoadedUrls] = useState([]);

  const pageSize = 5;
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    fetchNews();
  }, [currentPage]);

  const fetchNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&page=${currentPage}&apiKey=${apiKey}`;

    try {
      const response = await axios.get(url);
      const newArticles = response.data.articles.filter(article => !loadedUrls.includes(article.url));
      setArticles(prevArticles => [...prevArticles, ...newArticles]);
      setLoadedUrls(prevUrls => [...prevUrls, ...newArticles.map(article => article.url)]);
      setArticleCount(response.data.totalResults);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const fetchMoreData = () => {
    if (articles.length < articleCount) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < articleCount}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more articles to load.</p>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default NewsWithInfiniteScroll;
