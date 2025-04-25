import "./Footer.css"
import { Col, Container, Row } from "react-bootstrap"

import logo from "../../assets/logo_mixed.png"

function Footer() {
  return (
    <footer className='bg-black p-5 d-flex align-items-end'>
        <Container>
          <Row g={3} className="gx-3">
          <Col sm={12} md={6} lg={3} className="logo-col-container">
              <img src={logo} alt="" />
              <p className="my-4 px-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, optio ducimus fuga veritatis rem ex quaerat, repellat laudantium 
              </p>
              <div className="footer-icons">
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-solid fa-x"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-threads"></i>
                </a>
              </div>
            </Col>
          <Col sm={12} md={6} lg={3} className="info-col">
              <h4>Information</h4>
              <p>
                <a href="#">About</a>
              </p>
              <p>
                <a href="#">Services</a>
              </p>
              <p>
                <a href="#">Testimonials</a>
              </p>
            </Col>
          <Col sm={12} md={6} lg={3}>
               <h4>Services</h4>
               <p>Smooth Shave</p>
               <p>Beard Triming</p>
               <p>Haircut Styles</p>
            </Col>
          <Col sm={12} md={6} lg={3}>
               <h4>Follow Us</h4>
               <p>Smooth Shave</p>
               <p>Beard Triming</p>
               <p>Haircut Styles</p></Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer