import {Container,Nav,Navbar} from 'react-bootstrap';
import logo from "../../assets/logo.PNG"
import Button from '../button/Button';
import { Link } from 'react-router-dom'

function Header() {
    const style = { backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "10px" }
  return (
    <Navbar style={style} expand="lg" className="navbar navbar-dark position-fixed right-0 w-100 z-3">
      <Container>
        <Navbar.Brand as={Link} to="/">
            <img src={logo} width={"150px"} alt="GhostBarber" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-6 d-flex gap-5">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/gallary">Gallary</Nav.Link>
            <Nav.Link as={Link} to="/upload">Upload</Nav.Link>
            <Button text="Appointment" dest="/appointment"/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;