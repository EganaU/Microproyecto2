import { Link } from "react-router-dom";
import './index.css'

function App() {
  return (
    <>
      <div>
      </div>
      <h1>Bienvenido al Club</h1>
      <div id= "contenedor">
      <button><Link to="/Games">Ver Juegos</Link> </button> <button> <Link to="/Clubs">Ver Clubes</Link> </button>
      </div>


    </>
  )
  
}

export default App