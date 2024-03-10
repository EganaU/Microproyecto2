import './index.css';
import { Link } from "react-router-dom";
// import { getClubName } from './Firebase/config';

function Clubs() {
    return(
<>
      <div>
      </div>
      <div id= "contenedor">
      <button><Link to="/Games">Ver Juegos</Link> </button> <button> <Link to="/Clubs">Ver Clubes</Link> </button>
      </div>
      <h1>Lista de Clubes</h1>
      <div>
          <label htmlFor="name">Nombre: </label>
        </div>
    </>
    )
}
  
  export default Clubs
  