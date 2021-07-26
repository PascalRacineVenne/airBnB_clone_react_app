import React, { useState, useEffect } from 'react';
import './App.css';
import Flat from './components/flat';
import Map from './components/map';
import Searchbar from './components/searchbar';

const App = () => {
  const [flats, setFlats] = useState([]);
  const [selectedFlat, setSelectedFlat] = useState(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/clairefro/flats-boilerplate/master/flats.json")
      .then(result => result.json())
      .then(data => setFlats(data));
  }, [])

  return (
    <div className="app">
      <div className="main">
        <div className="search">
          <Searchbar />
        </div>
        <div className="flats">
          {flats.map(flat => (
            <Flat
              key={flat.id}
              data={flat}
              selected={selectedFlat === flat}
              setSelectedFlat={setSelectedFlat}/>
          ))}
        </div>
      </div>
      <div className="map">
        <Map
          flats={flats}
          selectedFlat={selectedFlat}
        />
      </div>
    </div>
  );
}

export default App;
