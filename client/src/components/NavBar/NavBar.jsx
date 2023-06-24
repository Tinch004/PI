import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__container}>
        <div className={styles.navbar__input}>
          <div></div><input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
         
          placeholder="Search..."
        />
        <button onClick={handleSearch} className={styles.navbar__button}>
          🔍
        </button></div>
        
      </div> 
      
       <NavLink to="/form" >
          <button className={styles.actividad}>Create Activity</button>
        </NavLink>
     
    </div>
  );
};

export default Navbar;
