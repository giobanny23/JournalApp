import firebase from 'firebase/app';
import  'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyCcb0KWT3iW5Awd1dKXobwlNvIB1ZMJkPY",
  authDomain: "react-app-1ee93.firebaseapp.com",
  databaseURL:"http://react-app-1ee93.appspot.com",
  projectId: "react-app-1ee93",
  storageBucket: "react-app-1ee93.appspot.com",
  messagingSenderId: "574035636867",
  appId: "1:574035636867:web:00cae079e3c716a44da1b6"
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
    
if ( process.env.NODE_ENV ==='test'){
  //testing
  firebase.initializeApp(firebaseConfigTesting);

}else{
  //dev/prod
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