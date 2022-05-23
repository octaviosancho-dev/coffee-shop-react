import React, { Fragment, useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {

  const {description, image, price, title, stock} = item;

  const [quantity, setQuantity] = useState(0);

  const onAdd = count => {
    //alert(`Agregaste ${count} productos`);
    setQuantity(count);
    console.log(count);
  }

  return(
    <Fragment>
      <Link to='/tienda'><button className='btn btn-outline-secondary m-3'>Volver a la Tienda</button></Link>
      {item.description ? (
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
                <p className='text-muted p-2 my-4'>Solo quedan {stock} unidades!</p>
              </div>
              <div className='d-flex flex-row nowrap gap-2 justify-content-around align-items-end'>
                <button className='buttons mt-3 w-75'>Comprar</button>
                <ItemCount
                  stock={stock}
                  onAdd={onAdd}
                  initial={0}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null }
    </Fragment>
  );
};

export default ItemDetail;