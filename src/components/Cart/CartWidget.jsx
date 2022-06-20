import React, { useContext } from 'react';
import { ItemsContext } from '../Context/CartContext';
import CartIcon from '../../assets/img/cart-icon.png';
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const {items} = useContext(ItemsContext);

  const totalItems = items.map( item => {
    return item.quantity;
  }).reduce( (init, current) => {
    return init + current;
  },0);

  return(
    <Link to='/cart' className='cart-container'>
      {items.length === 0 ? null : 
      <>
        <img src={CartIcon} alt="cart-icon" className='cart'/>
        <div className='logo--counter'><p>{totalItems}</p></div>
      </>}
    </Link>
  );
};

export default CartWidget;