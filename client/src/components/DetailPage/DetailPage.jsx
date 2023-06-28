import style from "./DetailPage.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";


const Detail = () => {
  const { id } = useParams();

  

  const [countryDetail, setCountryDetail] = useState([]);



  
  useEffect(() => {
    axios(`http://localhost:3001/countries/${id}`).then(({ data }) => {
      data.name ? setCountryDetail(data) : window.alert("No Country Found");
    });
  }, [id]);

console.log(countryDetail);
  

  if (countryDetail.length===0) {
    return(<div className={style.containerError}>
      <div className={style.cuadrado}> <h1 className={style.errorCode}>404</h1>
      <p className={style.errorMessage}>Country not found</p>
      <div className={style.buttonContainer}>
        <NavLink to="/home">
          <button className={style.backButton}>Volver</button>
        </NavLink>
      </div></div>
     
    </div>)
  }

  const {
    name,
    flagImage,
    continents,
    capital,
    subregion,
    area,
    population,
    Activities,
  } = countryDetail;

  const formattedArea = Number(area).toLocaleString("es-ES");
  const formattedPopulation = Number(population).toLocaleString("es-ES");

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
