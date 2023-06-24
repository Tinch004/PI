import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  searchCountries,
  filterByContinent,
  getActivities,
  filterByActivity,
  sortByNameAsc,
  sortByNameDesc,
  sortByPopulationAsc,
  sortByPopulationDesc,
} from "../../redux/actions";
import Cards from "../Cards/Cards";
import Navbar from "../NavBar/NavBar";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const filter = useSelector((state) => state.filter);
  const activities = useSelector((state) => state.activities);
  const [continentFilter, setContinentFilter] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const handleSearch = async (searchQuery) => {
    try {
      if (searchQuery === "") {
        dispatch(getCountries());
      } else {
        dispatch(searchCountries(searchQuery));
      }
    } catch (error) {
      console.log("Error al buscar", error);
    }
  };

  const handleFilterContinent = async (event) => {
    try {
      if (event.target.value === "") {
        dispatch(filterByContinent(countries));
      } else {
        const countriesFiltered = countries.filter(
          (country) => country.continents === event.target.value
        );

        let filteredAndSortedCountries = [...countriesFiltered];

        if (sortBy) {
          switch (sortBy) {
            case "name-asc":
              filteredAndSortedCountries = filteredAndSortedCountries.sort((a, b) =>
                a.name.localeCompare(b.name)
              );
              break;
            case "name-desc":
              filteredAndSortedCountries = filteredAndSortedCountries.sort((a, b) =>
                b.name.localeCompare(a.name)
              );
              break;
            case "population-asc":
              filteredAndSortedCountries = filteredAndSortedCountries.sort(
                (a, b) => a.population - b.population
              );
              break;
            case "population-desc":
              filteredAndSortedCountries = filteredAndSortedCountries.sort(
                (a, b) => b.population - a.population
              );
              break;
            default:
              break;
          }
        }

        dispatch(filterByContinent(filteredAndSortedCountries));
        setContinentFilter(filteredAndSortedCountries);
      }
    } catch (error) {
      console.log("Error al filtrar", error);
    }
  };

  const handleFilterActivities = async (event) => {
    try {
      if (event.target.value === "") {
        dispatch(filterByContinent(countries));
      } else {
        const activityId = event.target.value;
        dispatch(filterByActivity(activityId, filter));
      }
    } catch (error) {
      console.log("Error al filtrar", error);
    }
  };

  const handleSortBy = async (event) => {
    const sortByValue = event.target.value;
    setSortBy(sortByValue);

    if (sortByValue === "") {
      // Limpiar el orden
      dispatch(filterByContinent(countries));
    } else {
      switch (sortByValue) {
        case "name-asc":
          dispatch(sortByNameAsc());
          break;
        case "name-desc":
          dispatch(sortByNameDesc());
          break;
        case "population-asc":
          dispatch(sortByPopulationAsc());
          break;
        case "population-desc":
          dispatch(sortByPopulationDesc());
          break;
        default:
          break;
      }
    }
  };

  return (
    <div>
    <div className={styles.home}>
      <Navbar  onSearch={handleSearch} />
<div>
      <div className={styles.filters}>
        <div className={styles.filter}>
          <label htmlFor="activity-filter" className={styles.label}>
            Filtrar por actividad:
          </label  >
          <select
            id="activity-filter"
            className={styles.select}
            onChange={handleFilterActivities}
          >
            <option value="">Todos los países</option>
            {activities.map((activity) => (
              <option key={activity.id} value={activity.id}>
                {activity.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.filter}>
          <label htmlFor="continent-filter" className={styles.label}>
            Filtrar por continente:
          </label>
          <select
            id="continent-filter"
            className={styles.select}
            onChange={handleFilterContinent}
          >
            <option value="">Todos los continentes</option>
            <option value="Africa">África</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europa</option>
            <option value="North America">América del Norte</option>
            <option value="South America">América del Sur</option>
            <option value="Oceania">Oceanía</option>
          </select>
        </div>

        <div className={styles.filter}>
          <label htmlFor="sort-by" className={styles.label}>
            Ordenar por:
          </label>
          <select id="sort-by" className={styles.select} onChange={handleSortBy}>
            <option value="">Ordenar por</option>
            <option value="name-asc">Nombre (ascendente)</option>
            <option value="name-desc">Nombre (descendente)</option>
            <option value="population-asc">Población (ascendente)</option>
            <option value="population-desc">Población (descendente)</option>
          </select>
        </div>
      </div>
</div>
      <div className={styles.cards}>
        <Cards countries={filter} />
      </div>
    </div></div>
  );
};

export default Home;
