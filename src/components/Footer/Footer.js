import React from 'react'
import { 
    FaFacebook, 
    FaTwitter, 
    FaInstagram, 
    FaLinkedin, 
    FaPinterest, 
    FaCopyright, 
    FaLocationArrow, 
    FaWhatsapp, 
    FaEnvelope, 
    FaPhone } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <section className='footer'>Footer
        <div className='box-container'>
            <div className='box'>
                <h3>Locations <FaLocationArrow/></h3>
                <a href='#'>Otuoke</a>
                <a href='#'>Otuaba</a>
                <a href='#'>Main Campus</a>
                <a href='#'>Ewoi</a>
                <a href='#'>Emeyal 2</a>
            </div>
            <div className='box'>
                <h3>Quick Links</h3>
                <a href='#'>home</a>
                <a href='#'>dishes</a>
                <a href='#'>about</a>
                <a href='#'>menu</a>
                <a href='#'>review</a>
                <a href='#'>order</a>
            </div>
            <div className='box'>
                <h3>Contact Info</h3>
                <a href='#'> <FaWhatsapp/>09037289192</a>
                <a href='#'><FaEnvelope/>arzidrey@gmail.com</a>
                <a href='#'>Miltonblack</a>
                <a href='#'><FaPhone/>08066134428</a>
                <a href='#'>Ogbia, Otuoke - 12109</a>
            </div>
            <div className='box'>
                <h3>Follow Us@</h3>
                <a href='#'><FaFacebook/>Facebook</a>
                <a href='#'><FaTwitter/>Twitter</a>
                <a href='#'><FaInstagram/>Instagram</a>
                <a href='#'><FaLinkedin/>Linkedin</a>
                <a href='#'><FaPinterest/>Pinterest</a>
            </div>
        </div>
        <div className='credit'><FaCopyright/> Copyright @ 2022 by <span>MiltonBlack</span></div>
    </section>
  )
}

export default Footer