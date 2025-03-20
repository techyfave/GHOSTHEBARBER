import React from 'react'
import "./About.css"
import { Col, Container, Row } from 'react-bootstrap'
import Button from '../button/Button'

function About() {
  return (
    <div className='about-container white-gold' id='about'>
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

                A great haircut is more than just a style it's a symbol that defines us. Haircutting is an art that expresses freedom, it's more than just trimming hair-it's a form of self-expression, creativity, and innovation. <br />

                We believe in the power of a great haircut to boost confidence and showcase your personality. That's why we offer classic cuts, modern styles, and premium grooming services tailored to your unique look. Our passion for delivering exceptional service drives us to stay ahead of the latest trends and techniques while honoring the timeless traditions that have defined barbering for generations. <br />

                Our experienced barbers take the time to listen to your needs, provide expert advice, and deliver a personalized grooming experience that exceeds expectations. By combining precision, creativity, and passion, we craft styles that not only look great but also make you feel confident and comfortable.

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