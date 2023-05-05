import React from 'react';
import ReactDOM from 'react-dom';

import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import SearchButton from './components/SearchButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import News from './components/News';
import Hero from './components/Hero';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (data) => {
    setSearchResults(data);
  };

  return (
    <div className="App">
      <Navbar />
      <SearchButton handleSearch={handleSearch} />
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
      <Hero />
      <News />
      <header className="App-header">
        <Aboutus />
      </header>
      <Footer />
    </div>
  );
}

ReactDOM.render(
  <App>
  <BrowserRouter>
      <Route exact path="/aboutus">
        <Aboutus />
      </Route>
      <Route exact path="/news">
        <News />
      </Route>
      <Route exact path="/footer">
        <Footer />
      </Route>
      <Route exact path="/">
      </Route>
  </BrowserRouter>
  </App>,
  document.getElementById('root')
);

export default App;
