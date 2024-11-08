// Do not store config on the client side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMVSCMUJkGz_GlCkQKcaWyaStu73_3090",
  authDomain: "simple-firebase-9aa67.firebaseapp.com",
  projectId: "simple-firebase-9aa67",
  storageBucket: "simple-firebase-9aa67.firebasestorage.app",
  messagingSenderId: "264171291798",
  appId: "1:264171291798:web:4fc64a251cc3c2fc9baeb7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
