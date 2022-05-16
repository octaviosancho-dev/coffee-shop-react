import React, { Fragment, useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { prod } from '../prod';

const ItemDetailContainer = () => {
  
  const [item, setItem] = useState({});

  useEffect( () => {
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(prod);
      }, 2000);
    });
    getItem.then( data => setItem(data[3])) //! En esta parte no logre pasar la info dinamicamente al apretar el boton de "Ver detalle"
    getItem.then()
  }, [])
  
  return(
    <Fragment>
      <ItemDetail item={item}/>
    </Fragment>
  );
};

export default ItemDetailContainer;