import NavBar from './components/Layout/NavBar';
import ItemListContainer from './components/ProductStore/ItemListContainer';
import ItemDetailContainer from './components/ProductDetail/ItemDetailContainer';
import '../src/assets/css/App.css';

function App() {

  return (
    <div className="app">
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
