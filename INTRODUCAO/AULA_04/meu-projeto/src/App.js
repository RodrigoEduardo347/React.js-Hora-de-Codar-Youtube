import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className = "App">
      <h1>Olá!</h1>
      <SayMyName nome="Rodrigo" idade="25"/>
      <Pessoa nome="Rodrigo" idade="25" profissao="Programador" hobbie="Fumar"/>
    </div>
  );
}

export default App;
