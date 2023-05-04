import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Search from './components/search/SearchButton'
import { useState } from 'react';
import SearchButton from './components/search/SearchButton';

function App() {
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (data) => {
    setSearchResults(data)
  }
  return (
    <div className="App" >
      <SearchButton handleSearch={handleSearch} />
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
