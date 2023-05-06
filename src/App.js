

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import SearchButton from './components/SearchButton/SearchButton';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Aboutus from './components/About Us/Aboutus';
import News from './components/News/News';
import Hero from './components/Hero/Hero';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
`;

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (data) => {
    setSearchResults(data);
  };

  return (
    <BrowserRouter>
      <MainContainer>
        <Navbar />
        <ContentContainer>
          <Routes>
            <Route exact path="/" element={<Hero />} />
            <Route exact path="/hero" element={<Hero />} />
            <Route exact path="/aboutus" element={<Aboutus />} />
            <Route exact path="/news" element={<News />} />
          </Routes>
        </ContentContainer>
        <Footer />
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;