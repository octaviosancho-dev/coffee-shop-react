import React, {Fragment, useState, useEffect } from 'react';
import ItemList from './ItemList';
import prod from './prod';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    useEffect( () => {
        const data = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(prod);
            }, 2000);
        });
        data.then( data => setItems(data));
        data.catch( err => console.log(err));
    }, []);

    return (
        <Fragment>
            <ItemList items={items}/>
        </Fragment>
    );
}

export default ItemListContainer