/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";

const CountryCard = ({  name, flagImage, continents }) => {

  return (
    <div>
      <NavLink to={`/detail/${name}`}>
        <div>
      <img src={flagImage} />
      <h4>{name}</h4>
      <p>{continents}</p>
      </div>
      </NavLink>
    </div>
  );
};

export default CountryCard;
