import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  const countries = useSelector((state) => state.countries);
  const country = countries.find((country) => country.name === id);

  if (!country) {
    return <div>No se encontró el país.</div>;
  }

  return (
    <div>
      <h1>Detalle del país</h1>
      <h2>{country.id}</h2>
      <h2>{country.name}</h2>
      <p>Población: {country.poblation&&country.poblation}</p>
      <p>Continente: {country.continents}</p>
      <p>Capital: {country.capital}</p>
      <p>Continente: {country.continents}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Area: {country.area}</p>
  
      <img src={country.flagImage} alt="" />
      <NavLink to='/home'>
      <button>Home</button>
      </NavLink>

      {/* Mostrar más información sobre el país según tus necesidades */}
    </div>
  );
};

export default DetailPage;