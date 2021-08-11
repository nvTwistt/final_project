import React from "react";
import "./NavigationBar.css";
import Logout from "../login/Logout";
import { useContext } from "react";
import { authContext } from "../login/AuthProvider";
import { Navbar, Nav } from "react-bootstrap";

export default function NavigationBar(props) {
  const { auth, user } = useContext(authContext);
  return (
    <Navbar fixed="top" className="navbar-custom" variant="dark">
      <Navbar.Brand href="/">
        Diagnose.It
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        {auth && <Nav.Link className="user-logged-in">{`Logged in as ${user.name}`}</Nav.Link>}
        {auth && <Nav.Link href="/appointmets">My Appointments</Nav.Link>}
        {auth && <Nav.Item><Logout /></Nav.Item>}

        {!auth && <Nav.Link href="/patients/login">Patient Login</Nav.Link>}

        {!auth && <Nav.Link href="/doctors/login">Doctor Login</Nav.Link>}

        {!auth && <Nav.Link href="/register">Register</Nav.Link>}
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
