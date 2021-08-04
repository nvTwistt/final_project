import React from "react";

export default function NavigationBar(props) {
  return (
    <nav>
      Diagnose.It
      <ul>
        <li>
          <a href="/patient">Patient Login</a>
        </li>
        <li>
          <a href="/doctors">Doctor Login</a>
        </li>
      </ul>
    </nav>
  );
}
