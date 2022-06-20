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
      <div className='itemContainer w-75 mx-auto'>
        <div className='box'>
          
            <img src={image} alt='product-coffee' className="img-fluid img-mobile"/>
          
          <div className='detail-mobile'>
            <h1 className="my-5">{title}</h1>
            <p>{description}</p>
            <div className='d-flex flex-row align-items-center justify-content-around'>
              <h2 className='alert-success p-2 w-25 text-center border border-0 rounded my-4 text-nowrap' style={{minWidth: 100}}>$ {price}</h2>
              <p className='text-muted p-2 my-4'>Quedan {stock} unidades!</p>
            </div>
            <div className='d-flex flex-row nowrap gap-2 justify-content-center align-items-end'>
              <Link className={ isInCart(id) ? ('') : ('d-flex justify-content-center text-decoration-none') } to='/cart'>
                {isInCart(id) ? <></> : (<button
                  className='buttons mt-3'
                  onClick={() => addItem(item, 1) } 
                  >Comprar
                </button>)}
              </Link>
              <div>
                {quantity === 0 ? 
                (<ItemCount
                  stock={stock}
                  onAdd={onAdd}
                  item={item}
                  initial={0}
                />) : (<Link to='/cart'><button type='button' className='buttons-count' style={{backgroundColor: '#0f5132'}}>Finalizar Compra</button></Link>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemDetail;