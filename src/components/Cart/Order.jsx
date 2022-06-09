import React, {Fragment, useState, useContext} from 'react';
import { ItemsContext } from '../Context/CartContext';
import SuccessMsg from './SuccessMsg';
// Firebase - Firestore
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';


const OrderForm = () => {

  const {items} = useContext(ItemsContext);

  const initialState = {
    buyer: {
      name: '',
      lastName: '',
      email: '',
      phone: '',
      city: ''
    },
    items: [
      {
        id: '',
        title: '',
        price: ''
      }
    ],
    date: '',
    total: null
  }

  const [values, setValues] = useState(initialState);

  // Guardar ID de la orden
  const [orderID, setOrderID] = useState('');

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues( {...values, buyer: {[name]: value}} ); //! cada vez que escribo en el input, me borra las keys anteriores
    console.log(values);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const docRef = await addDoc(collection(db, "orders"), {
      values,
    });
    console.log("Document written with ID: ", docRef.id);
    setOrderID(docRef.id);
    setValues(initialState);
  };

  return (
    <Fragment>
      <div className='itemContainer'>
        <div className='boxOrder'>
          <h5>Finalice su compra aquí:</h5>
          <form className='orderForm' onSubmit={onSubmit}>
            <input
              placeholder='Nombre'
              name='name'
              value={values.name}
              onChange={handleOnChange}
            />
            <input
              placeholder='Apellido'
              name='lastName'
              value={values.lastName}
              onChange={handleOnChange}
            />
            <input
              placeholder='E-Mail'
              name='email'
              value={values.email}
              onChange={handleOnChange}
            />
            <input
              placeholder='Teléfono'
              name='phone'
              value={values.phone}
              onChange={handleOnChange}
            />
            <input
              placeholder='Ciudad'
              name='city'
              value={values.city}
              onChange={handleOnChange}
            />
            <button className='buttons mx-auto'>Comprar</button>
          </form>
          {orderID && <SuccessMsg orderID={orderID}/>}
        </div>
      </div>
    </Fragment>
  );
};

export default OrderForm;