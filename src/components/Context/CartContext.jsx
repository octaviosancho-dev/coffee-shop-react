import React, {useState, createContext} from 'react';

export const ItemsContext = createContext()



export const ItemsProvider = ({children}) => {
  const [items, setItems] = useState([])

  const addItem = (item, quantity) => {
    const inCart = items.find( itemIn => itemIn.id === item.id)

    if(inCart) {
      setItems(
        items.map( (itemIn) => {
          if(itemIn.id === item.id) {
            return { ...inCart, quantity: inCart.quantity + quantity}
          }
        })
      )
    } else {
      setItems([...items, {...item, quantity}])
    }
  }

  const removeItem = itemId => {
    return setItems(items.filter( item => item.id !== itemId))
  }

  const clear = () => {
    setItems([]);
  }

  const isInCart = id => {
    return items.find( item => item.id === id )
  }

  console.log(items);
  
  return (
    <ItemsContext.Provider value={{items, addItem, removeItem, clear, isInCart}}>
      {children}
    </ItemsContext.Provider>
  );
}