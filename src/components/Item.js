import React from 'react';

const Item = ({item}) => {
    const {title, price, image} = item;
    
    return (
        <div className='cards'>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p className='badge bg-success'>$ {price}</p>
            <button className='buttons'>Ver</button>
        </div>
    );
}
 
export default Item;