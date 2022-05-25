import NavBar from './components/Layout/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemsProvider } from './components/Context/CartContext';


function App() {
  
  return (
  <ItemsProvider>  
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/shop' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/categories/:categoryid' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
      </Routes>
    </BrowserRouter>
  </ItemsProvider>
  );
}

export default App;
