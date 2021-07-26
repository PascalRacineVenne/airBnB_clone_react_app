import React from 'react';
import './priceMarker.css';

const PriceMarker = ({price, selected}) => {
  const classes = `marker ${selected ? "selected" : ""}`
  return(
    <div className={classes}>
      {price}
    </div>
  );
}

export default PriceMarker;
