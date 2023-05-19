import React from 'react'
import "./Social.scss"
import Iphone1 from "../../img/Iphone1.png"
import googleLogo from "../../img/google-logo.svg"
import Iphone2 from "../../img/Iphone2.png"

function Google() {
    return (
        <div className='google container'>
            <div className='google-wrapper'>
                <div className='google-list'>
                    <h2 className='google-title'>
                        <span>Экономьте</span> свое время <br />
                        и получайте <span>максимум</span> <br />
                        от ежедневных покупок
                    </h2>
                    <img className='google-link' src={googleLogo} alt="" />
                </div>
                <div className='google-list2'>
                    <img className='iphone-img' src={Iphone1} alt="" />
                    <img className='iphone-img2' src={Iphone2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Google