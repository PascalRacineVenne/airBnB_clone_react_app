import React, { useState } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import PriceMarker from './priceMarker';

const MAPBOX_TOKEN = "pk.eyJ1IjoicGVkcm9zZSIsImEiOiJja280bWo0OXkwcWQ2Mm9wZHJndmZzaXJhIn0.k0D-dpoB4vd9mVOep-JLlA";

const Map = ({ flats }) => {
  const [viewport, setViewport] = useState({
    latitude: 45.4972159, // Montreal
    longitude: -73.6103642, // Montreal
    zoom: 12,
    pitch: 0,
    bearing: 0,
 });

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/mapbox/streets-v11?optimize=true"
      mapboxApiAccessToken={MAPBOX_TOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}
      transitionDuration={200}
    >
      {flats.map(flat => (
        <Marker
          latitude={flat.lat}
          longitude={flat.lng}
        >
          <PriceMarker price={flat.price} />
        </Marker>
      ))}
    </MapGL>
  );
}

export default Map;
