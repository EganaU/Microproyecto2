import React, { useState } from 'react';
import './index.css';
import { registerWithEmailAndPassword, signInWithGoogle } from "./Firebase/auth-service";
import { useNavigate } from 'react-router-dom';



const RegisterPage: React.FC = () => {

  const navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    await signInWithGoogle();
    navigate('/Home');
}

  const [name, setName] = useState('');  
  const [lastname,setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);
    console.log('Nombre:', name);
    console.log('Apellido: ',lastname);
    // const extraData = {'Nombre': name, 'apellido': lastname};
    registerWithEmailAndPassword(email,password);
  };
//, extraData
  
return (
    <div>
      <h1>Registrar Usuario</h1>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="name">Nombre: </label>
          <input
            type="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">Apellido: </label>
          <input
            type="lastname"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrar</button>
        <button type="submit" onClick={handleSignInWithGoogle}>Registrar con Google<img src="googleicon.webp" width="20" height="20"></img></button>  
      </form>
    </div>
  );
};

export default RegisterPage;