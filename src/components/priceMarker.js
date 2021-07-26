import React from 'react';
import './priceMarker.css';

const PriceMarker = ({price}) => {
  return(
    <div className="marker">
      {price}
    </div>
  );
}

export default PriceMarker;
