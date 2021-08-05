import React from "react";
import { useContext } from "react";
import { authContext } from "../login/AuthProvider";


export default function Logout(props) {

  const { auth, logout } = useContext(authContext);

  const onClick = function (event) {
    event.preventDefault();
    if (auth)
      logout();
  };
  
  return (
    <button className="symptoms-list" onClick={onClick}>
      Logout
    </button>
  );
}
