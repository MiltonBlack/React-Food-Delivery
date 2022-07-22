import React from 'react'
import {FaStar, FaStarHalf, FaEye} from 'react-icons/fa'
import {GiHeartDrop} from 'react-icons/gi'
import './Dishes.css'

const Dishes = () => {
  return (
    <section className='dishes' id='dishes'>
        <h3 className='sub-heading'>Our Dishes</h3>
        <h1 className='heading'>Popular Dishes</h1>
        <div className='box-container'>
            <div className='box'>
                <a href='#' className=''><GiHeartDrop className='heart'/></a>
                <a href='#' className=''><FaEye className='eye'/></a>
                <img src='/img/discount.svg' alt='' height='200px'/>
                <h3>tasty Foods</h3>
                <div className='stars'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStarHalf/>
                </div>
                <span>$15.99</span>
                <a href='#' className='btn'>Add to Cart</a>
            </div>
            <div className='box'>
                <a href='#' className=''><GiHeartDrop className='heart'/></a>
                <a href='#' className=''><FaEye className='eye'/></a>
                <img src='/img/discount.svg' alt='' height='200px'/>
                <h3>tasty Foods</h3>
                <div className='stars'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStarHalf/>
                </div>
                <span>$15.99</span>
                <a href='#' className='btn'>Add to Cart</a>
            </div>
            <div className='box'>
                <a href='#' className=''><GiHeartDrop className='heart'/></a>
                <a href='#' className=''><FaEye className='eye'/></a>
                <img src='/img/discount.svg' alt='' height='200px'/>
                <h3>tasty Foods</h3>
                <div className='stars'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStarHalf/>
                </div>
                <span>$15.99</span>
                <a href='#' className='btn'>Add to Cart</a>
            </div>
            <div className='box'>
                <a href='#' className=''><GiHeartDrop className='heart'/></a>
                <a href='#' className=''><FaEye className='eye'/></a>
                <img src='/img/discount.svg' alt='' height='200px'/>
                <h3>tasty Foods</h3>
                <div className='stars'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStarHalf/>
                </div>
                <span>$15.99</span>
                <a href='#' className='btn'>Add to Cart</a>
            </div>
            <div className='box'>
                <a href='#' className=''><GiHeartDrop className='heart'/></a>
                <a href='#' className=''><FaEye className='eye'/></a>
                <img src='/img/discount.svg' alt='' height='200px'/>
                <h3>tasty Foods</h3>
                <div className='stars'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStarHalf/>
                </div>
                <span>$15.99</span>
                <a href='#' className='btn'>Add to Cart</a>
            </div>
            <div className='box'>
                <a href='#' className=''><GiHeartDrop className='heart'/></a>
                <a href='#' className=''><FaEye className='eye'/></a>
                <img src='/img/discount.svg' alt='' height='200px'/>
                <h3>tasty Foods</h3>
                <div className='stars'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStarHalf/>
                </div>
                <span>$15.99</span>
                <a href='#' className='btn'>Add to Cart</a>
            </div>
        </div>
    </section>
  )
}

export default Dishes