import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const services = [
  { name: "Regular Haircut", price: "₦1,500" },
  { name: "Kids Haircut", price: "₦1,200" },
  { name: "Beard Grooming", price: "₦1,000" },
  { name: "Haircut + Beard Trim", price: "₦2,500" },
  { name: "Home Service", price: "₦5,000+" },
];

const Pricing = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 text-black fw-bold"> Our Pricing</h2>
      <Row className="justify-content-center">
        {services.map((service, index) => (
          <Col key={index} md={4} sm={6} xs={12} className="mb-3">
            <Card className="shadow-sm text-center">
              <Card.Body>
                <Card.Title className="fw-bold gold-col">{service.name}</Card.Title>
                <Card.Text className="fs-4 gold-col text-white">{service.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Pricing;
