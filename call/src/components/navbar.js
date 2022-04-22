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
              <Nav.Link href="/pricing">Plan</Nav.Link>
              <Nav.Link href="/ticket">Ticket</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                About Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
   </div>
  );
}
