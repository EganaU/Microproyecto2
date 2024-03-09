import './index.css';
import { Link } from "react-router-dom";

function Clubs() {
    return(
<>
      <div>
      </div>
      <div id= "contenedor">
      <button><Link to="/Games">Ver Juegos</Link> </button> <button> <Link to="/Clubs">Ver Clubes</Link> </button>
      </div>
      <h1>Lista de Clubes</h1>
    </>
    )
}
  
  export default Clubs
  