import React from 'react'

import Hero from '../components/Hero/Hero'

import heroBg from "../assets/herobg.jpg"
import About from '../components/About/About'
import Services from '../components/myservice/Services'
import Pricing from '../components/Pricing/Pricing'
import Testimonial from '../components/testimonials/Testimonial'
import Contact from '../components/contact/Contact'


function Home() {
  return (
    <>
    <Hero heroBg={heroBg}/>
              <About/>
              <Services/>
              <Pricing/>
              <Testimonial/>
              <Contact/>
    </>
  )
}

export default Home