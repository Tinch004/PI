import axios from 'axios';

export const CREATE_ACTIVITY =  'CREATE_ACTIVITY'
export const GET_COUNTRIES = 'GET_COUNTRIES'
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES'
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const SORT_BY_POPULATION_ASC = "SORT_BY_POPULATION_ASC";
export const SORT_BY_POPULATION_DESC = "SORT_BY_POPULATION_DESC";



// Acción para obtener todos los países
export const getCountries = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/countries');
      const countries = response.data;
    
      dispatch({ type: GET_COUNTRIES, payload: countries });
    } catch (error) {
      console.log('ENTRA ACA', error);
    }
  };
};

export const searchCountries=(name)=>{
  return async(dispatch)=>{
    try {
      const response = await axios.get(`http://localhost:3001/countries/name?name=${name}`);
      const countries = response.data;
      dispatch({type: SEARCH_COUNTRIES, payload:countries})
    } catch (error) {
      throw new Error(`Error al buscar: ${error.message}`);
    }
  }
}

export const createActivity = (activityData) => {
  return async (dispatch) => {
    try {
      // Crear la actividad en la base de datos
      const response = await axios.post("http://localhost:3001/activities", activityData)
      const createdActivity = response.data;
      console.log(createdActivity); 
      
      // Dispatch de la acción para actualizar el estado
      dispatch({ type: CREATE_ACTIVITY, payload: createdActivity });
    } catch (error) {
      alert("Error al crear la actividad", error);
    }
  };
};
export const filterByContinent = (continent) => {
  return async(dispatch)=>{
    try {
      const response = await axios.get(`http://localhost:3001/countries/filterContinents?continents=${continent}`);
      const countries = response.data;
      dispatch({type: FILTER_BY_CONTINENT, payload:countries})
    } catch (error) {
      throw new Error(`Error al buscar: ${error.message}`);
    }
  }
};

export const filterByActivity = (activity) => {
  return {
    type: FILTER_BY_ACTIVITY,
    payload: activity,
  };
};

export const sortByPopulationAsc = () => {
  return {
    type: SORT_BY_POPULATION_ASC,
  };
};

export const sortByPopulationDesc = () => {
  return {
    type: SORT_BY_POPULATION_DESC,
  };
};


