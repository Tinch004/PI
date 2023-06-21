import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div>
    <nav>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </nav>
<NavLink to='/form'>
    <button>Crear Actividad</button>
    </NavLink>
    </div>
  );
};

export default Navbar;