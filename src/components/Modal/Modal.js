import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';
const Modal = () => {
  const overlay = document.getElementById('overlays');

  return createPortal(
    <div className='modal'>
        <div className='modal-content'>
            <div><p className='cart_res_name'>Sushi</p></div>
            <div className='cart_amt_box'>
              <div><p>Total Amount</p></div>
              <div>35.62</div>
            </div>
            <div className='cart_btn_box'>
              <button>Close</button>
              <button>Order</button>
            </div>
        </div>
    </div>,
    overlay
  );
};

export default Modal;
