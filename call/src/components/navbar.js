import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

export default function CustomNav() {
  return (
      <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Call Drop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/call_log">Call Log</Nav.Link>
              <Nav.Link href="/plan">Plan</Nav.Link>
              <Nav.Link href="/ticket">Ticket</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
              <Nav.Link href="/login"> Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
   </div>
  );
}
