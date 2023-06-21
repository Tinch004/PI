  import React, { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { createActivity } from "../redux/actions";

  const CreateActivityForm = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);

    const [activityData, setActivityData] = useState({
      name: "",
      difficulty: 1,
      duration: 0,
      season: "Verano",
      countries: [], // Array para almacenar los países seleccionados
    });

    const handleInputChange = (e) => {
      setActivityData({ ...activityData, [e.target.name]: e.target.value });
    };

    const handleCountrySelect = (e) => {
      const selectedCountryIds = Array.from(e.target.selectedOptions, (option) => option.value);
      setActivityData({ ...activityData, countries: selectedCountryIds });
    };

    console.log(activityData)

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createActivity(activityData));
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Activity Name:
          <input type="text" name="name" value={activityData.name} onChange={handleInputChange} />
        </label>

        <label>
          Difficulty:
          <input type="range" name="difficulty" min="1" max="5" value={activityData.difficulty} onChange={handleInputChange} />
        </label>

        <label>
          Duration:
          <input type="number" name="duration" value={activityData.duration} onChange={handleInputChange} />hs 
        </label>

        <label>
          Season:
          <select name="season" value={activityData.season} onChange={handleInputChange}>
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
            <option value="Primavera">Primavera</option>
          </select>
        </label>

        <label>
          Select Countries:
          <select multiple name="selectedCountries" value={activityData.selectedCountries} onChange={handleCountrySelect}>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Create Activity</button>
      </form>
    );
  };

  export default CreateActivityForm;