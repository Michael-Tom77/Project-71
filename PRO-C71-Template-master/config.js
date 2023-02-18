import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBIcgf-dfiEkMVZ8vAo-0xVra2338LVz-g",
    authDomain: "class-project-71.firebaseapp.com",
    projectId: "class-project-71",
    storageBucket: "class-project-71.appspot.com",
    messagingSenderId: "405849401846",
    appId: "1:405849401846:web:be3cac711550a7436bffd7"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
