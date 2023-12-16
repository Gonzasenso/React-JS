import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC23AyW7PtGpOs6QZ1nUFSp02JnovJX-9Q",
  authDomain: "gamextreme-react-f5571.firebaseapp.com",
  projectId: "gamextreme-react-f5571",
  storageBucket: "gamextreme-react-f5571.appspot.com",
  messagingSenderId: "612390559699",
  appId: "1:612390559699:web:c0c437cb2c7a04edaa1926"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
