import NavBar from './components/Layout/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CategoryList from './components/ItemListContainer/CategoryList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/tienda' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/categorias/:categoryid' element={<CategoryList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
