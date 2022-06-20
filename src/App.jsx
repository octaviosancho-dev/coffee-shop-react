import React from 'react';
// Components
import NavBar from './components/Layout/NavBar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import OrderForm from './components/Cart/Order';
// Routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Context
import { ItemsProvider } from './components/Context/CartContext';

function App() {
  
  return (
  <ItemsProvider>  
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/categories/:categoryid' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<OrderForm/>}/>
      </Routes>
    </BrowserRouter>
  </ItemsProvider>
  );
};

export default App;
