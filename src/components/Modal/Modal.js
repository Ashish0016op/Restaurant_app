import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';
import CartContext from '../../store/cart-context';

const Modal = () => {
  const overlay = document.getElementById('overlays');
  const ctx = useContext(CartContext);

  const closeCartHandler = () => {
    ctx.setOpenCart(false);
  };
  let totalAmount = 0;
for (let i = 0; i < ctx.cartItem.length; i++) {
  totalAmount += ctx.cartItem[i].price * ctx.cartItem[i].quantity;
}

  return createPortal(
    <div className='modal'>
      <div className='modal-content'>
        {ctx.cartItem.length > 0 ? (
          <>
            {ctx.cartItem.map((item, index) => (
              <div key={index} className='cart-item'>
                <p className='cart_res_name'>{item.name}</p>
                <p className='cart_item_qty'>x {item.quantity}</p>
                <p className='cart_item_price'>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <div className='cart_amt_box'>
              <div><p>Total Amount</p></div>
              <div>${totalAmount.toFixed(2)}</div>
            </div>
            <div className='cart_btn_box'>
              <button onClick={closeCartHandler}>Close</button>
              <button>Order</button>
            </div>
          </>
        ) : (
          <>
          <p>Your cart is empty!</p>
          <button className='close_btn' onClick={closeCartHandler}>Close</button>
          </>
        )}
      </div>
    </div>,
    overlay
  );
};

export default Modal;
