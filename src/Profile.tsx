import { Link } from "react-router-dom";
import './index.css'

function Profile() {
  return (
    <>
      <div>
      </div>
      <h1>Bienvenido a tu Perfil</h1>
      <div id= "contenedor">
      <button><Link to="/Games">Buscar Juegos</Link> </button> <button> <Link to="/Clubs">Ver Clubes</Link> </button>
      </div>
      <form>
      <div>
          <label htmlFor="name">Nombre: </label>
          <input
            type="name"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="lastname">Apellido: </label>
          <input
            type="lastname"
            id="lastname"
          />
        </div>
        <div>
          <label htmlFor="password">Videojuego favorito: </label>
          <input
            type="password"
            id="password"
          />
        </div>
        <button type="submit">Guardar Cambios</button>  
      </form>



    </>
  )
  
}

export default Profile