import React from 'react'
import About from '../components/About/About'

import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Hero2 from '../components/Hero2/Hero2'

function Home() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Hero2/>
   <About/>
    </div>
  )
}

export default Home