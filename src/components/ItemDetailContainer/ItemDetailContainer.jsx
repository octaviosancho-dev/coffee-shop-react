import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail';
import Spinner from '../Layout/Spinner';

// Firebase - Firestore
import { collection, query, getDocs, where, documentId } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const ItemDetailContainer = () => {
  
  let { id } = useParams();
  
  const [item, setItem] = useState({});
  const [loading, isLoading] = useState(true);

  useEffect( () => {

    const getItem = async (idParam) => {
      const q = query(collection(db, 'products'), where('id', '==', parseInt(idParam))); //td documentId()
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      
      setItem(docs[0]);
    }

    getItem(id);

    setTimeout(() => {
      isLoading(false);
    }, 1000);
    
  }, [id]);
  
  return(
    <Fragment>
      {loading ? <Spinner/> : <ItemDetail item={item}/>}
    </Fragment>
  );
};

export default ItemDetailContainer;