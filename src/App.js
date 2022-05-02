import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import '../src/assets/css/App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer listado={'Aqui va el listado...'}/>
    </div>
  );
}

export default App;
