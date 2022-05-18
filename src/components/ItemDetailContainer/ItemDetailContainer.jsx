import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail';
import { prod } from '../prod';

const ItemDetailContainer = () => {
  
  let { id } = useParams();
  
  const [item, setItem] = useState({});

  useEffect( () => {
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(prod);
      }, 500);
    });
    getItem.then( data => setItem(data[id]))
  }, [id])
  
  return(
    <Fragment>
      <ItemDetail item={item}/>
    </Fragment>
  );
};

export default ItemDetailContainer;