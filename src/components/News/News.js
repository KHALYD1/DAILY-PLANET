import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  background-color: silver;
`;

const NewsHeading = styled.h1`
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 20px;
  text-decoration: underline;
`;

const NewsList = styled.ol`
  margin: 0;
  padding: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const NewsItem = styled.li`
  background-color: #f7f7f7;
  border-radius: 5px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 20px;
`;

const NewsTitle = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const NewsDescription = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;

const NewsLink = styled.a`
  color: #0077cc;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

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

  return (
    <NewsContainer>
      <NewsHeading>TOP HEADLINES</NewsHeading>
      <NewsList>
        {news.map((article) => (
          <NewsItem key={article.title}>
            <NewsTitle>{article.title}</NewsTitle>
            <NewsDescription>{article.description}</NewsDescription>
            <NewsLink href={article.url}>Read more</NewsLink>
          </NewsItem>
        ))}
      </NewsList>
    </NewsContainer>
  );
}

export default News;
