import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 10px 20px;
`;

const Logo = styled.img`
  height: 190px;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 10px;
  padding: 50px;
  font-size: 30px;
  text-decoration: underline;
  justify-content: space-between;
  gap: 30px;
  
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

const NavLink = styled.a`
  color: black;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: darkgrey;
    color: black;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo
        src="https://pm1.narvii.com/8075/350acd527c36799a73c4b925dcc5cde50abf6096r1-2048-683v2_hq.jpg"
        alt=""
      />
      <NavMenu>
        <NavItem>
          <NavLink href="#home">HOME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#news">NEWS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#about">ABOUT US</NavLink>
        </NavItem>
      </NavMenu>
    </Nav>
  );
}

export default Navbar;
