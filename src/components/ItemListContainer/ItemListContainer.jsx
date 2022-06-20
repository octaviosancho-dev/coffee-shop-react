import React, {Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemList from './ItemList';
import Spinner from '../Layout/Spinner';

// Firebase - Firestore
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const ItemListContainer = () => {
  let { categoryid } = useParams();
  
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    setLoading(true);

    const getData = async category => {
      const q = query(collection(db, 'items'));
      const docs = [];
      const querySnapshot = await getDocs(q);
      
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      const filteredProducts = docs.filter( doc => doc.category === category);

      if(categoryid === undefined) {
        setItems(docs);
      } else {
        setItems(filteredProducts);
      }

      setTimeout(() => {
        setLoading(false);
      }, 3500);
    };

    getData(categoryid);

  }, [categoryid]);


  return (
    <Fragment>
      {loading ? <Spinner/> : <ItemList items={items}/>}
    </Fragment>
  );
};

export default ItemListContainer