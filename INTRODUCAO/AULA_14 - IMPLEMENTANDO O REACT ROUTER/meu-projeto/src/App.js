import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Contato from './components/pages/Contato'
import Empresa from './components/pages/Empresa'
import Home from './components/pages/Home'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/empresa" element={<Empresa />}/>
        <Route path="/contato" element={<Contato />}/>
      </Routes>
    </Router>
  );
}

export default App;
