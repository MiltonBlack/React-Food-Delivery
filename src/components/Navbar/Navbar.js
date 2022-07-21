import React, { useState } from 'react'
import './Navbar.css'
import {FaBars, FaHeart, FaSearch, FaShoppingCart, FaStore, FaTimes} from 'react-icons/fa'

function Navbar() {

const [menu, setMenu] = useState(true);
  return (
    <header>
      <a href="#" className='logo'><FaStore className='logos'/><span>Online Kitchen</span></a>
      <nav className={menu ? "none" : "active"}>
        <a href='#home' className='active'>home</a>
        <a href='#dishes'>dishes</a>
        <a href='#about'>about</a>
        <a href='#menu'>menu</a>
        <a href='#review'>review</a>
        <a href='#order'>order</a>
      </nav>
      <div className='icons'>
        <a href='#' onClick={() => setMenu(!menu)}>
          {menu ? <FaBars id='menu-bars' className='bars' /> : <FaTimes id='menu-close'/>}</a>
        <a href='#'>
          <FaSearch id='search' className='search'/></a>
        <a href='#' className='cart-wrapper'>
          <FaShoppingCart className='cart'/>
          <div className='overlay'>2</div>
        </a>
        <a href='#'><FaHeart id="fav" className='fav'/></a>
      </div>
    </header>
  )
}

export default Navbar