import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="#home">goResearch</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Help</Nav.Link>
          <NavDropdown title="Courses" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Computer Science</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Economics & Statistics
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Help</Nav.Link>
          <Nav.Link href="#link">Help</Nav.Link>
          <Nav.Link href="#link">Help</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
