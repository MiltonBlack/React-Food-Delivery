import React from 'react'
import { FaStar, FaStarHalfAlt, FaQuoteRight } from 'react-icons/fa'
import './Review.css'
import { Swiper, SwiperSlide } from 'swiper/react'

const Review = () => {
  return (
    <section className='review' id='review'>Review
        <h3 className='sub-heading'> customer's review</h3>
        <h1 className='heading'>what they say</h1>
        <Swiper className='review-slider'
                spaceBetween={50}
                slidesPerView={3}
                onChange={() => console.log('slide')}
                onSwiper={(swiper)=> console.log(swiper)}>
            <div className='wrapper'>
                <SwiperSlide className='slide'>
                    <FaQuoteRight className='right'/>
                    <div className='user'>
                        <img src='Picture/azi.jpg' alt='' height='200px' />
                        <div className='user-info'>
                            <h3>Milton Azibapu</h3>
                            <div className='stars'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStarHalfAlt/>
                            </div>
                        </div>
                    </div>
                    <p>i love your services, i got my food right on time</p>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <FaQuoteRight className='right'/>
                    <div className='user'>
                        <img src='Picture/azi.jpg' alt='' height='200px' />
                        <div className='user-info'>
                            <h3>Milton Azibapu</h3>
                            <div className='stars'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStarHalfAlt/>
                            </div>
                        </div>
                    </div>
                    <p>i love your services, i got my food right on time</p>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <FaQuoteRight className='right'/>
                    <div className='user'>
                        <img src='Picture/azi.jpg' alt='' height='200px' />
                        <div className='user-info'>
                            <h3>Milton Azibapu</h3>
                            <div className='stars'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStarHalfAlt/>
                            </div>
                        </div>
                    </div>
                    <p>i love your services, i got my food right on time</p>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <FaQuoteRight className='right'/>
                    <div className='user'>
                        <img src='Picture/azi.jpg' alt='' height='200px' />
                        <div className='user-info'>
                            <h3>Milton Azibapu</h3>
                            <div className='stars'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStarHalfAlt/>
                            </div>
                        </div>
                    </div>
                    <p>i love your services, i got my food right on time</p>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <FaQuoteRight className='right'/>
                    <div className='user'>
                        <img src='Picture/azi.jpg' alt='' height='200px' />
                        <div className='user-info'>
                            <h3>Milton Azibapu</h3>
                            <div className='stars'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStarHalfAlt/>
                            </div>
                        </div>
                    </div>
                    <p>i love your services, i got my food right on time</p>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <FaQuoteRight className='right'/>
                    <div className='user'>
                        <img src='Picture/azi.jpg' alt='' height='200px' />
                        <div className='user-info'>
                            <h3>Milton Azibapu</h3>
                            <div className='stars'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStarHalfAlt/>
                            </div>
                        </div>
                    </div>
                    <p>i love your services, i got my food right on time</p>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <FaQuoteRight className='right'/>
                    <div className='user'>
                        <img src='Picture/azi.jpg' alt='' height='200px' />
                        <div className='user-info'>
                            <h3>Milton Azibapu</h3>
                            <div className='stars'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStarHalfAlt/>
                            </div>
                        </div>
                    </div>
                    <p>i love your services, i got my food right on time</p>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <FaQuoteRight className='right'/>
                    <div className='user'>
                        <img src='Picture/azi.jpg' alt='' height='200px' />
                        <div className='user-info'>
                            <h3>Milton Azibapu</h3>
                            <div className='stars'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStarHalfAlt/>
                            </div>
                        </div>
                    </div>
                    <p>i love your services, i got my food right on time</p>
                </SwiperSlide>
            </div>
        </Swiper>
    </section>
  )
}

export default Review