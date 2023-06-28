import { Link, NavLink } from "react-router-dom";
import styles from "./CountryCard.module.css";

const CountryCard = ({ id, name, flagImage, continents, population }) => {
  return (
    <div className={styles.container}>
      <NavLink to={`/detail/${id}`} className={styles.navlink}>
        <div className={styles.card}>
          <img src={flagImage} alt={name} />

          <div className={styles.textContainer}>
            <h3>{name}</h3>
            <p>{continents}</p>
            <p>{population}</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default CountryCard;
