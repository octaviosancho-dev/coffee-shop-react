import React, {Fragment, useState, useContext} from 'react';
import { ItemsContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import SuccessMsg from './SuccessMsg';
import ErrorMsg from './ErrorMsg';
import actualDate from '../../helpers/ActualDate';
// Firebase - Firestore
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';


const OrderForm = () => {

  const {items, clear} = useContext(ItemsContext);

  const [client, setClient] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    city: ''
  });

  const pricePerProduct = items.map( item => {
    return item.quantity * item.price;
  })

  const totalPrice = pricePerProduct.reduce( (prev, curr) => {
    return prev + curr;
  }, 0)

  const { name, lastName, email, phone, city } = client;

  const initialState = {
    buyer: {
      name: name,
      lastName: lastName,
      email: email,
      phone: phone,
      city: city
    },
    items: [...items],
    date: actualDate,
    total: totalPrice
  }

  const validForm = (clientData) => {
    const buyerData = Object.values(clientData);
    return buyerData.some( item => item === '');
  }

  const [values, setValues] = useState(initialState);
  // Guardar ID de la orden
  const [orderID, setOrderID] = useState('');

  const [error, setError] = useState(false);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setClient({
      ...client,
      [name]: value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if(validForm(client)) {
      setError(true);
    } else {
      const docRef = await addDoc(collection(db, "orders"), {values});
  
      console.log("Document written with ID: ", docRef.id);
      console.log(initialState);
      setOrderID(docRef.id);
      setValues(initialState);
      setError(false);
      clear();
    };
  }
  return (
    <Fragment>
      <div className='orderContainer'>
        <div className='boxOrder'>
          <h5>Ingrese sus datos para finalizar:</h5>
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
            <h4 className='mt-3'>Total: $ {totalPrice}</h4>
            <button
              className='buttons mx-auto'
              disabled={totalPrice === 0 ? true : false}
              >Comprar
            </button>
          </form>
          {error === true && <ErrorMsg/>}
          {orderID && <SuccessMsg orderID={orderID}/>}
        </div>
        {orderID && <Link to='/shop' className='mx-auto'><button className='btn btn-outline-secondary m-3'>Volver a la Tienda</button></Link>}
      </div>
    </Fragment>
  );
};

export default OrderForm;