import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavbarMenu extends Component {
  render() {
    return (
      <Container>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">
                  <Link to="/">Restaurant</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to="/List">List</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to="/create">create</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to="/search">search</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to="/details">details</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to="/update/2">update</Link>
                </Nav.Link>
            {localStorage.getItem("login") ? (  
                  <Nav.Link href="/">
                    <Link to="/logout">logout</Link>
                  </Nav.Link>
                ) : (
                  <Nav.Link href="#link">
                    <Link to="/login">login</Link>
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    );
  }
}
