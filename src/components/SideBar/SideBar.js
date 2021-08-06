import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../login/AuthProvider";
import "./SideBar.css";

export function SideBar(props) {
  return (
    <nav className="side-bar">
      <ul>
        <li>
          <Link to={"/"}>Symptoms</Link>
        </li>
        <li>
          <Link to={"/"}>Appointments</Link>
        </li>
      </ul>
    </nav>
  );
}
