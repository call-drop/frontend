import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";


export default function CustomNav() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Call Drop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/call_log">Call Log</Nav.Link>
              <Nav.Link href="/ticket">Ticket</Nav.Link>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Features"
                menuVariant="dark"
              >
                <NavDropdown.Item href="/sms">Send SMS</NavDropdown.Item>
                <NavDropdown.Item href="/call">Call</NavDropdown.Item>
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/linker">Linker</NavDropdown.Item>
                <NavDropdown.Item href="/personalPlan">Personal Plan</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/customerList">
                  Customer List
                </NavDropdown.Item>
                <NavDropdown.Item href="/towerCheck">
                  {" "}
                  Tower Check{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/openTickets">
                  {" "}
                  Open Tickets{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/employeeList">Employee List</NavDropdown.Item>
                <NavDropdown.Item href="/kyc"> KYC </NavDropdown.Item>
                <NavDropdown.Item href="/plan"> Plan </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
              <Nav.Link href="/login"> Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand>
            &nbsp; || &nbsp;
            {localStorage.getItem("username") ? (
              localStorage.getItem("username")
            ) : (
              <p>Nope</p>
            )}
            {localStorage.getItem("userid") ? (
              localStorage.getItem("userid")
            ) : (
              <p></p>
            )}
          </Navbar.Brand>
          <Nav>
            <button
              onClick={(e) => {
                e.preventDefault();
                localStorage.clear();
                // send user to home page
                window.location.href = "/login";
              }}
            >
              Logout
            </button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
