import "./App.css";
import SymptomsPage from "./symptoms/SymptomsPage";
import NavigationBar from "./NavigationBar";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div className="App">
        <NavigationBar />

        <Route exact = {true} path="/">
          <SymptomsPage />
        </Route>

        <Route exact = {true} path="/login">
          <p>Login</p>
        </Route>

        <Route exact = {true} path="/logout">
        <p>Logout</p>
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
