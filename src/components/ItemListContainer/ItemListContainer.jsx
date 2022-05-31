import React, {Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemList from './ItemList';
import { prod } from '../prod';
import Spinner from '../Layout/Spinner';

const ItemListContainer = () => {
  let { categoryid } = useParams();
  
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const consumeData = category => {
    return new Promise((resolve, reject) => {
      const filteredProducts = prod.filter( prod => prod.category === category);

      setTimeout(() => {
        if(categoryid === undefined) {
          resolve(prod);
        } else {
          resolve(filteredProducts);
        }
      }, 1000);
    });
  }

  useEffect( () => {
    setLoading(true);

    consumeData(categoryid)
      .then( data => setItems(data))
      .catch( err => console.log(err));
  }, [categoryid]);

  consumeData(categoryid)
    .then(() => setLoading(false));

  return (
    <Fragment>
      {loading ? <Spinner/> : <ItemList items={items}/>}
    </Fragment>
  );
}

export default ItemListContainer