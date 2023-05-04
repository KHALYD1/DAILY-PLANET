


import React from "react";
import styled from 'styled-components';

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://images.pexels.com/photos/5784807/pexels-photo-5784807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-position: center;
  background-size: fit;
  height: 500px;
  padding-bottom:10px;
`;

const HeroText = styled.div`
  color: black;
  text-align: center;

  h1 {
    font-size: 5rem;
    margin-bottom: 10rem;
  }

  p {
    font-size: 2.5rem;
  }
`;

function Hero() {
  return (
    <HeroContainer>
      <HeroText>
        <h1>Welcome to the Daily Planet</h1>
        <p>Breaking news and analysis on politics, business, world national news, entertainment and more</p>
      </HeroText>
    </HeroContainer>
  );
}

export default Hero;
