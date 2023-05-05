
// import './Aboutus.css';

// function Aboutus() {
//   return (
//     <div>
//       <div className="about-us">
//         <div className="photo">
//           <img src="https://cdn.shopify.com/s/files/1/0066/0478/3687/products/lsd006-dailyplanetcc-281219-110210_1200x1200.jpg?v=1635142728" alt="" /> 
//         </div>
//         <div className="description">
//           <h2>Khalid Abdi</h2>
//           <p>Senior Developer at The Daily Planet</p>
//           <p>Email @ khalyddyce@icloud.com
//   <h3>Dominic Juma</h3>
//                <p>Senior Developer at The Daily Planet</p>
//                <p>Email @ jumawafuladominic@gmail.com</p>
//   <h4>Geofrey Tegeret</h4>
//                 <p>Senior Developer at The Daily Planet</p>
//                 <p>Email @ georeece000@gmail.com </p>
 
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default Aboutus
import React from 'react'
import styled from 'styled-components';

const AboutUsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Photo = styled.div`
margin-left: -200px;
margin-top: 20px;

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
