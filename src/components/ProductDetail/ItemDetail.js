import { Fragment } from "react";
import ItemCount from "../ProductStore/ItemCount";

const ItemDetail = ({item}) => {

  const {description, image, price, title} = item;

  return(
    <div className='itemContainer w-75 mx-auto'>
      <div className='box'>
        <div>
          <img src={image} className="img-fluid"/>
        </div>
        <div>
          <h1 className="my-5">{title}</h1>
          <p>{description}</p>
          <h2 className='alert-success p-2 w-25 text-center border border-0 rounded my-4 text-nowrap'>$ {price}</h2>
          <div className='d-flex flex-row nowrap gap-2'>
            <button className='buttons m-0 my-5 w-75'>Comprar</button>
            <button className='buttons m-0 my-5 bg-secondary'>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;