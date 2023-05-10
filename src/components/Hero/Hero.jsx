import React from 'react'
import './Hero.scss'

function Hero() {
    return (
        <div className='hero'>
            <div className="container">
                <div className="hero__inner">
                    <div className="left">
                        <h1 className='hero__text'>
                            <span>1.8 млн</span> товаров в <span>2272</span> магазинах найди, сравни, выберай!
                        </h1>
                        <button className='left__btn'><p className='left__item'>Перейти к категориям  </p> <i class="bi bi-chevron-right icon"></i> </button>
                    </div>
                    <div className="right">
                        <h1 className='right__text'>
                            <span>Топ-10</span> смартфонов
                            2023 года
                        </h1>
                        <button className='left__btn t'><p className='left__item'>Смотреть  </p> <i class="bi bi-chevron-right icon"></i> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero