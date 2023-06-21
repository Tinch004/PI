import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, searchCountries } from "../redux/actions";
import Cards from "./Cards";
import Navbar from "./NavBar";



const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const searchResults = useSelector((state) => state.searchResults);
  const [filteredCountries, setFilteredCountries] = useState([]);
  

  useEffect(() => {
    dispatch(getCountries());
    handleSearch(""); // Mostrar todos los países al cargar la página
  }, [dispatch]);

  const handleSearch = async (searchQuery) => {
    try {
      if (searchQuery.trim() === "") {
        setFilteredCountries(countries); // Mostrar todos los países
      } else {
       dispatch(searchCountries(searchQuery));
        let filteredResults = searchResults; // Mostrar resultados de búsqueda
  
      
      }
    } catch (error) {
      console.log("Error al buscar", error);
    }
  };

  return (
    <div>
      
      <Navbar onSearch={handleSearch} />
      <div>

        <Cards countries={filteredCountries} />
      </div>
    </div>
  );
};

export default Home;