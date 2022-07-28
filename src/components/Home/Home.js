import React from 'react'
import './Home.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


const Home = () => {
  return (
    <>
        <section className='home' id='home'>
          <div className='container'>
            <Swiper 
            className='wrapper'
            modules={[ Navigation, Pagination, Scrollbar, A11y, Autoplay ]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{delay:3000}}
            onChange={() => console.log('slide')}
            onSwiper={(swiper)=> console.log(swiper)}>
              <SwiperSlide className='slider'>
                <div className='content'>
                  <span>Our Special Dishes</span>
                  <h3>Spicy Noodles</h3>
                  <p>Sonia's Kitchen, a place where you access different kinds of delicious meals.</p>
                  <a href='#' className='btn'>Order Now</a>
                </div>
                <div className='image'>
                  <img src='/img/chefwithtray.svg' alt='' height='400px'/>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slider'>
                <div className='content'>
                  <span>Our Special Dishes</span>
                  <h3>Spicy Noodles</h3>
                  <p>Sonia's Kitchen, a place where you access different kinds of delicious meals.</p>
                  <a href='#' className='btn'>Order Now</a>
                </div>
                <div className='image'>
                  <img src='/img/lemburger.svg' alt=''/>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slider'>
                <div className='content'>
                  <span>Our Special Dishes</span>
                  <h3>Spicy Noodles</h3>
                  <p>Sonia's Kitchen, a place where you access different kinds of delicious meals.</p>
                  <a href='#' className='btn'>Order Now</a>
                </div>
                <div className='image'>
                  <img src='/img/salmon.svg' alt=''/>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slider'>
                <div className='content'>
                  <span>Our Special Dishes</span>
                  <h3>Spicy Noodles</h3>
                  <p>Sonia's Kitchen, a place where you access different kinds of delicious meals.</p>
                  <a href='#' className='btn'>Order Now</a>
                </div>
                <div className='image'>
                  <img src='/img/discount.svg' alt=''/>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slider'>
                <div className='content'>
                  <span>Our Special Dishes</span>
                  <h3>Spicy Noodles</h3>
                  <p>Sonia's Kitchen, a place where you access different kinds of delicious meals.</p>
                  <a href='#' className='btn'>Order Now</a>
                </div>
                <div className='image'>
                  <img src='/img/potians.svg' alt=''/>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slider'>
                <div className='content'>
                  <span>Our Special Dishes</span>
                  <h3>Spicy Noodles</h3>
                  <p>Sonia's Kitchen, a place where you access different kinds of delicious meals.</p>
                  <a href='#' className='btn'>Order Now</a>
                </div>
                <div className='image'>
                  <img src='/img/Gerald.svg' alt=''/>
                </div>
              </SwiperSlide>
              ...
            </Swiper>
          </div>
        </section>
    </>
  )
}

export default Home