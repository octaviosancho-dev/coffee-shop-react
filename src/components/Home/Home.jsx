import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <div className='home--text'>
        <h1>Todo comienza con un Café.</h1>
        <p>Acceda a nuestra tienda y llevese los mejores productos!</p>
        <Link to='/shop'><button className='buttons buttons--home'>Ver Tienda</button></Link>
      </div>
      <div className='home--image'>
      </div>
    </div>
  );
}

export default Home;