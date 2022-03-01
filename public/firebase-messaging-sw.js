import firebase from "firebase/compat/app";
import "firebase/compat/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyA6X6CUhYIu5rD3fP3LTBcGnga83zWz11g",
  authDomain: "fir-pushnotifcation-19a0d.firebaseapp.com",
  projectId: "fir-pushnotifcation-19a0d",
  storageBucket: "fir-pushnotifcation-19a0d.appspot.com",
  messagingSenderId: "188283404755",
  appId: "1:188283404755:web:01fe6d779763edf3ac6f26",
  measurementId: "G-G0WJB4P3PK",
};

const app = firebase.initializeApp(firebaseConfig);
