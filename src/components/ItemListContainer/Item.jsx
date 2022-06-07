import React from 'react';

const Item = ({item}) => {
  const {title, price, image} = item;
    
  return (
    <div className='cards'>
      <img src={image} alt={title}/>
      <h4>{title}</h4>
      <p className='badge bg-success'>$ {price}</p>
      <button
        className='buttons'
        type='button'
        >
        Ver Detalle
      </button>
    </div>
  );
};

export default Item;