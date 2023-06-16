import React, { useEffect } from "react";
import { connect } from "react-redux";
import CountryCard from "./CountryCard";
import { getCountries } from "../redux/actions";

const Home = ({ countries, getAllCountries }) => {
  useEffect(() => {
    getAllCountries();
  }, [getAllCountries]);

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {countries?.map((country) => (
          <CountryCard
            key={country.id}
            name={country.name}
            flagImage={country.flag}
            continent={country.continent}
          />
        ))}
      </div>
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