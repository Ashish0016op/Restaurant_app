import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import './Navbar.css';
const Navbar = () => {
  return (
    <div>
      <div className='nav_box'>
        <div>
            <p className='logo_heading'>ReactMeals</p>
        </div>
        <div className='nav_cart_box'>
            <div className='cart_icon'><FaCartShopping/></div>
            <p>Your Cart</p>
            <div className='cart_count'>0</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
