import lattelogo from '../../assets/img/lattelogo1.png'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'


import '../../assets/css/App.css'

const NavBar = () => {
  return (
    <div>
        <nav className="d-flex flex-row flex-nowrap align-items-center justify-content-between w-100 bg-light shadow-sm">
          <Link to='/'>
            <img src={lattelogo} alt="logo" className="logo m-3"/>
          </Link>
          <div className="d-flex justify-content-center">
            <ul className='d-flex flex-nowrap align-items-center justify-content-around m-0'>
              <Link to='/'><li className="m-3 text-decoration-none btn btn-outline-secondary">Inicio</li></Link>
              <Link to='/tienda'><li className="m-3 text-decoration-none btn btn-outline-secondary">Tienda</li></Link>
              <div className="dropdown m-3">
                <button className="text-decoration-none btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><Link to='/categorias/cafe' className="dropdown-item" href="#">Café</Link></li>
                  <li><Link to='/categorias/maquinas' className="dropdown-item" href="#">Máquinas</Link></li>
                  <li><Link to='/categorias/capsulas' className="dropdown-item" href="#">Cápsulas</Link></li>
                </ul>
              </div>
            </ul>
          </div>
          <a href="index.html" className="text-decoration-none m-3"><CartWidget/></a>
        </nav>
    </div>
  );  
}

export default NavBar;