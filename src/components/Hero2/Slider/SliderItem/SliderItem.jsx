import React, { useState } from 'react'
import iphone from '../../../../img/img1.png'
import './SliderItem.scss'
import { SliderItemMain, SliderItemTop, SliderItemWrapper, SliderProgress, SliderProgressWrapper } from './Stayled'

function SliderItem() {
  const arr = [1, 2, 3, 4, 5]
  const [Design, setDesign] = useState(4)
  const [Power, setpower] = useState(2)
  const [Display, setdisplay] = useState(4)
  const [Camera, setcamera] = useState(5)
  const [Answer, setAnswer] = useState(5)
  const [Partability, setPartability] = useState(4)
  return (
    <>
   <div>
   <SliderItemWrapper>
        <SliderItemTop>
          <div className='SliderItem1'>
            <p>
              Портативные колонки
            </p>
            <h4>
              Apple iPhone 13 Pro Max 256 ГБ серый
            </h4>
          </div>
          <div>
            <button>
              <i className='bi bi-heart '></i>
            </button>
            <button>
              <i className='bi bi-bar-chart-line'></i>

            </button>
          </div>
        </SliderItemTop>
        <SliderItemMain>
          <img src={iphone} alt="" />
          <SliderProgressWrapper>
            <SliderProgress>
            <p>
              Дизайн
            </p>

    <div>
    {
        arr?.map((item,index)=>(
<span className={Design >= index+1 ? 'active':null}></span>
        ))
       }
    </div>
            </SliderProgress>
            <SliderProgress>
            <p>
            Батарея
            </p>

    <div>
    {
        arr?.map((item,index)=>(
<span className={Power >= index+1 ? 'active':null}></span>
        ))
       }
    </div>
            </SliderProgress>
            <SliderProgress>
            <p>
            Дисплей
            </p>

    <div>
    {
        arr?.map((item,index)=>(
<span className={Display >= index+1 ? 'active':null}></span>
        ))
       }
    </div>
            </SliderProgress>
            <SliderProgress>
            <p>
            Камера
            </p>

    <div>
    {
        arr?.map((item,index)=>(
<span className={Camera >= index+1 ? 'active':null}></span>
        ))
       }
    </div>
            </SliderProgress>
            <SliderProgress>
            <p>
            Ответ
            </p>

    <div>
    {
        arr?.map((item,index)=>(
<span className={Answer >= index+1 ? 'active':null}></span>
        ))
       }
    </div>
            </SliderProgress>
            <SliderProgress>
            <p>
            Портативность
            </p>

    <div>
    {
        arr?.map((item,index)=>(
<span className={Partability >= index+1 ? 'active':null}></span>
        ))
       }
    </div>
            </SliderProgress>
          </SliderProgressWrapper>
        </SliderItemMain>
      </SliderItemWrapper>
   </div>
   </>
  )
}

export default SliderItem