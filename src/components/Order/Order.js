import React from 'react'
import './Order.css'

function Order() {
  return (
    <section className='order' id='order'>Order
        <h3 className='sub-heading'>Order Now</h3>
        <h1 className='heading'>Free and Fast</h1>
        <form action=''>
            <div className='inputBox'>
                <div className='input'>
                    <span>Your Name</span>
                    <input type='text' name='' id='' placeholder='Enter your name'/>
                </div>
                <div className='input'>
                    <span>Your Number</span>
                    <input type='text' name='' id='' placeholder='Enter your number'/>
                </div>
            </div>
            <div className='inputBox'>
                <div className='input'>
                    <span>Your Order</span>
                    <input type='text' name='' id='' placeholder='Enter food name'/>
                </div>
                <div className='input'>
                    <span>Additional Spices/Beverage</span>
                    <input type='text' name='' id='' placeholder='Enter your name'/>
                </div>
            </div>
            <div className='inputBox'>
                <div className='input'>
                    <span>How Much</span>
                    <input type='text' name='' id='' placeholder='how many orders'/>
                </div>
                <div className='input'>
                    <span>Date and Time</span>
                    <input type='datetime-local' name='' id=''/>
                </div>
            </div>
            <div className='inputBox'>
                <div className='input'>
                    <span>Your Address</span>
                    <textarea type='text' name='' id='' placeholder='Enter your address' col='30' rows='10'></textarea>
                </div>
                <div className='input'>
                    <span>Your Message</span>
                    <textarea type='text' name='' id='' placeholder='Enter your message' col='30' rows='10'></textarea>
                </div>
            </div>
            <input type='submit' value='order Now' className='btn'/>
        </form>
    </section>
  )
}

export default Order