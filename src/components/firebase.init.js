
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBSoaPHX0I3CIvzYT1mT2ASFt3eAn8_fA",
  authDomain: "my-practise-project-bbaeb.firebaseapp.com",
  projectId: "my-practise-project-bbaeb",
  storageBucket: "my-practise-project-bbaeb.firebasestorage.app",
  messagingSenderId: "699101885825",
  appId: "1:699101885825:web:cda7594dbc325948d42480"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);