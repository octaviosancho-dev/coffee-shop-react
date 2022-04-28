import lattelogo from '../assets/img/lattelogo1.png'
import '../../src/assets/css/Navbar.css'

function NavBar() {
  return (
    <div className="App">
        <nav className="d-flex flex-row flex-nowrap align-items-center justify-content-between w-100 bg-dark">
          <a href="index.html" className="m-3"><img src={lattelogo} alt="logo" className="logo"/></a>
          <div className="d-flex justify-content-center">
            <a href="index.html" className="m-3 text-decoration-none btn btn-outline-secondary">Inicio</a>
            <a href="index.html" className="m-3 text-decoration-none btn btn-outline-secondary">Tienda</a>
            <a href="index.html" className="m-3 text-decoration-none btn btn-outline-secondary">Nosotros</a>
            <a href="index.html" className="m-3 text-decoration-none btn btn-outline-secondary">Contacto</a>
            <a href="index.html" className="m-3 text-decoration-none btn btn-outline-secondary">Ubicación</a>
          </div>
          <button href="index.html" className="text-decoration-none btn btn-success m-3">CARRITO</button>
        </nav>
    </div>
  );  
}

export default NavBar;