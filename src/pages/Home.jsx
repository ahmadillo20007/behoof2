import React from 'react'
import About from '../components/About/About'
import Abzor from '../components/Abzor/Abzor'
import Footer from '../components/Footer/Footer'

import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Hero2 from '../components/Hero2/Hero2'
import New from '../components/New/New'
import Social from '../components/Social/Social'

function Home() {
  return (
    <div>
      <Header />
       <Hero />
      <Hero2 />
      <About />
      <Social/>
      <New />
     <Abzor/>
     <Footer/>
    </div>
  )
}

export default Home