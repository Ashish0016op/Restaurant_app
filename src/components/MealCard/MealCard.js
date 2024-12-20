import React, { useContext } from "react";
import "./MealCard.css";
import CartContext from "../../store/cart-context";
import { ToastContainer, toast,Bounce } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
const MealCard = () => {
  const ctx = useContext(CartContext);
  const notify = () => toast.success('🦄 Added To Cart!', {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
    });;
  const meal = [
    { id: "m1", name: "Sushi", menu: "Finest Fish and Veggies", price: 22.99 },
    { id: "m2", name: "Schnitzel", menu: "A German speciality!", price: 16.5 },
    { id: "m3", name: "Barbecue Burger", menu: "American, raw, meaty", price: 12.99 },
    { id: "m4", name: "Green Bowl", menu: "Healthy.... and green...", price: 29.99 },
    { id: "m5", name: "Dominos", menu: "Fresh and Tasty Pizzas", price: 24.99 },
  ];

  const handleAddToCart = (item) => {
    ctx.setCartItem((prevItems) => {
      const existingCartItemIndex = prevItems.findIndex(cartItem => cartItem.id === item.id);
      
      if (existingCartItemIndex !== -1) {
        const updatedCartItems = [...prevItems];
        updatedCartItems[existingCartItemIndex].quantity += 1;
        return updatedCartItems;
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <div className="meal_container">
      <div className="meal_box">
        {meal.map((item) => {
          return (
            <div key={item.id}>
              <div className="res_box">
                <div>
                  <p className="res_name">{item.name}</p>
                  <p className="res_menu">{item.menu}</p>
                  <p className="res_price">${item.price.toFixed(2)}</p>
                </div>
                <form 
                  className="res_add_box" 
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleAddToCart(item);
                  }}
                >
                  <div className="res_amount">
                    <p>Quantity</p>
                    <div className="input_box">
                      <div>1</div>
                    </div>
                  </div>
                  <button type="submit" onClick={notify} className="add_btn">+ Add</button>
                </form>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
      <ToastContainer />
    </div>
  );
};

export default MealCard;
