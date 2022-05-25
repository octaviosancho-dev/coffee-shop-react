import React, {useState, createContext} from 'react';

export const ItemsContext = createContext()



export const ItemsProvider = ({children}) => {
  const [items, setItems] = useState([])

  //! Context methods?

  const addItem = (item, quantity) => {
    setItems([{...item, ...{quantity}}]);
  }

  const removeItem = (itemId) => {

  }

  const clear = () => {
    setItems([]);
  }

  const isInCart = (id) => {
    items.map( (item) => item.id === id ? true : false )
  }

  console.log(items);
  return (
    <ItemsContext.Provider value={[items, setItems, addItem]}>
      {children}
    </ItemsContext.Provider>
  );
}