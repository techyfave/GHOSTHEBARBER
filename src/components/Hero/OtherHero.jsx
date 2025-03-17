import React from 'react'
import "./Hero.css"
import {Container} from "react-bootstrap"
import Button from '../button/Button'


function OtherHero({heroBg, heading}) {
    const style = {
        background: `linear-gradient(rgb(0,0,0,0.8),rgb(0,0,0,0.8)),url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment:`fixed`,
        height: "60vh",
        width: "100%",
    }
  return (
    <div style={style}  className='other-hero-section d-flex align-items-end'>
      <Container>
         <div>
            <h1>{heading}</h1>
         </div>
      </Container>
      {/* <div className='overlay'></div> */}
    </div>
  )
}

export default OtherHero