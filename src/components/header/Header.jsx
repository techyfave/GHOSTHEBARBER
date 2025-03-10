import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/logo.PNG"
import Button from '../button/Button';

function Header() {
    const style = { backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "10px" }
  return (
    <Navbar style={style} expand="lg" className="navbar navbar-dark position-fixed right-0 w-100 z-3">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} width={"150px"} alt="GhostBarber" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-6 d-flex gap-5">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Button text="Appointment" dest="#"/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;