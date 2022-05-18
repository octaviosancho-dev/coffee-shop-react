import React from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';


const CategoryList = ({items}) => {
  let { categoryid } = useParams();
  
  return(
    <div className='itemContainer'>
      {items.filter( item => {
        return(
          item.category === categoryid ? (
            <div key={item.id}>
              <Link
                to={`/item/${item.id}`}
                style={{textDecoration: 'none', color: '#333'}}
              >
                <Item key={item.id} item={item}/>
              </Link>
            </div>
          ) : null
        )
      })}
    </div>
  )
}

export default CategoryList;