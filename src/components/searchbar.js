import React, { useState } from 'react';

import './searchbar.css';

const Searchbar = () => {
  const [input, setInput] = useState({
    value: ""
  })

  const handleSearch = (e) => {
    // assign input to a variable
    // console.log("hi from onChange", e.target.value);

    //
  }

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
