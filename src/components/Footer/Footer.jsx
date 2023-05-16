import React from 'react'
import logo from '../../img/logo.png'
import './Footer.scss'
function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="main">
                    <div className="first">
                        <div className="top">
                            <img src={logo} alt="" /> <h2 className='footer__text'>Behoof</h2>
                        </div>
                        <div className="center">
                            < p className='center__item'>
                                Мы в соц сетях
                            </p>
                        </div>
                        <div className="button">
                            <i class="bi bi-instagram"></i>
                            <i class="bi bi-tiktok"></i>
                            <i class="bi bi-instagram"></i>
                            <i class="bi bi-telegram"></i>
                            <i class="bi bi-youtube"></i>
                        </div>
                    </div>
                    <div className="second">
                        <p>
                            Пользователю
                        </p>
                        <p>
                            Связаться с нами
                        </p>
                        <p>
                            Поддерка пользователей
                        </p>
                        <p>
                            FAQ & Руководства
                        </p>
                        <p>
                            Политика конфиденциальности
                        </p>
                        <p>
                            Пользовательское соглашение
                        </p>
                    </div>
                    <div className="third">
                        <p>
                            Популярные категории
                        </p>
                        <p>
                            Смартфоны
                        </p>
                        <p>
                            Teteras electricas
                        </p>
                        <p>
                            Стиральные машины
                        </p>
                        <p>
                            Телевизоры
                        </p>
                        <p>
                            Ноутбуки
                        </p>
                    </div>
                    <div className="last">
                        <p>
                            Команда Behoof
                        </p>
                        <p>
                        О нас
                        </p>
                        <p>
                        Работа у нас
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer