import './App.css';
import SeuNome from './components/SeuNome';
import Apresentacao from './components/Apresentacao';
import {useState} from 'react'

function App() {

  const [name, setName] = useState()

  return (
    <div className="App">
      <h1>Testando State Lift</h1>
      <SeuNome setName={setName}/>
      <Apresentacao name={name}/>
    </div>
  );
}

export default App;
