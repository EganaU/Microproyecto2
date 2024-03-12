import { Link } from "react-router-dom";
import './index.css';

function App() {
  return (
    <>
      <div>
      <div className="transparent-button">
        <button><Link to="/Profile">Ver Perfil<img src = "perfil.png" width = "40" height = "40"></img></Link></button>
      </div>
      </div>
      <h1>Bienvenido al Club</h1>
      <div id= "contenedor">
      <button><Link to="/Games">Buscar Juegos</Link> </button> <button> <Link to="/Clubs">Ver Clubes</Link> </button>
      </div>


    </>
  )
  
}

export default App