import React from 'react'
import img1 from '../../img/img1.png'
import img2 from '../../img/img2.png'
import img3 from '../../img/img3.png'
import img4 from '../../img/img4.png'
import img5 from '../../img/img5.png'
import img6 from '../../img/img6.png'
import img7 from '../../img/img7.png'
import img8 from '../../img/img8.png'

import './Hero2.scss'

function Hero2() {
    return (
        <div className='hero2'>
            <div className="container">
                <div className="hero2__wrapper">
                    <h1 className='hero2__text'>
                        Лучший выбор
                    </h1>
                    <ul className='header__list'>
                        <li className='hero2__div'>
                            <center>
                                <img className='img1' src={img1} alt="" />
                            </center>
                            <p className='hero2__text__item'>
                                Смартфоны
                            </p>
                        </li>
                        <li className='hero2__div'>
                            <center>
                                <img className='img1' src={img2} alt="" />
                            </center>
                            <p className='hero2__text__item'>
                                Ноутбуки
                            </p>
                        </li>
                        <li className='hero2__div'>
                            <center>
                                <img className='img1' src={img3} alt="" />
                            </center>
                            <p className='hero2__text__item'>
                                Планшеты
                            </p>
                        </li>
                        <li className='hero2__div'>
                            <center>
                                <img className='img1' src={img4} alt="" />
                            </center>
                            <p className='hero2__text__item'>
                                Умные часы
                            </p>
                        </li>
                        <li className='hero2__div'>
                            <center>
                                <img className='img1' src={img5} alt="" />
                            </center>
                            <p className='hero2__text__item'>
                                Игровые приставки
                            </p>
                        </li>
                        <li className='hero2__div'>
                            <center>
                                <img className='img1' src={img6} alt="" />
                            </center>
                            <p className='hero2__text__item'>
                                Наушники
                            </p>
                        </li>
                        <li className='hero2__div'>
                            <center>
                                <img className='img1' src={img7} alt="" />
                            </center>
                            <p className='hero2__text__item'>
                                Портативные
                                колонки
                            </p>
                        </li>
                        <li className='hero2__div'>
                            <center>
                                <img className='img1' src={img8} alt="" />
                            </center>
                            <p className='hero2__text__item'>
                                Аксесуары
                            </p>
                        </li>

                    </ul>
                    <div className="button__inner">
                        <button className='about__btn'>Дизайн</button>
                        <button className='about__btn'>Портативность</button>
                        <button className='about__btn'>Камера</button>
                        <button className='about__btn'>Ответ</button>
                        <button className='about__btn'>Дисплей</button>
                        <button className='about__btn'>Батарея</button>

                    </div>
                    <ul className="swipper">
                        <li className='swipper__item'>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hero2