import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx'
import Home from './Home';
import Login from './Login';
import Register from './Register'; 
import './index.css';
// import './Firebaseconfig';
// import { collection, getDocs } from 'firebase/firestore';

// const querySnapshot = await getDocs(collection(db,'videojuegos'));
// querySnapshot.forEach((doc) => {
//   console.log((doc.id) + '=>' + (doc.data()));
// })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

export default function main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Login />} />
          <Route path="contact" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


