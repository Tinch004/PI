import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/actions";
import CountryCard from "../CountryCard/CountryCard";
import styles from "./Cards.module.css";
import PaginadoGlobal from "../PaginadoGlobal/PaginadoGlobal";

const Cards = ({ countries }) => {
  const currentPage = useSelector((state) => state.currentPage);
  const countriesPerPage = 10;

  const handlePaginadoHome = (number) => {
    setCurrentPage(number);
  };

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  return (
    <div className={styles.cards}>
      <div className={styles.container}>
        {currentCountries.map((country) => (
          <CountryCard
            key={country.id}
            id={country.id}
            name={country.name}
            flagImage={country.flagImage}
            continents={country.continents}
            population={country.population}
          />
        ))}
      </div>

      {/* Agrega el componente PaginadoGlobal aquí */}
      <div className={styles.pagination}></div>
      <PaginadoGlobal
        elementsPerPage={countriesPerPage}
        elementToShow={countries}
        currentPage={currentPage}
        pageSet={handlePaginadoHome}
      />
    </div>
  );
};

export default Cards;
