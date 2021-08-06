import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import Logout from "../login/Logout";
import { useContext } from "react";
import { authContext } from "../login/AuthProvider";

export default function NavigationBar(props) {
  const { auth, user } = useContext(authContext);
  return (
    <nav>
      <Link to={"/"}>Diagnose.It</Link>
      <ul>
        {auth && <li>{`Logged in as ${user.name}`}</li>}
        {auth && (
          <li>
            <Link to={"/appointmets"}>My Appointments</Link>{" "}
          </li>
        )}
        {auth && <li><Logout /></li>}

        {!auth && (
          <li>
            <Link to={"/patients/login"}>Patient Login</Link>{" "}
          </li>
        )}

        {!auth && (
          <li>
            <Link to={"/doctors/login"}>Doctor Login</Link>
          </li>
        )}

        {!auth && (
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
