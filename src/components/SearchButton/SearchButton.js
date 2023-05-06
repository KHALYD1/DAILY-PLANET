import React, { useState } from 'react';
import styled from 'styled-components';


const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: grey;
  padding: 10px;
`;

const SearchInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
  width: 300px;
`;

const SearchButtonStyled = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: black;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #222;
  }
`;

const SearchResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const SearchResultItem = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 600px;
  margin-bottom: 20px;
`;

const SearchResultTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const SearchResultDescription = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

function SearchButton({ handleSearch }) {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const displaySearchResults = () => {
    return searchResults.map((result) => (
      <SearchResultItem key={result.title}>
        <SearchResultTitle>{result.title}</SearchResultTitle>
        <SearchResultDescription>{result.description}</SearchResultDescription>
      </SearchResultItem>
    ));
  };

  return (
    <div>
      <SearchWrapper>
        <SearchInput
          type="text"
          placeholder="Search news"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SearchButtonStyled
          type="submit"
          onClick={async (e) => {
            e.preventDefault();
            setInputValue("");

            const response = await fetch(
              `https://newsapi.org/v2/everything?q=${inputValue}&apiKey=615ef18cc55246f1b0516267e5a55737`
            );
            const data = await response.json();

            setSearchResults(data.articles);

            const articleTitle = data.articles[0].title;
            console.log(articleTitle); // prints the title of the first article in the response
          }}
        >
          Search
        </SearchButtonStyled>
      </SearchWrapper>
      {searchResults.length > 0 && (
        <SearchResultWrapper>
          {searchResults.slice(1).map((result) => (
            <SearchResultItem key={result.title}>
              <SearchResultTitle>{result.title}</SearchResultTitle>
              <SearchResultDescription>{result.description}</SearchResultDescription>
            </SearchResultItem>
          ))}
        </SearchResultWrapper>
      )}
    </div>
  );
}

export default SearchButton;