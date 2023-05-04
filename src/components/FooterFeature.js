import React, { useContext } from 'react';
import { FeatureContext } from './FeatureContext';

const FooterFeature = () => {
  const { title, description, details, addDetail } = useContext(FeatureContext);

  return (
    <div className="footer-feature">
      <h3>{title}</h3>
      <p> &copy; 2023 The Kinoo App </p>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <button onClick={addDetail}>Add Detail</button>
    </div>
  );
};

export default FooterFeature;
