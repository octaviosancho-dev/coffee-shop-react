import React from 'react';
import Check from '../../assets/svg/success-check.svg';

const SuccessMsg = ({orderID}) => {
  return (
    <div className='successContainer'>
      <div className='successMsg'>
        <h5>Gracias por su compra! Su número de Orden es: {orderID}</h5>
      </div>
      <div>
        <img src={Check} alt="check-icon" style={{width: 40, margin: 10}}/>
      </div>
    </div>
  );
}

export default SuccessMsg;