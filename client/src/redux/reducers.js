import {
  GET_COUNTRIES,
  SEARCH_COUNTRIES,
  CREATE_ACTIVITY,
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
  SORT_ACTION,
  GET_ACTIVITIES,
  TRACK_FILTERS_CONTINENTS,
  TRACK_FILTERS_ACTIVITIES,
  TRACK_FILTERS_SORT,
} from "./actions";

const initialState = {
  countries: [],
  activities: [],
  filter: [],
  filters: {
    continent: "",
    activity: "",
    sort: "",
  },
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
        filter: action.payload.length
          ? state.filter.filter(
              (country) => country.continents === action.payload
            )
          : [...state.filter],
        filters: {
          ...state.filters,
          continent: action.payload,
        },
      };
    case FILTER_BY_ACTIVITY:
      console.log(action.payload);
      return {
        ...state,
        filter: action.payload,
      };
    case SORT_ACTION:
      const sortBy = action.payload;

      let sortedFilter = [...state.filter];

      switch (sortBy) {
        case "name-asc":
          sortedFilter.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "name-desc":
          sortedFilter.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "population-asc":
          sortedFilter.sort((a, b) => a.population - b.population);
          break;
        case "population-desc":
          sortedFilter.sort((a, b) => b.population - a.population);
          break;
        default:
          break;
      }

      return {
        ...state,
        filter: sortedFilter,
        filters: {
          ...state.filters,
          sort: sortBy,
        },
      };

    case TRACK_FILTERS_CONTINENTS:
      return {
        ...state,
        filters: { ...state.filters, continent: action.payload },
      };

    case TRACK_FILTERS_ACTIVITIES:
      return {
        ...state,
        filters: { ...state.filters, activity: action.payload },
      };
    case TRACK_FILTERS_SORT:
      return {
        ...state,
        filters: { ...state.filters, sort: action.payload },
      };

    default:
      return state;
  }
};

export default reducer;
