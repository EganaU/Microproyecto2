import './index.css'
import Login from './Login';
import Register from './Register'
import { Link } from "react-router-dom";
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
      </div>
      <h1>Eustaquio's Club</h1>
      <h2>Bienvenido al Club de Videojuegos de Eustaquio <button><Link to="/Login">Iniciar Sesion</Link> </button> <button> <Link to="/Register">Registrarse</Link> </button> </h2>
      <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
      </Routes>


    </>
  )
}

export default App
