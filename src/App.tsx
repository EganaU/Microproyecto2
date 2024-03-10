import Login from './Login';
import Register from './Register';
import Home from './Home';
import Clubs from "./Clubs";
import Games from "./Games";
import { Link } from "react-router-dom";
import {Routes, Route } from "react-router-dom";
import './index.css'
import Perfil from './perfil';

function App() {
  return (
    <>
      <div>
      </div>
      <div id="contenedorPrincipal"> 
      <div id="title">Eustaquio's Club</div>
      <div id= "contenedor">
      <button><Link to="/Login">Iniciar Sesion</Link> </button> <button> <Link to="/Register">Registrarse</Link> </button>
      </div>
      </div>
      <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Clubs" element={<Clubs/>} />
        <Route path="/Games" element={<Games/>} />
        <Route path="/Perfil" element={<Perfil/>} />
      </Routes>

    </>
  )
  
}

export default App
