import React from 'react';
import Item from './Item';
import { Link } from 'react-router-dom'


const ItemList = ({items}) => {
  return(
    <div className='itemContainer'>
      {items.map( item => {
        return(
          <div key={item.id}>
            <Link
              to={`/item/${item.id}`}
              style={{textDecoration: 'none', color: '#333'}}
            >
              <Item key={item.id} item={item}/>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default ItemList;