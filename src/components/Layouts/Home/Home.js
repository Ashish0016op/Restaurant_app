import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Banner from '../../Banner/Banner'
import './Home.css';
import MealCard from '../../MealCard/MealCard';
const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <MealCard/>
    </>
  )
}

export default Home
