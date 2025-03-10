import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Hero from './components/Hero/Hero'
import heroBg from "./assets/herobg.jpg"
import About from './components/About/About'
import Services from './components/myservice/Services'
import Pricing from './components/Pricing/Pricing'
import Testimonial from './components/testimonials/Testimonial'
import Contact from './components/contact/Contact'


function App() {

  return (
    <>
    <Header/>
    
      <main>
          <Hero heroBg={heroBg}/>
          <About/>
          <Services/>
          <Pricing/>
          <Testimonial/>
          <Contact/>
      </main>

      <Footer/>
    </>
  )
}

export default App
