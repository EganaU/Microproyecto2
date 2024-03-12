import './index.css';
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import React, { useEffect, useState } from 'react';
import 'firebase/database';


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
  
  export const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });
  

  export async function getClubInfo(): Promise<{ nombre: string, descripcion: string, videojuegos: string[]}[]> {
    const clubInfo: { nombre: string, descripcion: string, videojuegos: string[] }[] = [];
    const querySnapshot = await getDocs(collection(db,"Clubes de Videojuegos"));
    querySnapshot.forEach((doc) => {  
      const data = doc.data();   
      if (data && typeof data.nombre === 'string' && typeof data.descripcion === 'string' && Array.isArray(data.videojuegos)) {
        clubInfo.push({ nombre: data.nombre, descripcion: data.descripcion , videojuegos: data.videojuegos});
      }
    });
    return clubInfo;
  }

  export async function getGameInfoByID(ID: string): Promise<{ID: string, titulo: string, descripcion: string, genero: string }[]> {
    const gameInfo: {ID: string,titulo: string, descripcion: string, genero: string}[] = [];
    const querySnapshot = await getDocs(collection(db,"Videojuegos"));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data && typeof data.titulo === 'string'&& typeof data.ID === 'string' && typeof data.descripcion === 'string' && typeof data.genero ==='string'&& data.ID === ID) {
        gameInfo.push({ID: data.ID, titulo: data.titulo, descripcion: data.descripcion, genero: data.genero });
      }
    });
    return gameInfo;
  }

  export async function getTituloInfoByID(ID: string): Promise<string | null> {
    return new Promise<string | null>((resolve, reject) => {
      getDocs(collection(db, "Videojuegos"))
        .then((querySnapshot) => {
          let titulo: string | null = null;
  
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (data && typeof data.titulo === 'string' && data.ID === ID) {
              titulo = data.titulo;
            }
          });
  
          resolve(titulo);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  export const clubNames: { clubName: string }[] = [];

  const ClubesComponent: React.FC = () => {
    const [clubInfo, setClubInfo] = useState<{ nombre: string; descripcion: string; videojuegos: string[] }[]>([]);
    const [titulos, setTitulos] = useState<(string | null)[]>([]);
  
    useEffect(() => {
      async function fetchClubInfo() {
        try {
          const clubInfoData = await getClubInfo();
          setClubInfo(clubInfoData);
  
          const titulosPromises = clubInfoData.map(async (club) => {
            const titulosPromises = club.videojuegos.map((gameID) => getTituloInfoByID(gameID));
            const titulos = await Promise.all(titulosPromises);
            return titulos.join(', ');
          });
          const resolvedTitulos = await Promise.all(titulosPromises);
          setTitulos(resolvedTitulos);
        } catch (error) {
          console.error('Error al obtener la información de los clubes:', error);
        }
      }
  
      fetchClubInfo();
    }, []);
  
    return (
      <div>
        <div className="transparent-button">
        <button><Link to="/Profile">Ver Perfil<img src = "perfil.png" width = "40" height = "40"></img></Link></button>
        </div>
        <div id="contenedor">
          <button>
            <Link to="/Games">Buscar Juegos</Link>
          </button>
          <button>
            <Link to="/Clubs">Ver Clubes</Link>
          </button>
        </div>
        <h1>Lista de Clubes</h1>
        <div className="club-box">
          {clubInfo.map((club, index) => (
            <div key={index} className="club-info">
              <h3>{club.nombre}</h3>
              <p>{club.descripcion}</p>
              <h4>Videojuegos:</h4>
              <p>{titulos[index]}</p>
              <button>Unirme</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ClubesComponent;

// const handleJoinClub = (clubName: string) => {
//     // Lógica para unirse al club específico
//     console.log(`Unirse al club: ${clubName}`);
//     // const clubNames: { clubName: string }[] = [];
//     const data = clubName;
//     clubNames.push({ clubName: data });
//     console.log('unidos: ', clubNames)
// }
