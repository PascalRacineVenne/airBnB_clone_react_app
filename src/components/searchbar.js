import React, { useState } from 'react';

import './searchbar.css';

const Searchbar = ({ flats, setFlats }) => {
  // const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    // setSearch(e.target.value);
  }

  // const filterFlats = (search) => {
  //   const filteredFlats = flats.filter(flat => new RegExp(search, "i").exec(flat.name))
  //   setFlats(filteredFlats)
  // }

  return (
    <div className="searchbar">
      <input
        className="input"
        type="text"
        placeholder="search..."
        value=""
        onChange={handleSearch}
      />
    </div>
  );
}

export default Searchbar;
