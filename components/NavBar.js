import React from 'react'
import './App.css';

const NavBar = () => {
  return (
    <div className='nav'>
        <div className='logo'>
            <img src='https://flowbite.com/docs/images/logo.svg'></img>
            <span>GeekFoods</span>
        </div>
        <ul style={{fontSize: "1rem"}}>
            <li className='home'>Home</li>
            <li className='quote'>Quote</li>
            <li>Restaurants</li>
            <li>Food</li>
            <li>Contact</li>
        </ul>
        <div>
            <button className='getStartedBtn'>Get Started</button>
        </div>
    </div>
  )
}

export default NavBar