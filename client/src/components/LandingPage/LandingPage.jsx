import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getCountries } from "../../redux/actions";
import styles from "./Landing.module.css";

const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className={styles.landing}>
   
     
        <Link to="/home">
          <button className={styles.button}>🛫</button>
        </Link>
    
    </div>
  );
};

export default LandingPage;