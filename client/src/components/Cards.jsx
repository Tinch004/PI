import { useState } from "react";
import { useSelector } from "react-redux";
import CountryCard from "./CountryCard";

const Cards = () => {
  const countries = useSelector((state) => state.countries) || []; // Asegurarse de que countries tenga un valor predeterminado en caso de que sea undefined
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;
  const maxPageNumbers = 3; // Número máximo de botones de página a mostrar

  // Calcular el índice inicial y final de los países en la página actual
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(countries.length / countriesPerPage);

  // Calcular los números de página a mostrar
  let pageNumbers = [];
  if (totalPages <= maxPageNumbers) {
    pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  } else {
    const middlePage = Math.floor(maxPageNumbers / 2);
    if (currentPage <= middlePage) {
      pageNumbers = Array.from({ length: maxPageNumbers }, (_, index) => index + 1);
    } else if (currentPage > totalPages - middlePage) {
      pageNumbers = Array.from({ length: maxPageNumbers }, (_, index) => totalPages - maxPageNumbers + index + 1);
    } else {
      pageNumbers = Array.from({ length: maxPageNumbers }, (_, index) => currentPage - middlePage + index);
    }
  }

  // Función para cambiar a la siguiente página
  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  // Función para cambiar a la página anterior
  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  // Función para cambiar de página
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {currentCountries.map((country) => (
          <CountryCard
            key={country.id}
            name={country.name}
            flagImage={country.flagImage}
            continents={country.continents}
          />
        ))}
      </div>
      {/* Paginado */}
      <div>
        <button disabled={currentPage === 1} onClick={prevPage}>
          Previous
        </button>
        {pageNumbers.map((pageNumber) => (
          <button key={pageNumber} onClick={() => goToPage(pageNumber)}>
            {pageNumber}
          </button>
        ))}
        <button disabled={currentPage === totalPages} onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Cards;