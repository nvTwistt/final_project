import React from "react";
import { Link } from "react-router-dom";
import './NavigationBar.css'

export default function NavigationBar(props) {
  return (
    <nav>
       <Link to={'/'}>Diagnose.It</Link>
      <ul>
        <li>
          <Link to={'/patients/login'}>Patient Login</Link>
        </li>
        <li>
          <Link to={'/doctors/login'}>Doctor Login</Link>
        </li>
        <li>
          <Link to={'/register'}>Register</Link>
        </li>
      </ul>
    </nav>
  );
}
