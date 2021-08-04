import "./App.css";
import SymptomsPage from "./symptoms/SymptomsPage";
import NavigationBar from "./navigationBar/NavigationBar";
import { BrowserRouter as Router, Route} from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div className="App">
        <NavigationBar />

        <Route exact = {true} path="/">
          <SymptomsPage />
        </Route>

        <Route exact = {true} path="/patients/login">
          <p>Patient Login</p>
        </Route>

        <Route exact = {true} path="/doctors/login">
        <p>Doctor Login</p>
        </Route>

        <Route exact = {true} path="/register">
        <p>Register</p>
        </Route>

        <Route exact = {true} path="/appointments">
          <p>Appointments</p>
        </Route>
      </div>
    </Router>
  );
}

export default App;
