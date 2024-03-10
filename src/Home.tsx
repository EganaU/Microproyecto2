import { Link } from "react-router-dom";
import './index.css'

function App() {
  return (
    <>
      <div>
      </div>
      <div id="contenedor">
        <button><Link to="/Games">Buscar Juegos</Link></button>
        <button><Link to="/Clubs">Ver Clubes</Link></button>
        <button><Link to="/Perfil">Ver Perfil</Link></button>
      </div>
      <h1>Bienvenido al Club</h1>
      <div id= "contenedor">
      <button><Link to="/Games">Buscar Juegos</Link> </button> <button> <Link to="/Clubs">Ver Clubes</Link> </button> <button><Link to="/Perfil">Ver Perfil</Link></button>
      </div>


    </>
  )
  
}

export default App