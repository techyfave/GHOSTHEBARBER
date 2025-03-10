import React from 'react'
import "./About.css"
import { Col, Container, Row } from 'react-bootstrap'
import Button from '../button/Button'

function About() {
  return (
    <div className='about-container white-gold'>
    <Container>
        <div className='about-section py-5'>
            <Row>
                <Col md={12} lg={6} sm={12}>
                    <div className="about-images position-relative">
                        <img src="/images/clean-shave2.jpeg" alt="about_image" />

                        <img src="/images/about_small_image.png" alt="about_image" className='position-absolute z-2 p-3 bg-white bottom-0 end-0' />
                    </div>
               </Col>
               <Col>
            <div className="about-texts text-black pt-5 p-lg-4 ms-4 ">
                <h2 className='text-black fw-bold'>About Us</h2>
                <p className='my-4 lh-lg me-4'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia in reiciendis cum dolore ipsum pariatur, assumenda molestiae corrupti velit! Qui quo asperiores id iure dolorum exercitationem adipisci iusto, dolore optio.
                </p>
                <p className='fs-5'>
                    <b>Opening Hours</b> 8:00am - 10:00pm
                </p>
                <div className="about-btn">
                    <Button text="About Us" dest="/aboutus" className={"gold-bg my-5 p-3 px-5 "}/>
                </div>
            </div>
            </Col>
            </Row>
        </div>
    </Container>
    </div>
  )
}

export default About