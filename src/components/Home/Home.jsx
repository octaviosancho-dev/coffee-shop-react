import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <div className='home--text'>
        <h1>Everything starts with a coffee.</h1>
        <p>See our shop and get the best products!</p>
        <Link to='/shop'><button className='buttons buttons--home'>Shop</button></Link>
      </div>
      <div className='home--image'>
      </div>
    </div>
  );
}

export default Home;