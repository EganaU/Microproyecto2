import Login from './Login';
import Register from './Register';
import Home from './Home';
import Clubs from "./Clubs";
import Games from "./Games";
import { Link } from "react-router-dom";
import {Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import './index.css'

function App() {
  return (
    <>
      <div id="contenedorPrincipal"> 
        <div id="title">Eustaquio's Club</div>
        <div id="contenedor">
          <button><Link to="/Login">Iniciar Sesión</Link></button>
          <button><Link to="/Register">Registrarse</Link></button>
        </div>
      </div>
      <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Clubs" element={<Clubs/>} />
        <Route path="/Games" element={<Games/>} />
        <Route path= "/Profile" element={<Profile/>}/>
      </Routes>
    </>
  );
}

export default App;
