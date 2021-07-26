import React from 'react';
import './flat.css'

const Flat = ({ data, setSelectedFlat, selected}) => {

  const handleClick = () => {
    setSelectedFlat(data);
  }

  const flatClasses = `flat ${selected ? 'selected' : ''}`

  return (
    <div className={flatClasses} onClick={handleClick}>
      <div
        className="flat-picture"
        style={{backgroundImage: `url('${data.imageUrl}')` }}
      ></div>
      <div className="flat-title">
        {data.name}
        {data.price}
        {data.priceCurrency}
      </div>
    </div>
  );
}

export default Flat;
