import { createContext } from "react";

const CartContext = createContext({
  openCart: false,
  setOpenCart: () => {},
});

export default CartContext;
