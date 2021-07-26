import React from 'react';
import './flat.css'

const Flat = ({ data }) => {
  return (
    <div className="flat">
      <div className="flat-picture" style={{backgroundImage: `url('${data.imageUrl}')` }}></div>
      <div className="flat-title">{data.name} {data.price} {data.priceCurrency}</div>
    </div>
  );
}

export default Flat;
