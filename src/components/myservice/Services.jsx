import React from 'react'
import "./Service.css"
import { Card,Container, Row, Col} from 'react-bootstrap'

import razor from "../../assets/razor.png"
import clipper from "../../assets/clipper.png"
import scissors from "../../assets/scissors.png"
import Button from '../button/Button'

function Services() {
  return (
    <div className='service-section py-5 mt-5'>
        <Container className='text-center'>
            <div className="service-heading text-center text-black">
                <h2 className='text-black gold-col fw-bold'>Our Services</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Temporibus consectetur 
                </p>
            </div>

            <div  className='services-card'>
                <Row className='g-3' >
                    <Col md="4" sm="12">
                    <Card className='service-card white-gold'>
                        <Card.Img src='/images/clean-shave.jpg'/>
                        <Card.Body className="service-card-body">
                        <Card.Title as="h3">Smooth Shave</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        </Card.Text>
                           <img src={razor} alt="shave" />
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="4" sm="12">
                    <Card className='service-card white-gold'>
                        <Card.Img src='/images/beard-trim.jpg'/>
                        <Card.Body className="service-card-body">
                        <Card.Title as="h3">Beard Triming</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        </Card.Text>
                        <img src={scissors} alt="shave" />
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="4"  sm="12" >
                    <Card className='service-card white-gold'>
                        <Card.Img src='/images/hair-styles.jpg'/>

                        <Card.Body className="service-card-body">
                        <Card.Title as="h3">Haircut Styles</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        </Card.Text>
                        <img src={clipper} alt="shave" />
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </div>
            <Button dest={`/gallary`} text="See Gallary" className={"my-5 fs-5 px-5"}></Button>
        </Container>
    </div>
  )
}

export default Services