import React, {useState, createContext} from 'react';

export const ItemsContext = createContext()



export const ItemsProvider = ({children}) => {
  const [items, setItems] = useState([])

  const addItem = (item, quantity) => {
    setItems( [...items, {...item, ...{quantity}}] ); //! aca
  }

  const removeItem = (itemId) => {
    items.filter( item => item.id !== itemId)
  }

  const clear = () => {
    setItems([]);
  }

  const isInCart = id => {
    return items.find( item => item.id === id ? true : false)
  }

  console.log(items);
  
  return (
    <ItemsContext.Provider value={[addItem, removeItem, clear, isInCart]}>
      {children}
    </ItemsContext.Provider>
  );
}