import axios from "axios";
import { useSelector } from "react-redux";

export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const SORT_ACTION = "SORT_ACTION";
export const TRACK_FILTERS_CONTINENTS = "TRACK_FILTERS_CONTINENTS";
export const TRACK_FILTERS_ACTIVITIES = "TRACK_FILTERS_ACTIVITIES";
export const TRACK_FILTERS_SORT = "TRACK_FILTERS_SORT";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const RESETPAGE = "RESETPAGE";
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Acción para obtener todos los países
export const getCountries = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${VITE_BACKEND_URL}/countries`);
      const countries = response.data;

      dispatch({ type: GET_COUNTRIES, payload: countries });
    } catch (error) {
      console.log("ENTRA ACA", error);
    }
  };
};

export const setCurrentPage = (pageNum) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: pageNum,
  };
};

export const searchCountries = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${VITE_BACKEND_URL}/countries/name?name=${name}`
      );
      const countries = response.data;
      console.log(response);

      dispatch({ type: SEARCH_COUNTRIES, payload: countries });
    } catch (error) {
      alert("Pais no encontrado");
    }
  };
};

export const resetPageNumber = () => {
  dispatc({ type: RESETPAGE, payload: 1 });
};

export const getActivities = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${VITE_BACKEND_URL}/activities`);
      const activities = response.data;

      dispatch({ type: GET_ACTIVITIES, payload: activities });
    } catch (error) {
      console.log("Error al obtener las actividades", error);
    }
  };
};

export const createActivity = (activityData) => {
  return async (dispatch) => {
    try {
      // Crear la actividad en la base de datos
      const response = await axios.post(
        `${VITE_BACKEND_URL}/activities`,
        activityData
      );
      const createdActivity = response.data;

      // Dispatch de la acción para agregar la actividad creada al estado
      dispatch({ type: CREATE_ACTIVITY, payload: createdActivity });
    } catch (error) {
      console.log("Error al crear la actividad", error);
    }
  };
};
export const filterByContinent = (continent) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload: continent,
  };
};

export const filterByActivity = (activityId, filter, countries) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${VITE_BACKEND_URL}/activities/activitiesCountries`
      );
      const activitiesCountries = response.data;

      // Filtrar los países relacionados a la actividad especificada
      const countriesFilter = [];

      for (const actividad of activitiesCountries) {
        if (actividad.ActivityId === activityId) {
          const country = countries.find(
            (country) => country.id === actividad.CountryId
          );
          if (country) {
            countriesFilter.push(country);
          }
        }
      }

      dispatch({ type: FILTER_BY_ACTIVITY, payload: countriesFilter });
    } catch (error) {
      console.log(
        "Error al obtener los países asociados a la actividad",
        error
      );
    }
  };
};

export const sortAction = (sort) => {
  return {
    type: SORT_ACTION,
    payload: sort,
  };
};

export const trackFiltersContinents = (continent) => {
  return {
    type: TRACK_FILTERS_CONTINENTS,
    payload: continent,
  };
};

export const trackFiltersActivities = (activity) => {
  return {
    type: TRACK_FILTERS_ACTIVITIES,
    payload: activity,
  };
};
export const trackFiltersSort = (sort) => {
  return {
    type: TRACK_FILTERS_SORT,
    payload: sort,
  };
};
