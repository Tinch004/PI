import {GET_COUNTRIES} from "./actions";

const initialState = {
  countries: [],
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES: {
      state = {
        ...state,
        countries: action.payload,
      }
      return state;
    }

    default:
      return state;
  }
};

export default reducer;
