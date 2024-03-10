import './index.css';
import { Link } from "react-router-dom";
 //import { getClubName } from './Firebase/config';
 import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import React, { useEffect, useState } from 'react';


 const firebaseConfig = {
    apiKey: "AIzaSyDWvUjB-HJEu5LyAA3NZZHKGOPd7Fw-xDY",
    authDomain: "mmmm-160a2.firebaseapp.com",
    projectId: "mmmm-160a2",
    storageBucket: "mmmm-160a2.appspot.com",
    messagingSenderId: "766995275115",
    appId: "1:766995275115:web:5e380de45167106144402e",
    measurementId: "G-SNR43KZM24"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export const storage = getStorage(app);
  
  export const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });
  

  export async function getClubInfo(): Promise<{ nombre: string, descripcion: string }[]> {
    const clubInfo: { nombre: string, descripcion: string }[] = [];
    const querySnapshot = await getDocs(collection(db,"Clubes de Videojuegos"));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data && typeof data.nombre === 'string' && typeof data.descripcion === 'string') {
        clubInfo.push({ nombre: data.nombre, descripcion: data.descripcion });
      }
    });
    return clubInfo;
  }
  
  const ClubesComponent: React.FC = () => {
    const [clubInfo, setClubInfo] = useState<{ nombre: string, descripcion: string }[]>([]);
  
    useEffect(() => {
      async function fetchClubInfo() {
        try {
          const clubInfoData = await getClubInfo();
          setClubInfo(clubInfoData);
        } catch (error) {
          console.error('Error al obtener la información de los clubes:', error);
        }
      }
  
      fetchClubInfo();
    }, []);
  
    return (  
<div>
      <div id="contenedor">
        <button><Link to="/Games">Buscar Juegos</Link></button>
        <button><Link to="/Clubs">Ver Clubes</Link></button>
      </div>
      <h1>Lista de Clubes</h1>
      <div className="club-box">
        {clubInfo.map((club, index) => (
          <div key={index} className="club-info">
            <h3>{club.nombre}</h3>
            <p>{club.descripcion}</p>
            <button className="join-button" onClick={() => handleJoinClub(club.nombre)}>Unirme</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClubesComponent;

const handleJoinClub = (clubName: string) => {
    // Lógica para unirse al club específico
    console.log(`Unirse al club: ${clubName}`);
  };