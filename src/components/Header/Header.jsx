import React from 'react'
import logo from '../../img/logo.png'
import './Header.scss'
function Header() {
  return (
    <div className='header'>
        <div className="container">
            <div className="navbar">
                <img className='headre__img' src={logo} alt="" />
                <h1 className='header__text'>
                Behoof
                </h1>
                <p className='header__item'>
                Лучшие цены <br />
в интернет-магазинах 
                </p>
                <select className='header__select' name="" id="">
                    <option className='header__select__item' value="Каталог товаров">Каталог товаров</option>
                </select>
                <input className='header__inp' placeholder='Поиск товаров' type="text" />
             <div className="buttons">
             <button className='header__btn1'> <i class="bi bi-suit-heart"></i></button>
                <button className='header__btn2'> <i class="bi bi-bar-chart"></i></button>
                <button className='header__btn3'> <i class="bi bi-person"></i></button> 
             </div>
            </div>
        </div>
    </div>
  )
}

export default Header
