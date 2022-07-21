import React from 'react'
import './Navbar.css'
import {FaBars, FaSearch, FaShoppingCart, FaStore} from 'react-icons/fa'

function Navbar() {
  return (
    <header>
      <a href="#" className='logo'><FaStore className='logos'/>Online Kitchen</a>
      <nav>
        <a href='#home'>home</a>
        <a href='#dishes'>dishes</a>
        <a href='#about'>about</a>
        <a href='#menu'>menu</a>
        <a href='#review'>review</a>
        <a href='#order'>order</a>
      </nav>
      <div className='icons'>
        <FaBars id='bars'/>
        <FaSearch id='search'/>
        <a href='#'><FaShoppingCart/></a>
      </div>
    </header>
  )
}

export default Navbar