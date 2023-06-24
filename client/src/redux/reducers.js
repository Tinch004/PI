import {
  GET_COUNTRIES,
  SEARCH_COUNTRIES,
  CREATE_ACTIVITY,
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
  SORT_BY_NAME_ASC,
  SORT_BY_NAME_DESC,
  SORT_BY_POPULATION_ASC,
  SORT_BY_POPULATION_DESC,
  GET_ACTIVITIES,
} from "./actions";

const initialState = {
  countries: [],
  activities: [],
  filter: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        filter: action.payload,
      };
    case SEARCH_COUNTRIES:
      return {
        ...state,
       
        filter: action.payload,
      };
    case CREATE_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case FILTER_BY_CONTINENT:
      return {
        ...state,
        filter: action.payload,
      };
    case FILTER_BY_ACTIVITY:
      console.log(action.payload);
      return {
        ...state,
        filter: action.payload,
       
      };
    case SORT_BY_NAME_ASC:
      return {
        ...state,
      
        filter: [...state.filter].sort((a, b) => a.name.localeCompare(b.name)),
      };
    case SORT_BY_NAME_DESC:
      return {
        ...state,
       
        filter: [...state.filter].sort((a, b) => b.name.localeCompare(a.name)),
      };
    case SORT_BY_POPULATION_ASC:
      return {
        ...state,
       
        filter: [...state.filter].sort(
          (a, b) => a.poblation - b.poblation
        ),
      };
    case SORT_BY_POPULATION_DESC:
      return {
      ...state,
        filter: [...state.filter].sort(
          (a, b) => b.poblation - a.poblation
        ),
      };
    default:
      return state;
  }
};

export default reducer;
