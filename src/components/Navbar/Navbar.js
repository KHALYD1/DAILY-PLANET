// import React from 'react';
// import styled from 'styled-components';
// import { Link, NavLink } from 'react-router-dom';
// import SearchButton from '../SearchButton/SearchButton';

// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: white;
//   padding: 10px 20px;
// `;

// const Logo = styled.img`
//   height: 100px;
// `;

// const NavMenu = styled.ul`
//   display: flex;
//   list-style: none;
//   margin: 10px;
//   padding: 50px;
//   font-size: 30px;
//   text-decoration: underline;
//   justify-content: space-between;
//   gap: 30px;
// `;

// const NavItem = styled.li`
//   margin: 0 10px;
// `;

// const NavLinkStyled = styled(NavLink)`
//   color: black;
//   font-weight: bold;
//   text-decoration: none;
//   transition: background-color 0.2s ease, color 0.2s ease;

//   &:hover {
//     background-color: darkgrey;
//     color: black;
//   }

//   &.active {
//     background-color: darkgrey;
//     color: black;
//   }
// `;

// const SearchWrapper = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const SearchContainer = styled.div`
//   display: flex;
//   align-items: center;
//   padding:  9px;
//   margin-right: 10px;
// `;



// function Navbar() {
//   return (
//     <Nav>
//       <Logo
//         src="https://pm1.narvii.com/8075/350acd527c36799a73c4b925dcc5cde50abf6096r1-2048-683v2_hq.jpg"
//         alt=""
//       />
//       <SearchWrapper>
//         <SearchContainer>
//           <SearchButton handleSearch={(articles) => console.log(articles)} />
//         </SearchContainer>
//       </SearchWrapper>
//       <NavMenu>
//         <NavItem>
//           <NavLinkStyled exact to="/hero">HOME</NavLinkStyled>
//         </NavItem>
//         <NavItem>
//           <NavLinkStyled to="/news">NEWS</NavLinkStyled>
//         </NavItem>
//         <NavItem>
//           <NavLinkStyled to="/aboutus">ABOUT US</NavLinkStyled>
//         </NavItem>
//       </NavMenu>
//     </Nav>
//   );
// }

// export default Navbar;

// import React from 'react';
// import styled from 'styled-components';
// import { Link, NavLink } from 'react-router-dom';
// import SearchButton from '../SearchButton/SearchButton';

// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: white;
//   padding: 10px 20px;
// `;

// const Logo = styled.img`
//   height: 100px;
// `;

// const NavMenu = styled.ul`
//   display: flex;
//   list-style: none;
//   margin: 10px;
//   padding: 50px;
//   font-size: 30px;
//   text-decoration: underline;
//   justify-content: space-between;
//   gap: 30px;
// `;

// const NavItem = styled.li`
//   margin: 0 10px;
// `;

// const NavLinkStyled = styled(NavLink)`
//   color: black;
//   font-weight: bold;
//   text-decoration: none;
//   transition: background-color 0.2s ease, color 0.2s ease;

//   &:hover {
//     background-color: darkgrey;
//     color: black;
//   }

//   &.active {
//     background-color: darkgrey;
//     color: black;
//   }
// `;

// const SearchWrapper = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const SearchContainer = styled.div`
//   display: flex;
//   align-items: center;
//   padding:  9px;
//   margin-right: 10px;
// `;

// function Navbar() {
//   return (
//     <Nav>
//       <Logo
//         src="https://pm1.narvii.com/8075/350acd527c36799a73c4b925dcc5cde50abf6096r1-2048-683v2_hq.jpg"
//         alt=""
//       />
//       <SearchWrapper>
//         <SearchContainer>
//           <SearchButton handleSearch={(articles) => console.log(articles)} />
//         </SearchContainer>
//       </SearchWrapper>
//       <NavMenu>
//         <NavItem>
//           <NavLinkStyled exact to="/hero">HOME</NavLinkStyled>
//         </NavItem>
//         <NavItem>
//           <NavLinkStyled to="/news">NEWS</NavLinkStyled>
//         </NavItem>
//         <NavItem>
//           <NavLinkStyled to="/aboutus">ABOUT US</NavLinkStyled>
//         </NavItem>
//       </NavMenu>
//     </Nav>
//   );
// }

// export default Navbar;

import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import SearchButton from '../SearchButton/SearchButton';
import News from '../News/News';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 10px 20px;
`;

const Logo = styled.img`
  height: 100px;
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

const NavLinkStyled = styled(NavLink)`
  color: black;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: darkgrey;
    color: black;
  }

  &.active {
    background-color: darkgrey;
    color: black;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding:  9px;
  margin-right: 10px;
`;

function Navbar() {
  return (
    <Nav>
      <Logo
        src="https://pm1.narvii.com/8075/350acd527c36799a73c4b925dcc5cde50abf6096r1-2048-683v2_hq.jpg"
        alt=""
      />
      <SearchWrapper>
        <SearchContainer>
          <SearchButton handleSearch={(articles) => console.log(articles)} />
        </SearchContainer>
      </SearchWrapper>
      <NavMenu>
        <NavItem>
          <NavLinkStyled exact to="/hero">HOME</NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/news">NEWS</NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/aboutus">ABOUT US</NavLinkStyled>
        </NavItem>
      </NavMenu>
    </Nav>
  );
}

export default Navbar;
