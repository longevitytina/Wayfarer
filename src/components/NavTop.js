import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavTop = ({ context }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand className="brand" href="/">
        Wayfarer
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {context.currentUser ? (
            <>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link onClick={context.actions.logout}>Log Out</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link onClick={context.actions.toggleLoginModal}>
                Log In
              </Nav.Link>
              <Nav.Link onClick={context.actions.toggleSignupModal}>
                Sign Up
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavTop;
