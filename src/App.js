import './App.css';
import { useState } from 'react';
import SearchButton from './components/SearchButton/SearchButton';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Aboutus from './components/About Us/Aboutus';
import News from './components/News/News';
import Hero from './components/Hero/Hero';
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
    </div>
  );
}
export default App;

