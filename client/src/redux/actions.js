import axios from "axios";

export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const SORT_BY_POPULATION_ASC = "SORT_BY_POPULATION_ASC";
export const SORT_BY_POPULATION_DESC = "SORT_BY_POPULATION_DESC";
export const SORT_BY_NAME_ASC = "SORT_BY_NAME_ASC";
export const SORT_BY_NAME_DESC = "SORT_BY_NAME_DESC";

// Acción para obtener todos los países
export const getCountries = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/countries");
      const countries = response.data;

      dispatch({ type: GET_COUNTRIES, payload: countries });
    } catch (error) {
      console.log("ENTRA ACA", error);
    }
  };
};

export const searchCountries = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/countries/name?name=${name}`
      );
      const countries = response.data;

      dispatch({ type: SEARCH_COUNTRIES, payload: countries });
    } catch (error) {
      throw new Error(`Error al buscar: ${error.message}`);
    }
  };
};

export const getActivities = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/activities");
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
        "http://localhost:3001/activities",
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

export const filterByActivity = (activityId, filter) => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/activities/activitiesCountries");
      const activitiesCountries = response.data;

      const countryResponse = await axios.get("http://localhost:3001/countries");
      const allCountries = countryResponse.data;


      // Filtrar los países relacionados a la actividad especificada
      const countriesFilter = [];

      for (const actividad of activitiesCountries) {
        if (actividad.ActivityId === activityId) {
          const country = filter.find((country) => country.id === actividad.CountryId);
          if (country) {
            countriesFilter.push(country);
          }
        }
      }

  console.log(countriesFilter);

  dispatch({ type: FILTER_BY_ACTIVITY, payload: countriesFilter });
    } catch (error) {
      console.log("Error al obtener los países asociados a la actividad", error);
    }
  };
};


export const sortByNameAsc = () => {
  return {
    type: SORT_BY_NAME_ASC
  };
};

export const sortByNameDesc = () => {
  return {
    type: SORT_BY_NAME_DESC
  };
};

export const sortByPopulationAsc = () => {
  return {
    type: SORT_BY_POPULATION_ASC
  };
};

export const sortByPopulationDesc = () => {
  return {
    type: SORT_BY_POPULATION_DESC
  };
};


