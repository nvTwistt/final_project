import React from "react";
import { useContext } from "react";
import { authContext } from "../login/AuthProvider";
import { Button } from "react-bootstrap";


export default function Logout(props) {

  const { auth, logout } = useContext(authContext);

  const onClick = function (event) {
    event.preventDefault();
    if (auth)
      logout();
  };
  
  return (
    <Button variant="primary" onClick={onClick}>
      Logout
    </Button>
  );
}
