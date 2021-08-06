import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../login/AuthProvider";
import "./SideBar.css";

export function SideBar(props) {
  return (
    <div className="side-bar">
      <Link to={"/"}>Get New Diagnosis</Link>
      <Link to={"/appointments"}>My Appointments</Link>
    </div>
  );
}
