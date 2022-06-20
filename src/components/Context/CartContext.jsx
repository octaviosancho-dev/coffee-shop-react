import React, {useState, createContext} from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = ({children}) => {
  const [items, setItems] = useState([]);

  const addItem = (item, quantity) => {
    if(isInCart(item.id)) {
      const index = items.findIndex( e => e.id === item.id);
      items[index].quantity = items[index].quantity + quantity;
      setItems([...items]);
    } else {
      setItems([...items, { ...item, quantity }])
    }
  };

  const removeItem = itemId => {
    return setItems(items.filter( item => item.id !== itemId));
  };

  const clear = () => {
    setItems([]);
  };

  const isInCart = id => {
    return items.find( item => item.id === id );
  };
  
  return (
    <ItemsContext.Provider value={{items, addItem, removeItem, clear, isInCart}}>
      {children}
    </ItemsContext.Provider>
  );
};