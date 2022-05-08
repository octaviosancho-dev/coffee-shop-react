import React, { useState } from 'react';


const ItemCount = () => {

    // Stock provisorio
    const stock = 5;

    const [count, setCount] = useState(0);
    
    const decrementCount = () => {
        if(count === 0) {
            document.querySelector('#btnDecrement').classList.add('disabled');
            document.querySelector('#btnIncrement').classList.remove('disabled');
        } else {
            document.querySelector('#btnDecrement').classList.remove('disabled');
            document.querySelector('#btnIncrement').classList.remove('disabled');
            setCount( prevCount => prevCount - 1 );
        }
    }
    const incrementCount = () => {
        if (count === stock) {
            document.querySelector('#btnIncrement').classList.add('disabled');
            document.querySelector('#btnDecrement').classList.remove('disabled');
            
        } else {
            document.querySelector('#btnIncrement').classList.remove('disabled');
            document.querySelector('#btnDecrement').classList.remove('disabled');
            setCount( prevCount => prevCount + 1);
        }
    }

    return (
        <div className="d-block w-25 mx-auto">
            <div className="d-flex flex-container flex-column justify-content-center align-items-center">
                <div className='my-2'>
                    <button type="button" id="btnDecrement" className="btn btn-sm btn-outline-primary h-50 disabled" onClick={decrementCount}>-</button>
                    <span className="m-2 text-center">{count}</span>
                    <button type="button" id="btnIncrement" className="btn btn-sm btn-outline-primary h-50" onClick={incrementCount}>+</button>
                </div>
                <button className="btn btn-sm btn-primary m-2">Agregar al carrito</button>
            </div>
        </div>
    );
}
 
export default ItemCount;