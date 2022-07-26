import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css' 
import Home from './componentes/Home'
import Login from './componentes/telas/login/Login'
import Artista from './componentes/telas/artistas/Artista'
import MenuPrivado from './componentes/MenuPrivado'
import MenuPublico from './componentes/MenuPublico'
import Musica from './componentes/telas/musicas/Musica'
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'

function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<MenuPublico />}>
          <Route index element={<Home />} />
          <Route exact="true" path="/login" element={<Login />} />
        </Route>

        <Route path="/privado" element={<MenuPrivado />}>
          <Route index element={<Home />} />
          <Route exact="true" path="musicas" element={<Musica />} />
          <Route exact="true" path="artistas" element={<Artista />} />
          <Route exact="true" path="login" element={<Login />} />
        </Route>        
      </Routes>
    </Router>
  );
}

export default App;