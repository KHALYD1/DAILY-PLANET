import './App.css';
import Search from './components/search/SearchButton'
import { useState } from 'react';
import SearchButton from './components/search/SearchButton';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';


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

      <Navbar />

      <header className="App-header">
      <Aboutus /> 
      </header>
      <Footer />
    </div>
  );
}

export default App;
