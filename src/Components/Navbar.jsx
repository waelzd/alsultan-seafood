import { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../Assets/images/logo.jpg';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" sticky="top" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="Al-Sultan Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          {expanded ? <FaTimes /> : <FaBars />}
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={() => setExpanded(false)}>الصفحة الرئيسية</Nav.Link>
            <Nav.Link href="#menu" onClick={() => setExpanded(false)}>قائمة الطعام</Nav.Link>
            <Nav.Link href="#footer" onClick={() => setExpanded(false)}>اتصل بنا</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;