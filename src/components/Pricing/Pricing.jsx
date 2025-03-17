import React from 'react'
import "./Pricing.css"
import { Container, Row, Col } from 'react-bootstrap'
import PriceList from './PriceList'
import clipper from "../../assets/clipper.png"

function Pricing() {
  return (
    <div className='pricing-section p-5'>
      <Container>
        <div>
          <h2 className='text-black fw-bold'>Our Pricing</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident totam doloribus itaque </p>
        </div>
        <div className="price-container">
          <Row>
          <Col sm={12} lg={6}>
          <div>
            <h3>Hair Styles</h3>
            <PriceList
             text="haircut & fade, hair & breads line-up,
             razor, hair & breads trim, shaving"
             img={clipper}
             price={500}
             title="simple cut"
             />
            <PriceList
             text="adipisicing elit. Provident totam doloribus"
             img={clipper}
             price={8}
             title="Hair cut"
             />
            <PriceList
             text="adipisicing elit. Provident totam doloribus"
             img={clipper}
             price={8}
             title="Hair cut"
             />
            <PriceList
             text="adipisicing elit. Provident totam doloribus"
             img={clipper}
             price={8}
             title="Hair cut"
             />
          </div>
          </Col>
          <Col sm={12} lg={6}>
          <div>
            <h3>Hair Styles</h3>
            <PriceList
             text="adipisicing elit. Provident totam doloribus"
             img={clipper}
             price={8}
             title="Hair cut"
             />
            <PriceList
             text="adipisicing elit. Provident totam doloribus"
             img={clipper}
             price={8}
             title="Hair cut"
             />
            <PriceList
             text="adipisicing elit. Provident totam doloribus"
             img={clipper}
             price={8}
             title="Hair cut"
             />
            <PriceList
             text="adipisicing elit. Provident totam doloribus"
             img={clipper}
             price={8}
             title="Hair cut"
             />
          </div>
          </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Pricing