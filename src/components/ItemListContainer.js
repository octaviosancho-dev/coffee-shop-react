import React, {Fragment } from 'react';
import ItemCount from "./ItemCount";

const ItemListContainer = ({listado}) => {
    
    return (
        <Fragment>
            <h1 className="text-center">{listado}</h1>
            <ItemCount stock="5" initial="1"/>
        </Fragment>
    );
}

export default ItemListContainer;