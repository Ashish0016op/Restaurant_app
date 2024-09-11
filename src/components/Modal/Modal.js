import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';
import CartContext from '../../store/cart-context';
const Modal = () => {
  const overlay = document.getElementById('overlays');
  const ctx=useContext(CartContext);
  const closeCartHandler=()=>{
    ctx.setOpenCart(false);
  }
  return createPortal(
    <div className='modal'>
        <div className='modal-content'>
            <div><p className='cart_res_name'>Sushi</p></div>
            <div className='cart_amt_box'>
              <div><p>Total Amount</p></div>
              <div>35.62</div>
            </div>
            <div className='cart_btn_box'>
              <button onClick={closeCartHandler}>Close</button>
              <button>Order</button>
            </div>
        </div>
    </div>,
    overlay
  );
};

export default Modal;
