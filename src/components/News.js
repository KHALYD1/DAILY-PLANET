import React, { useState, useEffect } from "react";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=615ef18cc55246f1b0516267e5a55737";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setNews(data.articles))
      .catch((error) => console.log(error));
  }, []);