/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { connect } from "react-redux";
import Cards from "./Cards";

import { getCountries } from "../redux/actions";

const Home = ({ countries, getAllCountries }) => {

  useEffect(() => {
    getAllCountries();
  }, []);


  return (
    <div>
     <Cards countries={countries}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCountries: () => dispatch(getCountries()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);