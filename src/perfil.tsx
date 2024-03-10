import { getDocs,collection } from "firebase/firestore";
import { db } from './Firebase/config'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { clubNames } from "./Clubs";

export async function getUserInfo(): Promise<{ nombre: string, apellido: string, correo: string, clubes_unidos: object }[]> {
    const userInfo: { nombre: string, apellido: string, correo: string, clubes_unidos: object }[] = [];
    const querySnapshot = await getDocs(collection(db,"users"));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data && typeof data.titulo === 'string' && typeof data.descripcion === 'string') {
        userInfo.push({ nombre: data.nombre, apellido: data.apellido, correo: data.correo, clubes_unidos: clubNames });
      }
    });
    return userInfo;
  }

  const PerfilComponent: React.FC = () => {
    
    const [userInfo, setUserInfo] = useState<{ nombre: string, apellido: string, correo: string, clubes_unidos: object }[]>([]);
  
  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const userInfoData = await getUserInfo();
        setUserInfo(userInfoData);
      } catch (error) {
        console.error('Error al obtener la info de los usuarios:', error);
      }
    }
    fetchUserInfo();
  }, []);

    return (  
<div>
      <div id="contenedor">
        <button><Link to="/Games">Buscar Juegos</Link></button>
        <button><Link to="/Clubs">Ver Clubes</Link></button>
        <button><Link to="/Perfil">Ver Perfil</Link></button>
      </div>
      <h1>Datos de perfil</h1>
      <div className="club-box">
        {userInfo.map((user, index) => (
          <div key={index} className="club-info">
            <h3>{user.nombre+user.apellido}</h3>
            <p>{user.correo}</p>
            {/* <p>{user.clubes_unidos.clubName}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PerfilComponent