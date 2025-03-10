import "./Contact.css"
import { Container, Row, Col } from 'react-bootstrap'

function Contact() {
  return (
    <div className="contact-section p-5">
        <Container>
        <h2 className="text-black fw-bold fs-1">Make an Apointment</h2>
        <div className='contact-container'>
            <Row>
                <Col sm={12} md={7} className='mb-5 gap-5'>
                    <form className='Contact-form d-flex flex-column gap-5 me-5'>
                        <input type="text" placeholder='Name'/>
                        <input type="email" placeholder='Email'/>
                        <textarea placeholder='Message'></textarea>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, sed sint, deleniti quis nam reiciendis voluptas voluptates nulla 
                        </p>
                        <button className='btn gold-bg p-3 text-white'>Send Message</button>
                    </form>  
                </Col>
                <Col sm={12} md={5}>
                    <div className='contact-info ms-5'>
                        <div className="address-info">
                            <h3 className="text-black fw-bold fs-5">Visit Our Salon At</h3>
                            <p>221B Baker Street, P. O Box 3 Park Road, USA - 215852</p>
                        </div>
                        <div className="message-info">
                            <h3 className="text-black fw-bold fs-5">Message Us</h3>
                            <p>ghostbarber@support.com</p>
                            <p>(+68) 120034509</p>
                        </div>
                        <div className="hours-info">
                            <h3 className="text-black fw-bold fs-5">Working Hours</h3>
                            <p><span>Monday-Friday</span>: 09:00-23:00</p>
                            <p><span>Sunday</span>: 09:00-16:00</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
        </Container>

    </div>
  )
}

export default Contact