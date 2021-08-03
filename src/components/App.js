import "../styles/App.css";
import SymptomList from "./SymptomList";
import Button from "./Button";
import NavigationBar from "./NavigationBar"


function App(props) {
 
  return (
    
    <div className="App">
      <NavigationBar/>
      <header className="App-header"></header>
      <container>
        <SymptomList />
        <Button>Diagnose It!!</Button>
      </container>
    </div>
  );
}

export default App;
