import coffeelogo from '../../assets/img/coffee-logo.png';
import CartWidget from '../Cart/CartWidget';
import { Link } from 'react-router-dom';
import '../../assets/css/App.css';

const NavBar = () => {
  return (
    <div className='d-block'>
        <nav className='navBar'>
          <Link to='/'>
            <img src={coffeelogo} alt="logo" className='logo'/>
          </Link>
          <div className="d-flex justify-content-center align-items-center navBar-mobile">
            <ul className='d-flex flex-nowrap align-items-center justify-content-around m-0'>
              <Link to='/' className='navLink'><li>Inicio</li></Link>
              <Link to='/shop' className='navLink'><li>Tienda</li></Link>
              <div class='dropdown'>
                <button class='dropbtn navLink'>Categorías</button>
                <div class='dropdown-content'>
                  <Link to='/categories/cafes' className='dropdown-item'>Café</Link>
                  <Link to='/categories/maquinas' className='dropdown-item'>Máquinas</Link>
                  <Link to='/categories/capsulas' className='dropdown-item'>Cápsulas</Link>
                </div>
              </div>
            </ul>
            <CartWidget/>
          </div>
        </nav>
        <div className="dropdown">
            <button className="btn dropdown-toggle dropbtn-mobile" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              <div></div>
              <div></div>
              <div></div>
            </button>
            <ul className="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton">
              <li><Link to='/' className="dropdown-item">Inicio</Link></li>
              <li><Link to='/shop' className="dropdown-item">Tienda</Link></li>
              <li><Link to='/categories/cafes' className='dropdown-item'>Café</Link></li>
              <li><Link to='/categories/maquinas' className='dropdown-item'>Máquinas</Link></li>
              <li><Link to='/categories/capsulas' className='dropdown-item'>Cápsulas</Link></li>
            </ul>
          </div>
    </div>
  );  
};

export default NavBar;