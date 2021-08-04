import "../styles/App.css";
import SymptomList from "./SymptomList";
import NavigationBar from "./NavigationBar"


function App(props) {
 
  return (
    
    <div className="App">
      <NavigationBar/>
      <container>
        <SymptomList />
        <button className= "diagnosis-button">Diagnose It!!</button>
      </container>
    </div>
  );
}

export default App;
