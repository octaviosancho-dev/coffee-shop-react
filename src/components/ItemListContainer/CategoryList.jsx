import React, { Fragment } from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';

const CategoryList = ({items, categoryid}) => {
  
  return(
    <Fragment>
      <h1 className='w-50 text-center mt-5'>{categoryid.charAt(0).toUpperCase() + categoryid.slice(1)}</h1> {/* agregar acentos dinamicamente */}
      <div className='itemContainer'>
        {items.map( item => {
          if( item.category === categoryid ) {
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
          }
        })}
      </div>
    </Fragment>
  )
}

export default CategoryList;