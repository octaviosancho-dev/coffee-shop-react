import React from 'react';
import Check from '../../assets/svg/success-check.svg';

const SuccessMsg = ({orderID}) => {
  return (
    <div className='msgContainer'>
      <div className='successMsg'>
        <h5>Thank you for your purchase! Your order number is: {orderID}</h5>
      </div>
      <div>
        <img src={Check} alt="check-icon" style={{width: 40, margin: 10}}/>
      </div>
    </div>
  );
}

export default SuccessMsg;