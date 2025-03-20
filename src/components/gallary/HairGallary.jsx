import "./HairGallary.css"

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase.js"; // Your firebase config


import {Container, Row, Col, Card} from "react-bootstrap"
const HairGallery = () => {
  const [haircuts, setHaircuts] = useState([]);

  const fetchImages = async () => {
    const querySnapshot = await getDocs(collection(db, "haircuts"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setHaircuts(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="gallery-container p-5 white-gold">
        <Container>
            <Row>
      {haircuts.map((haircut) => (
        <Col sm={12} md={6} lg={4} key={haircut.id} className="mb-4">
        <Card key={haircut.id} className="card galary-card">
          <Card.Img src={haircut.imageUrl} alt="Haircut" />
          <Card.Body className="bg-white">
            <Card.Title as={"h4"} className="fw-bold text-black">{haircut.title}</Card.Title>
             <Card.Text>{haircut.description}</Card.Text>
          </Card.Body>
        </Card>
        </Col>
      ))}
      </Row>

      </Container>
    </div>
  );
};

export default HairGallery;
