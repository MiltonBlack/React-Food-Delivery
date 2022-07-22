import React from 'react'
import { FaShippingFast, FaDollarSign, FaHeadset } from 'react-icons/fa'
import './About.css'

const About = () => {
  return (
    <section className='about' id='about'>
        <h3 className='sub-heading'>About Us</h3>
        <h1 className='heading'>Why Choose Us?</h1>
        <div className='row'>
            <div className='image'>
                <img src='/Picture/images.jpeg' alt='' height='300px'/>
            </div>
            <div className='content'>
                <h3>Best Food In Town</h3>
                <p>we deliver the best catering and food delivering services on campus, at your convienent
                    time.
                </p>
                <p>we operate in real time to ensure our customers are satisfied</p>
                <div className='icons-container'>
                    <div className='icons'>
                        <FaShippingFast className='ship'/>
                        <span>Free Delivery</span>
                    </div>
                    <div className='icons'>
                        <FaDollarSign className='dollar'/>
                        <span>Easy payments</span>
                    </div>
                    <div className='icons'>
                        <FaHeadset className='set'/>
                        <span>24/7 Services</span>
                    </div>
                </div>
                <a href='#' className='btn'>Learn More</a>
            </div>
        </div>
    </section>
  )
}

export default About