import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOakSQ9D7ELRwXuwlQt7ARGD5a10n2jpQ",
  authDomain: "gamextreme-react.firebaseapp.com",
  projectId: "gamextreme-react",
  storageBucket: "gamextreme-react.appspot.com",
  messagingSenderId: "949897888619",
  appId: "1:949897888619:web:59d66973228bb329a1022e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
