import React from 'react'
import bg from '../../img/bg.png'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles


import './Abzor.scss'
function Abzor() {
  return (
<>
<div className='abzor'>
    <div className="container">
        <div className="abzor__wrapper">
          <h1 className='abzor__text'>
          Обзоры
          </h1>
            <ul className='abzor__list'>
                <li className='abzor__item'>
                  <img src={bg} alt="" />
<h1 className='abzor__text'>
  Обзор устаревших смартфонов
</h1>
<p className='abzor__item'>
Lorem ipsum dolor sit amet consectetur. Rhoncus risus  viverra enim nunc. 

</p>
<span className='btn__item'>Смотреть</span>
                </li>
                <li className='abzor__item'>
                <img src={bg} alt="" />
<h1 className='abzor__text'>
  Обзор устаревших смартфонов
</h1>
<p className='abzor__item'>
  Lorem ipsum dolor sit amet consectetur. Rhoncus risus  viverra enim nunc. 
</p>
<span className='btn__item'>Смотреть</span>
                </li>
                <li className='abzor__item'>
                <img src={bg} alt="" />
<h1 className='abzor__text'>
  Обзор устаревших смартфонов
</h1>
<p className='abzor__item'>
  Lorem ipsum dolor sit amet consectetur. Rhoncus risus  viverra enim nunc. 
</p>
<span className='btn__item'>Смотреть</span>
                </li>
                <li className='abzor__item'>
                <img src={bg} alt="" />
<h1 className='abzor__text'>
  Обзор устаревших смартфонов
</h1>
<p className='abzor__item'>
  Lorem ipsum dolor sit amet consectetur. Rhoncus risus  viverra enim nunc. 
</p>
<span className='btn__item'>Смотреть</span>
                </li>
            </ul>
        </div>
        </div>    
    </div>
    <div className="abzor1">
      <h3 className='abzor1__text1'>Обзоры</h3>
          <>
      <Swiper className="mySwiper">
        <SwiperSlide>     <li className='abzor__item'>
                  <img src={bg} alt="" />
<h1 className='abzor__text'>
  Обзор устаревших смартфонов
</h1>
<p className='abzor__item'>
Lorem ipsum dolor sit amet consectetur. Rhoncus risus  viverra enim nunc. 

</p>
<span className='btn__item'>Смотреть</span>
                </li></SwiperSlide>
        <SwiperSlide>     <li className='abzor__item'>
                  <img src={bg} alt="" />
<h1 className='abzor__text'>
  Обзор устаревших смартфонов
</h1>
<p className='abzor__item'>
Lorem ipsum dolor sit amet consectetur. Rhoncus risus  viverra enim nunc. 

</p>
<span className='btn__item'>Смотреть</span>
                </li></SwiperSlide>
        <SwiperSlide>     <li className='abzor__item'>
                  <img src={bg} alt="" />
<h1 className='abzor__text'>
  Обзор устаревших смартфонов
</h1>
<p className='abzor__item'>
Lorem ipsum dolor sit amet consectetur. Rhoncus risus  viverra enim nunc. 

</p>
<span className='btn__item'>Смотреть</span>
                </li></SwiperSlide>
     
      </Swiper>
    </>
    </div>
    </>
  )
}

export default Abzor