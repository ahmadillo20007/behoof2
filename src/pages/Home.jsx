import React from 'react'
import About from '../components/About/About'

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
      <Social />
      <New />
    </div>
  )
}

export default Home