import React from 'react'
import "./Hero.css"
import {Container} from "react-bootstrap"
import Button from '../button/Button'


function Hero({heroBg}) {
    const style = {
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment:`fixed`,
        height: "100%",
        width: "100%",
    }
  return (
    <div style={style}  className='hero-section d-flex align-items-end'>
      <Container>
        <h1 className='position-relative z-2 col-sm-12 col-md-8'>Life Isn't Perfect But Your Hair Can <span className='gold-bg p-1 rounded'>BE</span></h1>
        <Button text="Appointment" dest="/appointment" className={"z-2 my-5 px-4 py-2 fs-5"}/>
      </Container>
      <div className='overlay'></div>
    </div>
  )
}

export default Hero