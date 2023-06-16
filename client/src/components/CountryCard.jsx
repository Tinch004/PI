

import React from "react";


const CountryCard = ({  name, flageImage, continents }) => {
 
  return (
    <div>
      <img src={flageImage} />
      <p>{name}</p>
      <h4>{continents}</h4>
    </div>
  );
};

export default CountryCard;
