import firebase from 'firebase/app';
import  'firebase/firestore';
import 'firebase/auth';


console.log(process.env);

const firebaseConfig = {
    apiKey: "AIzaSyAHzt1kdbS6Du_xgmc9tIiq7-DLqwW23-w",
    authDomain: "react-app-cursos-ed840.firebaseapp.com",
    projectId: "react-app-cursos-ed840",
    storageBucket: "react-app-cursos-ed840.appspot.com",
    messagingSenderId: "174049190710",
    appId: "1:174049190710:web:dc5e9a4c519dc1c10c8997"
  };

  const firebaseConfigTesting = {
    apiKey: "AIzaSyC_CAmKmqzesxPHroFUQJ8FeEaIEGiI-kg",
    authDomain: "proyecto2019-548ec.firebaseapp.com",
    databaseURL: "https://proyecto2019-548ec.firebaseio.com",
    projectId: "proyecto2019-548ec",
    storageBucket: "proyecto2019-548ec.appspot.com",
    messagingSenderId: "419747290417",
    appId: "1:419747290417:web:4bd1d86d140a1be0852410"
  };



  if ( process.env.NODE_ENV === 'test'){
      //testing
      firebase.initializeApp(firebaseConfigTesting);
  } else {
      //deve/prod
      firebase.initializeApp(firebaseConfig);
      
  }



  // Initialize Firebase

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  export{
      db,
      googleAuthProvider,
      firebase
  }