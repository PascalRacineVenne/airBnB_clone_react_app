import React, { useState } from 'react';

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
    <div>
      <input
        type="text"
        placeholder="search..."
        value=""
        onChange={handleSearch}
      />
    </div>
  );
}

export default Searchbar;
