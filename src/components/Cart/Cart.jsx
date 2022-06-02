import React , { Fragment, useContext } from 'react';
import { ItemsContext } from '../Context/CartContext';
import cartMug from '../../../src/assets/img/cart-mug.png'
import { Link } from 'react-router-dom';

const Cart = () => {

  const {items, removeItem} = useContext(ItemsContext);

  let acum = 0;

  return (
    <Fragment>
      <div className='itemContainer'>
        <div className='boxCart'>
          {items.length !== 0 ?
          <div>
            {items.map( item => {
              const pricePerProduct = item.price * item.quantity;
              acum = acum + pricePerProduct;
              return(
                <section key={item.id} className='boxCart--item'>
                  <div>
                    {item.title}
                  </div>
                  <div className='text-nowrap text-muted'>
                    Cantidad: {item.quantity}
                  </div>
                  <div className='text-nowrap' style={{color: "#0f7032"}}>
                    $ {pricePerProduct}
                  </div>
                  <div>
                    <button
                    type='button'
                    className='btn btn-danger'
                    onClick={() => removeItem(item.id)}
                    >X
                    </button>
                  </div>
                </section>
              )
            })}
          </div> :
          <div className='d-flex flex-column align-items-center my-auto gap-4 text-center'>
            <img src={cartMug} alt="cart" style={{width: '15vw', maxWidth: '125px'}}/>
            <h1 className='fs-1 sm: fs-5'>Tu Carrito está Vacío :(</h1>
            <Link to='/shop'><button className='btn btn-outline-secondary m-3'>Volver a la Tienda</button></Link>
          </div>}
        </div>
        {items.length !== 0 ? <div className='box d-flex w-100 justify-content-between align-items-center'>
          <img src={cartMug} alt="cart" style={{width: '5vw', maxWidth: '125px'}}/>
          <h1 className='m-0 fs-3'>Total: $ {acum}</h1>
        </div> : null}
        
      </div>
    </Fragment>
  );
}

export default Cart;