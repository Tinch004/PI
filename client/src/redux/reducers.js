import { GET_COUNTRIES, SEARCH_COUNTRIES, CREATE_ACTIVITY, FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
  SORT_BY_POPULATION_ASC,
  SORT_BY_POPULATION_DESC,} from "./actions";

const initialState = {
  countries: [],
  activities: [],
 
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      };
    case SEARCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      };
    case CREATE_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };
      case FILTER_BY_CONTINENT:
      const filteredCountries = action.payload;
      return {
        ...state,
        countries: filteredCountries,
      };
    case FILTER_BY_ACTIVITY:
      return {
        ...state,
        filters: {
          ...state.filters,
          activity: action.payload,
        },
      };
    case SORT_BY_POPULATION_ASC:
      return {
        ...state,
        filters: {
          ...state.filters,
          sortBy: "asc",
        },
      };
    case SORT_BY_POPULATION_DESC:
      return {
        ...state,
        filters: {
          ...state.filters,
          sortBy: "desc",
        },
      };
    default:
      return state;
  }
};


export default reducer;

