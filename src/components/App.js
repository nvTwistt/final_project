import "../styles/App.css";
import SymptomList from "./SymptomList";
import Button from "./Button";


function App(props) {
 
  return (
    <div className="App">
      <header className="App-header"></header>
      <nav>Nav Bar</nav>
      <container>
        <SymptomList />
        <Button>Diagnose It!!</Button>
      </container>
    </div>
  );
}

export default App;
