import React, { useState } from 'react';

function SearchButton({handleSearch}) {

    const [inputValue, setInputValue] = useState("")



    return (
        <div>
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
                <button type="submit">Search</button>
            </form>
        </div>
    )
}


export default SearchButton;
