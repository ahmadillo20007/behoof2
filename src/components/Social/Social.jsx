import React from 'react'
import './Social.scss'
import btn1 from '../../img/btn1.png'
import btn2 from '../../img/btn2.png'
import i from '../../img/iphone.png'
function Social() {
    return (
        <div className='social'>
            <div className="container">
                <div className="socialWrapper">
                    <div className="main">
                        <div className="top">
                            <h1 className='social__text'>
                                <span>Экономьте</span> свое время
                                и получайте <span>максимум</span>
                                от ежедневных покупок
                            </h1>
                        </div>
                        <div className="buttons">

                            <img className='btn__img' src={btn1} alt="" />


                            <img className='btn__img' src={btn2} alt="" />

                        </div>
                    </div>
                    <div className="imgs">
                        <img className='img1' src={i} alt="" />
                        <img className='img2' src={i} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social