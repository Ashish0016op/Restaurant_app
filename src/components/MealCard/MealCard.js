import React from 'react';
import './MealCard.css';
const MealCard = () => {
    const meal=[
        {name:"Sushi",menu:"Finest Fish and Veggies",price:"$22.99"},
        {name:"Schnitzel",menu:"A german speciality!",price:"$16.50"},
        {name:"Barbecue Burger",menu:"American, raw, meaty",price:"$12.99"},
        {name:"Green Bowl",menu:"Healthy.... and green...",price:"$29.99"},
        {name:"Dominos",menu:"Fresh and Tasty Pizzas",price:"$24.99"},
    ]
  return (
    <div className='meal_container'>
      <div className='meal_box'>
        {
            meal.map((item,index)=>{
                return(
                    <div key={index}>
                        <p className='res_name'>{item.name}</p>
                        <p className='res_menu'>{item.menu}</p>
                        <p className='res_price'>{item.price}</p><hr/>
                    </div>
                )
            })
        }
        {/* <div>
            <p>Sushi</p>
            <p>Finest Fish and Veggies</p>
            <p>$22.99</p>
        </div><hr/>
        <div>
            <p>Sushi</p>
            <p>Finest Fish and Veggies</p>
            <p>$22.99</p>
        </div><hr/>
        <div>
            <p>Sushi</p>
            <p>Finest Fish and Veggies</p>
            <p>$22.99</p>
        </div><hr/>
        <div>
            <p>Sushi</p>
            <p>Finest Fish and Veggies</p>
            <p>$22.99</p>
        </div><hr/>
        <div>
            <p>Sushi</p>
            <p>Finest Fish and Veggies</p>
            <p>$22.99</p>
        </div><hr/> */}
      </div>
    </div>
  )
}

export default MealCard
