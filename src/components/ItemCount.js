import React, { useState } from 'react';


const ItemCount = ({stock, initial, onAdd}) => {
    // Stock inicial igual a 5
    

    const [count, setCount] = useState(initial);

    const addProduct = num => {
        setCount(count + num);
    }
    

    return (
        <div className="d-block w-100 mx-auto">
            <div className="d-flex flex-container flex-column justify-content-center align-items-center">
                <div className='my-2'>
                    <button
                        className="btn btn-sm btn-outline-secondary h-50"
                        onClick={() => addProduct(-1)}
                        disabled={count === initial ? true : false}>
                        -
                    </button>
                    <span className="m-2 text-center">{count}</span>
                    <button
                        className="btn btn-sm btn-outline-secondary h-50"
                        onClick={() => addProduct(1)}
                        disabled={count === stock ? true : false}>
                        +
                    </button>
                </div>
                <button
                    className="btn btn-sm btn-secondary m-3"
                    onClick={() => {onAdd(count)}}
                    disabled={stock === 0 ? true : false}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}

export default ItemCount;