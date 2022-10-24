import './App.css';
import Mensagem from './components/Mensagem';
import SayMyName from './components/SayMyName';

function App() {
  return (
    <div className = "App">
      <h1>Olá!</h1>
      <Mensagem />
      <SayMyName />
    </div>
  );
}

export default App;
