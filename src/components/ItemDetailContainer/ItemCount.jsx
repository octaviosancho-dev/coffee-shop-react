import React, { useState, useContext } from 'react';
import { ItemsContext } from '../Context/CartContext';

const ItemCount = ({stock, initial, onAdd, item}) => {

  const {addItem} = useContext(ItemsContext);

  const [count, setCount] = useState(initial);

  const addProduct = num => {
    setCount(count + num);
  };
    
  return (
    <div className="d-block w-100 mx-auto pt-5">
      <div className="d-flex flex-container flex-column justify-content-center align-items-center">
        <div className='my-2'>
          <button
            className="btn btn-sm btn-outline-secondary h-50"
            onClick={() => addProduct(-1)}
            disabled={count === initial ? true : false}>
            -
          </button>
          <span className="m-2 text-center">{count}</span>
          <button
            className="btn btn-sm btn-outline-secondary h-50"
            onClick={() => addProduct(1)}
            disabled={count === stock ? true : false}>
            +
          </button>
        </div>
        <div>
        </div>
          <button
            className="buttons-count"
            onClick={() => {
              onAdd(count)
              addItem(item, count)
            }}
            
            disabled={stock === 0 || count === 0 ? true : false}>
            Agregar al carrito
          </button>
      </div>
    </div>
  );
};

export default ItemCount;