import style from "./DetailPage.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [countryDetail, setCountryDetail] = useState([]);

  useEffect(() => {
    axios(`http://localhost:3001/countries/${id}`).then(({ data }) => {
      data.name ? setCountryDetail(data) : window.alert("No Country Found");
    });
  }, [id]);

  const {
    name,
    flagImage,
    continents,
    capital,
    subregion,
    area,
    poblation,
    Activities,
  } = countryDetail;

  const formattedArea = Number(area).toLocaleString("es-ES");
  const formattedPopulation = Number(poblation).toLocaleString("es-ES");

  return (
    <div className={style.detailPage}>
      <div className={style.countryInfo}>
        <h1 className={style.countryName}>{name}</h1>
        <div className={style.countryInfoItem}>
          <h3>Id: {id}</h3>
          <h3>Continent: {continents}</h3>
          <h3>Capital: {capital}</h3>
          <h3>Subregion: {subregion}</h3>
          <h3>
            Area: {formattedArea} km<sup>2</sup>
          </h3>
          <h3>Population: {formattedPopulation} people</h3>
        </div>
      </div>
      {flagImage && (
        <div className={style.flagContainer}>
          <img className={style.flagImage} src={flagImage} alt="" />
        </div>
      )}
      <div className={style.activitiesContainer}>
        {!Activities?<h1>Not Activities</h1>: (
          <div className={style.activities}>
            {Activities.map((a) => (
              <div className={style.activityItem} key={a.id}>
                <h2 className={style.activityName}>Name: {a.name}</h2>
                <div className={style.activityDetails}>
                  <h3>Duration: {a.duration}</h3>
                  <h3>Difficulty: {a.difficulty}</h3>
                  <h3>Season: {a.season}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Link to={"/home"} className={style.homeLink}>
        <button className={style.homeButton}>Go Back</button>
      </Link>
    </div>
  );
};

export default Detail;
