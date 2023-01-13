import React from 'react';

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Nav } from 'react-bootstrap';
import LinkContainer from 'react-router-bootstrap/LinkContainer';


const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
        <Navbar.Brand href="/">PokeApp</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <LinkContainer to={"/"}>
        <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to={"pokelist"}>
        <Nav.Link>Pokemons</Nav.Link>
        </LinkContainer>
        <LinkContainer to={"favourites"}>
        <Nav.Link>Favourites</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
    </Container>
      </Navbar>
    );
};

export default Header;