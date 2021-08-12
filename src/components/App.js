import "./App.css";
import SymptomsPage from "./symptoms/SymptomsPage";
import NavigationBar from "./navigationBar/NavigationBar";
import Login from "./login/Login";
import Diagnosis from "./diagnosis/diagnosis";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "./login/AuthProvider";
import AppointmentRequest from "./appointments/appointmentRequest";

export default function App(props) {
  const { auth } = useContext(authContext);

  return (
    <Router>
      <NavigationBar />
      <div className="App">
        <Route exact={true} path="/">
          <SymptomsPage />
        </Route>

        <Route exact={true} path="/patients/login">
          <h1 className="login-type">Patient Login</h1>
          {!auth && <Login />}
        </Route>

        <Route exact={true} path="/doctors/login">
          <h1 className="login-type">Doctor Login</h1>
          {!auth && <Login />}
          {auth && <p>Logged In!</p>}
        </Route>

        <Route exact={true} path="/register">
          <p>Register</p>
        </Route>

        <Route exact={true} path="/diagnosis">
          <Diagnosis className="diagnosis" />
        </Route>
        <Route exact={true} path="/appointments">
          <AppointmentRequest />
        </Route>
      </div>
    </Router>
  );
}
