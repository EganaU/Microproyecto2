import React, { useEffect, useState } from 'react';
import './index.css';
import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
// import { Link } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyDWvUjB-HJEu5LyAA3NZZHKGOPd7Fw-xDY",
  authDomain: "mmmm-160a2.firebaseapp.com",
  projectId: "mmmm-160a2",
  storageBucket: "mmmm-160a2.appspot.com",
  messagingSenderId: "766995275115",
  appId: "1:766995275115:web:5e380de45167106144402e",
  measurementId: "G-SNR43KZM24"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export async function getUserEmail(): Promise<{ correo: string }[]> {
  const userEmail: { correo: string }[] = [];
  const querySnapshot = await getDocs(collection(db,"users"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    if (data && typeof data.correo === 'string') {
      userEmail.push({ correo: data.correo });
    }
  });
  return userEmail;
}

const LoginPage: React.FC = () => {

  const navigate = useNavigate();

  // const getActiveMail = async () => {
  //   const gmail = email;
  //   return gmail
  // }

  // getActiveMail

  const comprobarEmail = async () => {
    console.log('correo: ', email)
    console.log("Correos registrados: ", userEmail)
    const correos = userEmail
    // console.log('CORREO:', correos.correo)
    console.log('tamano: ',userEmail.length)
    if (email == correos[0].correo){
      console.log('correo: ', email)
      navigate('/Home');
    }
}

  const [userEmail, setUserEmail] = useState<{ correo: string }[]>([]);
  
  useEffect(() => {
    async function fetchUserEmail() {
      try {
        const userEmailData = await getUserEmail();
        setUserEmail(userEmailData);
      } catch (error) {
        console.error('Error al obtener el correo de los usuarios:', error);
      }
    }

    fetchUserEmail();
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);
  };

  return (
    <>
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" onClick={comprobarEmail}>Iniciar Sesion</button>
        {/* <button type="submit"><Link to="/Home">Iniciar Sesion</Link></button> */}
      </form>
    </div>
      </>
  );
};

export default LoginPage;
