import './App.css';
import OutraLista from './components/OutraLista';

function App() {

  const nomes = ['Rodrigo', 'Gilberto', 'Amélio', 'Carlos', 'Pipa']

  return (
    <div className = "App">
      <h1>Testando renderização de Listas</h1>
      <OutraLista nomes = {nomes}/>
      <OutraLista nomes = ''/>
    </div>
  );
}

export default App;
