import firebase from 'firebase/app';
import  'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAHzt1kdbS6Du_xgmc9tIiq7-DLqwW23-w",
    authDomain: "react-app-cursos-ed840.firebaseapp.com",
    projectId: "react-app-cursos-ed840",
    storageBucket: "react-app-cursos-ed840.appspot.com",
    messagingSenderId: "174049190710",
    appId: "1:174049190710:web:dc5e9a4c519dc1c10c8997"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  export{
      db,
      googleAuthProvider,
      firebase
  }