import axios from 'axios';

export const CREATE_ACTIVITY =  'CREATE_ACTIVITY'
export const GET_COUNTRIES = 'GET_COUNTRIES'
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES'
export const ADD_COUNTRIES_TO_ACTIVITY = 'ADD_COUNTRIES_TO_ACTIVITY'


// Acción para obtener todos los países
export const getCountries = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/countries');
      const countries = response.data;
      
      dispatch({ type: GET_COUNTRIES, payload: countries });
    } catch (error) {
      console.log(error);
    }
  };
};


