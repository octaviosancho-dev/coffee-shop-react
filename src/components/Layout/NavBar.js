import lattelogo from '../../assets/img/lattelogo1.png'
import CartWidget from './CartWidget';

import '../../assets/css/App.css'

const NavBar = () => {
  return (
    <div>
        <nav className="d-flex flex-row flex-nowrap align-items-center justify-content-between w-100 bg-light shadow-sm">
          <a href="index.html" className="m-3"><img src={lattelogo} alt="logo" className="logo"/></a>
          <div className="d-flex justify-content-center">
            <a href="index.html" className="m-3 text-decoration-none btn btn-outline-secondary">Inicio</a>
            <a href="index.html" className="m-3 text-decoration-none btn btn-outline-secondary">Categorías</a>
          </div>
          <a href="index.html" className="text-decoration-none m-3"><CartWidget/></a>
        </nav>
    </div>
  );  
}

export default NavBar;