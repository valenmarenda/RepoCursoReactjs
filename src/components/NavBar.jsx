import React from "react";
import { Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";


const NavbarComponent = () =>{
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">ReactJSCoderHouse</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Catalogo</Nav.Link>
          <Nav.Link href="#pricing">Productos</Nav.Link>
          <Nav.Link href="#pricing"><CartWidget/></Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}

export default NavbarComponent;