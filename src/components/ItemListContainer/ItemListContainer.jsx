import React, {Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemList from './ItemList';
import CategoryList from './CategoryList';
import { prod } from '../prod';

const ItemListContainer = () => {
  let { categoryid } = useParams();
  
  const [items, setItems] = useState([]);

  useEffect( () => {
    const data = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(prod);
      }, 1000);
    });
    data.then( data => setItems(data));
    data.catch( err => console.log(err));
  }, []);

  return (
    <Fragment>
      {categoryid ? (<CategoryList items={items} categoryid={categoryid}/>) : (<ItemList items={items}/>)}
    </Fragment>
  );
}

export default ItemListContainer