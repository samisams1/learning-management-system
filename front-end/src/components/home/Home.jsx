import React from 'react'
import AboutCard from '../about/AboutCard'
import HAbout from './HAbout'
import Hblog from './Hblog'
import Hero from './hero/Hero'
import Testimonal from './testimonal/Testimonal'

function Home() {
  return (
    <>
    <Hero />
    <AboutCard/>
     <HAbout/>
     <Testimonal/>
     <Hblog />
    </>
  )
}

export default Home
