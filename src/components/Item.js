import React from 'react';
import ItemCount from './ItemCount';

const Item = ({item}) => {
    const {title, price, image, stock} = item;

    const onAdd = (count) => {
        alert(`Agregaste ${count} productos`);
    }
    
    return (
        <div className='cards'>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p className='badge bg-success'>$ {price}</p>
            <button className='buttons'>Ver Detalle</button>
            <ItemCount
                stock={stock}
                onAdd={onAdd}
                initial={0} />
        </div>
    );
}
 
export default Item;