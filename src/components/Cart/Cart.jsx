import React , { Fragment, useState, useContext } from 'react';
import { ItemsContext } from '../Context/CartContext';
import cartMug from '../../../src/assets/img/cart-mug.png';
import Spinner from '../Layout/Spinner';
import { Link } from 'react-router-dom';

const Cart = () => {

  const [loading, setLoading] = useState(true);

  const {items, removeItem} = useContext(ItemsContext);
console.log(items);
  setTimeout(() => {
    setLoading(false);
  }, 2500);

  let acum = 0;

  return (
    <Fragment>
      {loading ? (<Spinner/>) :
      <>
        <div className='itemContainer justify-content-start'>
          <div><h1>Su Compra:</h1></div>
          <div className='boxCart'>
            {items.length !== 0 ?
            <div className='cartList'>
              {items.map( item => {
                const pricePerProduct = item.price * item.quantity;
                acum = acum + pricePerProduct;
                return(
                <div key={item.id}>
                  <section className='boxCart--item'>
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
                      className='btn btn-danger btn-sm'
                      onClick={() => removeItem(item.id)}
                      >X
                      </button>
                    </div>
                  </section>
                  <div className='cartDivider'></div>
                </div>
                  
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
            <img src={cartMug} alt="cart" style={{width: '7vw', maxWidth: '120px'}}/>
            <h1 className='m-0 fs-3'>Total: $ {acum}</h1>
          </div> : null}
        </div>
        {items.length === 0 ? null : <div className='cartButton'><Link to='/order'><button className='buttons' style={{backgroundColor: '#198754'}}>Continuar Compra</button></Link></div>}
        
      </>}
    </Fragment>
  );
};

export default Cart;
