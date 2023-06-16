/* eslint-disable react/prop-types */


const CountryCard = ({  name, flagImage, continents }) => {

  return (
    <div>
      <img src={flagImage} />
      <h4>{name}</h4>
      <p>{continents}</p>
    </div>
  );
};

export default CountryCard;
