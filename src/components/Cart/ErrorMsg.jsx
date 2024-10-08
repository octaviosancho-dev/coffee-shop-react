import React from 'react';
import Error from '../../assets/svg/error.svg';

const SuccessMsg = () => {
  return (
    <div className='msgContainer'>
      <div className='errorMsg'>
        <h5>Please, complete all fields.</h5>
      </div>
      <div>
        <img src={Error} alt="error-icon" style={{width: 40, margin: 10}}/>
      </div>
    </div>
  );
}

export default SuccessMsg;