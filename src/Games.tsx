import './index.css';
import { Link } from "react-router-dom";
 import { initializeApp } from "firebase/app";
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
  
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export const storage = getStorage(app);
  
  export const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });
  

  export async function getGameInfo(): Promise<{ titulo: string, descripcion: string }[]> {
    const gameInfo: { titulo: string, descripcion: string }[] = [];
    const querySnapshot = await getDocs(collection(db,"Videojuegos"));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data && typeof data.titulo === 'string' && typeof data.descripcion === 'string') {
        gameInfo.push({ titulo: data.titulo, descripcion: data.descripcion });
      }
    });
    return gameInfo;
  }
  
  const ClubesComponent: React.FC = () => {
    const [gameInfo, setGameInfo] = useState<{ titulo: string, descripcion: string }[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
  
    useEffect(() => {
      async function fetchGameInfo() {
        try {
          const gameInfoData = await getGameInfo();
          setGameInfo(gameInfoData);
        } catch (error) {
          console.error('Error al obtener la información de los videojuegos:', error);
        }
      }
  
      fetchGameInfo();
    }, []);
    

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
      };
    
      const filteredGames = gameInfo.filter(game =>
        game.titulo.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
      return (
        <>
        <div>
      </div>
      <div id="contenedor">
        <button><Link to="/Games">Buscar Juegos</Link></button>
        <button><Link to="/Clubs">Ver Clubes</Link></button>
      </div>
        <div className="container">
        <h1>Buscar Juegos</h1>
        <input
            className="search-bar"
            type="text"
                placeholder="Buscar por nombre de juego"
            value={searchTerm}
            onChange={handleSearch}
  />
        <div className="game-list">
            {filteredGames.map((game, index) => (
        <div key={index} className="game-info">
        <h3>{game.titulo}</h3>
        <p>{game.descripcion}</p>
        </div>
    ))}
  </div>
</div>
</>
      )
  };
  
  export default ClubesComponent;