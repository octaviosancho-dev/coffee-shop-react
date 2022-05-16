import React from 'react';
import ItemCount from './ItemCount';
import ItemDetailContainer from '../ProductDetail/ItemDetailContainer';
import ItemDetail from '../ProductDetail/ItemDetail';

const Item = ({item}) => {
  const {title, price, image, stock, id} = item;

  const onAdd = (count) => {
    alert(`Agregaste ${count} productos`);
  }
    
  return (
    <div className='cards'>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p className='badge bg-success'>$ {price}</p>
      <button
        className='buttons'
        type='button'
        >
        Ver Detalle
      </button>
      <ItemCount
        stock={stock}
        onAdd={onAdd}
        initial={0} />
    </div>
  );
}

export default Item;