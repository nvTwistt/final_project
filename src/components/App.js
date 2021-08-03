import '../styles/App.css';
import SymptomList from './SymptomList'
import Button from './Button'

function App(props) {
  
  return (
    <div className="App">
      <header className="App-header">
        <container>
          <SymptomList/>
          <Button>Add Symptom</Button>
        </container>
      </header>
    </div>
  );
}

export default App;
