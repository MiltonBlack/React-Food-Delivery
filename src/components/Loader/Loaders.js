import React from 'react'
import './Loaders.css'

const Loaders = () => {

  function loading() {
    document.querySelector('loader').classList.add('fade');
  }
  function Fade() {
    setInterval(loading, 3000);
  }
  window.onload = Fade;
  return (
    <div className='loader' onload={Fade()}>
        <img src='logo192.png' alt=''/>
    </div>
  )
}

export default Loaders