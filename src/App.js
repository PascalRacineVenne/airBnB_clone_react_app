import React, { useState, useEffect } from 'react';
import './App.css';
import Flat from './components/flat';

// const tmpFlat = {
//   id: 145,
//   name: "The Stay Chez Claudette",
//   imageUrl: "https://raw.githubusercontent.com/clairefro/flats-boilerplate/master/images/chez-claudette-tripadvisor.jpg",
//   price: 164,
//   priceCurrency: "CAD",
//   lat: 45.5264082,
//   lng: -73.5900536
// }

const App = () => {
  const [flats, setFlats]= useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/clairefro/flats-boilerplate/master/flats.json")
      .then(result => result.json())
      .then(data => setFlats(data));
  }, [])

  return (
    <div className="App">
    <div className="main">
      <div className="search">
      </div>
      <div className="flats">
        {flats.map(flat => (
          <Flat key={flat.id} data={flat} />
        ))}
      </div>
    </div>
    <div className="map"> </div>
    </div>
  );
}

export default App;
