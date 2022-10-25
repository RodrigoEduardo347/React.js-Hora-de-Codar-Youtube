import './App.css';
import List from './components/List';
import Form from './components/Form';
import Evento from './components/Evento';

function App() {
  return (
    <div className = "App">
      <List />
      <Evento numero="1"/>
      <Evento numero="2"/>
      <Form />
    </div>
  );
}

export default App;
