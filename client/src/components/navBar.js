import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import "./navBar.scss";

const NavigationBar = ({ logoutClick, loggedUser }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Riftuo</Navbar.Brand>
      <Nav className="mr-auto"></Nav>

      {loggedUser ? (
        <div>
          <Nav className="mr-auto">
            <Nav.Link href="/user/dashboard">Dashboard</Nav.Link>
          </Nav>
          <Button variant="outline-info" onClick={logoutClick}>
            Log out
          </Button>
        </div>
      ) : (
        <div>
          <Button variant="outline-info" href="/signup" className="mr-2">
            Sign up
          </Button>
          <Button variant="outline-info" href="/login">
            Log in
          </Button>
        </div>
      )}
    </Navbar>
  );
};

export default NavigationBar;
