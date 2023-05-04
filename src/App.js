import './App.css';
import Search from './components/SearchButton'
import { useState } from 'react';
import SearchButton from './components/SearchButton';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import News from './components/News';
import Hero from './components/Hero';

function App() {
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (data) => {
    setSearchResults(data)
  }
  return (
    <div className="App" >
      <Navbar />

      <SearchButton handleSearch={handleSearch} />
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>

      

      < Hero />
      < News/>


      <header className="App-header">
      <Aboutus /> 
      </header>
      <Footer />
    </div>
  );
}

export default App;
