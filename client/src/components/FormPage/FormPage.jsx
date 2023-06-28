import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createActivity,
  filterByActivity,
  getCountries,
} from "../../redux/actions";
import styles from "./Form.module.css";
import { NavLink } from "react-router-dom";

const CreateActivityForm = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const [activityData, setActivityData] = useState({
    name: "",
    difficulty: 1,
    duration: 0,
    season: "Verano",
    countries: [],
  });

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
  });

  const handleInputChange = (e) => {
    setActivityData({ ...activityData, [e.target.name]: e.target.value });
    setValidationErrors({ ...validationErrors, [e.target.name]: "" });
  };

  useEffect(() => {
    validateForm();
  }, [activityData]);

  const handleCountrySelect = (countryId) => {
    const selectedCountries = activityData.countries.includes(countryId)
      ? activityData.countries.filter((id) => id !== countryId)
      : [...activityData.countries, countryId];

    setActivityData({ ...activityData, countries: selectedCountries });
    setValidationErrors({ ...validationErrors, countries: "" });
  };

  const validateName = (name) => {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(name);
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (activityData.name.trim() === "") {
      errors.name = "Name is required";
      valid = false;
    } else if (activityData.name.length > 20) {
      errors.name = "Name cannot exceed 20 characters";
      valid = false;
    } else if (!validateName(activityData.name)) {
      errors.name = "Name cannot contain symbols or numbers";
      valid = false;
    }

    if (activityData.difficulty <= 0) {
      errors.difficulty = "Difficulty must be greater than 0";
      valid = false;
    }

    if (activityData.duration < 1) {
      errors.duration = "Duration must be greater than or equal to 1";
      valid = false;
    } else if (activityData.duration > 1000) {
      errors.duration = "Duration must be less than or equal to 1000";
      valid = false;
    }
    if(!activityData.countries.length){
      errors.countries= 'You must select a country at least'
      valid= false
    }

    setValidationErrors(errors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const response = await dispatch(createActivity(activityData));
        if (response?.error) {
          alert(response.error);
        } else {
          await dispatch(filterByActivity(activityData));
          alert("Actividad creada correctamente");
  
          setActivityData({
            name: "",
            difficulty: 1,
            duration: 0,
            season: "Verano",
            countries: [],
          });
          setValidationErrors({
            name: "",
            difficulty: "",
            duration: "",
          });
        }
      } catch (error) {
        console.log(error);
        alert("Error al crear la actividad");
      }
    } else {
      alert("Error en la validación de datos");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.createActivityForm} onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          Activity Name:
          <input
            type="text"
            name="name"
            value={activityData.name}
            onChange={handleInputChange}
            className={styles.formInput}
          />
          {validationErrors.name && (
            <span className={styles.error}>{validationErrors.name}</span>
          )}
        </label>

        <label className={styles.formLabel}>
          Difficulty: {activityData.difficulty}
          <input
            type="range"
            name="difficulty"
            min="1"
            max="5"
            value={activityData.difficulty}
            onChange={handleInputChange}
            className={styles.formInput}
          />
          {validationErrors.difficulty && (
            <span className={styles.error}>{validationErrors.difficulty}</span>
          )}
        </label>

        <label className={styles.formLabel}>
          Duration (hs):
          <input
            min={0}
            max={1000}
            type="number"
            name="duration"
            value={activityData.duration}
            onChange={handleInputChange}
            className={styles.formInput}
          />
          {validationErrors.duration && (
            <span className={styles.error}>{validationErrors.duration}</span>
          )}
        </label>

        <label className={styles.formLabel}>
          Season:
          <select
            name="season"
            value={activityData.season}
            onChange={handleInputChange}
            className={styles.formInput}
          >
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
            <option value="Primavera">Primavera</option>
          </select>
        </label>

        <label className={styles.formLabel}>
          Select Countries:
          <div className={styles.countryList}>
            <div className={styles.countryListScroll}>
              <div className={styles.checkboxContainer}>
                {countries
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((country) => (
                    <label key={country.id}>
                      <input
                        type="checkbox"
                        name="countries"
                        value={country.id}
                        checked={activityData.countries.includes(country.id)}
                        onChange={() => handleCountrySelect(country.id)}
                        className={styles.checkboxInput}
                      />
                      {country.name}
                    </label>
                  ))}
              </div>
            </div>
          </div>
          {validationErrors.countries && (
            <span className={styles.error}>{validationErrors.countries}</span>
          )}
        </label>

        <button type="submit" className={styles.submitButton}> 
          Create Activity
        </button>
        <NavLink to="/home">
          <button className={styles.submitButton}>Home</button>
        </NavLink>
      </form>
    </div>
  );
};

export default CreateActivityForm;
