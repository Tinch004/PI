import React from "react";
import styles from "./NotFound.module.css";
import { NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cuadrado}> <h1 className={styles.errorCode}>404</h1>
      <p className={styles.errorMessage}>Página no encontrada</p>
      <div className={styles.buttonContainer}>
        <NavLink to="/">
          <button className={styles.backButton}>Volver</button>
        </NavLink>
      </div></div>
     
    </div>
  );
};

export default NotFound;
