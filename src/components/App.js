import "./App.css";
import SymptomsPage from "./symptoms/SymptomsPage";
import NavigationBar from "./navigationBar/NavigationBar";
import Login from "./login/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "./login/AuthProvider";
import { SideBar } from "./SideBar/SideBar";

export default function App(props) {
  const { auth } = useContext(authContext);

  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <SideBar/>
        <Route exact={true} path="/">
          <SymptomsPage />
        </Route>

        <Route exact={true} path="/patients/login">
        {!auth && <Login />}
        {auth && <p>Logged In!</p>}
        </Route>

        <Route exact={true} path="/doctors/login">
          {!auth && <Login />}
          {auth && <p>Logged In!</p>}
        </Route>

        <Route exact={true} path="/register">
          <p>Register</p>
        </Route>

        <Route exact={true} path="/">
        {auth && <p>Appointments Option available when logged in</p>}
        </Route>
      </div>
    </Router>
  );
}
