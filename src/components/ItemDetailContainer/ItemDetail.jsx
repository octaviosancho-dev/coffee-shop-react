import React, { Fragment, useState, useContext } from 'react';
import { ItemsContext } from '../Context/CartContext';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {

  const {description, image, price, title, stock, id} = item;

  const [quantity, setQuantity] = useState(0);

  const {addItem, isInCart} = useContext(ItemsContext);
  

  const onAdd = count => {
    setQuantity(count);
  }

  return(
    <Fragment>
      <Link to='/shop'><button className='btn btn-outline-secondary m-3'>Volver a la Tienda</button></Link>
      <div className='itemContainer w-75 mx-auto'>
        <div className='box'>
          <div>
            <img src={image} alt='product-coffee' className="img-fluid"/>
          </div>
          <div>
            <h1 className="my-5">{title}</h1>
            <p>{description}</p>
            <div className='d-flex flex-row align-items-center justify-content-around'>
              <h2 className='alert-success p-2 w-25 text-center border border-0 rounded my-4 text-nowrap' style={{minWidth: 100}}>$ {price}</h2>
              <p className='text-muted p-2 my-4'>Quedan {stock} unidades!</p>
            </div>
            <div className='d-flex flex-row nowrap gap-2 justify-content-center align-items-end'>
              <Link className={ isInCart(id) ? ('') : ('w-100') } to='/cart'>
                {isInCart(id) ? <></> : (<button
                  className='buttons mt-3 w-100'
                  onClick={() => addItem(item, 1) } 
                  >Comprar
                </button>)}
              </Link>
              <div>
                {quantity === 0 ? 
                (<ItemCount
                  stock={stock}
                  onAdd={onAdd}
                  onClick={() => addItem(item, quantity) }
                  initial={0}
                />) : (<Link to='/cart'><button type='button' className='buttons-count' style={{backgroundColor: '#0f5132'}} onClick={() => addItem(item, quantity)}>Finalizar Compra</button></Link>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemDetail;