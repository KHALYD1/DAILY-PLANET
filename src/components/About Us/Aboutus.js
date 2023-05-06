import React from 'react'
import styled from 'styled-components';

// const AboutUsContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 20px;
//   background-color: silver;
// `;

// const Photo = styled.div`
// margin-left: -500px;
// margin-top: 20px;

//   img {
//     max-width: 100%;
//   }
  
// `;


// const Description = styled.div`
// color: black;
//   h2, h3, h4 {
//     margin-bottom: 10px;
//   }

//   p {
//     color: blue;
//     margin: 0 0 10px 0;
//   }
// `;

// function Aboutus() {
//   return (
//     <AboutUsContainer>
//       <Photo>
//         <img src="https://cdn.shopify.com/s/files/1/0066/0478/3687/products/lsd006-dailyplanetcc-281219-110210_1200x1200.jpg?v=1635142728" alt="" />
//       </Photo>
//       <Description>
//         <h2>Khalid Abdi</h2>
//         <p1>Senior Developer at The Daily Planet</p1>
//         <p>Email @ khalyddyce@icloud.com</p>
//         <h3>Dominic Juma</h3>
//         <p1>Senior Developer at The Daily Planet</p1>
//         <p>Email @ jumawafuladominic@gmail.com</p>
//         <h4>Geofrey Tegeret</h4>
//         <p1>Senior Developer at The Daily Planet</p1>
//         <p>Email @ georeece000@gmail.com</p>
//       </Description>
//     </AboutUsContainer>
//   );
// }
// const AboutUsContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 20px;
// `;
const AboutUsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: silver;
`;

const Photo = styled.div`
  margin-right: 20px;
  margin-left: -500px;
  
  img {
    max-width: 100%;
  }
`;

const Description = styled.div`
  color: black;
  
  h2, h3, h4 {
    margin-bottom: 10px;
  }

  p {
    color: blue;
    margin: 0 0 10px 0;
  }
`;

function Aboutus() {
  return (
    <AboutUsContainer>
      <Photo>
        <img src="https://cdn.shopify.com/s/files/1/0066/0478/3687/products/lsd006-dailyplanetcc-281219-110210_1200x1200.jpg?v=1635142728" alt="" />
      </Photo>
      <Description>
        <h2>Khalid Abdi</h2>
        <p1>Senior Developer at The Daily Planet</p1>
        <p>Email @ khalyddyce@icloud.com</p>
        <h3>Dominic Juma</h3>
        <p1>Senior Developer at The Daily Planet</p1>
        <p>Email @ jumawafuladominic@gmail.com</p>
        <h4>Geofrey Tegeret</h4>
        <p1>Senior Developer at The Daily Planet</p1>
        <p>Email @ georeece000@gmail.com</p>
      </Description>
    </AboutUsContainer>
  );
}


export default Aboutus;
