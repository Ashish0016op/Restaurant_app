import React from "react";
import MealImg from "../../assets/meals.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <div className="banner_box"></div>
      <div className="s_box">
      <div className="summary_card_box">
        <div className="card_content">
          <div>
            <p className="summ_heading">Delicious Food, Delivered To You</p>
          </div>
          <div>
            <p>
              Choose your favorite meal from our broad selection of available
              meals and enjoy a delicious lunch or dinner at home.
            </p>
          </div>
          <div>
            <p>
              All our meals are cooked with high-quality ingredients,
              just-in-time and of course by experienced chefs!
            </p>
          </div>
        </div>
      </div>
      </div>
      {/* <div className="sum_card">
      <div class="card">
        <p>
          A glass-like card to demonstrate the{" "}
          <strong>Glassmorphism UI design</strong> trend.
        </p>
        <p class="card-footer">Created by Rahul C.</p>
      </div>
      </div> */}
      
    </>
  );
};

export default Banner;
