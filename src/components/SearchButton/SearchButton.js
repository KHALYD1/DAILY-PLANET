import React, { useState } from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  background-color: silver;
  display: flex;
  justify-content: flex-end;
  
`;

// const Button = styled.button`
//   background: ${props => props.$primary ? "black" : "black"};
//   color: ${props => props.$primary ? "white" : "palevioletred"};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid black;
//   border-radius: 3px;
// `;


const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "black" : "black"};
  color: ${props => props.$primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

function SearchButton({handleSearch}) {
    const [inputValue, setInputValue] = useState("")

    return (
        <SearchWrapper>
            <form onSubmit={async (e) => {
                e.preventDefault()
                setInputValue("")

                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=615ef18cc55246f1b0516267e5a55737`)
                const data = await response.json()

                handleSearch(data.articles)

                const articleTitle = data.articles[0].title;
                console.log(articleTitle); // prints the title of the first article in the response

            }}>
                <input type="text" placeholder="Search news" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
                <Button type="submit" $primary>Search</Button>
            </form>
        </SearchWrapper>
    )
}

export default SearchButton;
