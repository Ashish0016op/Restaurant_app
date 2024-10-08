

import { useState } from 'react';
import Home from './components/Layouts/Home/Home';
import Modal from './components/Modal/Modal';
import './index.css';
import CartContext from './store/cart-context';
function App() {
  const[openCart,setOpenCart]=useState(false);
  const[cartItem,setCartItem]=useState([]);

  return(
    <CartContext.Provider value={{openCart,setOpenCart,cartItem,setCartItem}}>
      <Home/>
      {openCart && <Modal/>}
    </CartContext.Provider>
  );
}

export default App;
