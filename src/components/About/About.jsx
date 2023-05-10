import React from 'react'
import './About.scss'
function About() {
  return (
    <div className='about'>
      <div className="container">
        <p className='about__item'>
          Наша цель - создать фантастический <br />
          сервис для всех потребителей
        </p>
        <div className="about__wrapper">
          <div className="i1">
            <h1>
              5
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Rhoncus risus nunc a pharetra viverra enim nunc.
            </p>
          </div>
          <div className="i2">
            <h1>
              30
            </h1>
            <p></p>
            Gravida vel convallis id aliquet volutpat nullam dignissim. Amet parturient elementum lectus rhoncus at.
          </div>
          <div className="i3">
<h1>
  300
</h1>
<p>
Sed varius ut venenatis id amet et consectetur pellentesque. Vitae urna ornare vel suspendisse tincidunt. 
</p>
          </div>
          <div className="i4">
<h1>
  8
</h1>
<p>
Id enim ornare lacus duis. Ac fermentum auctor cras adipiscing feugiat quis convallis velit. 
</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About