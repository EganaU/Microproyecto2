// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);