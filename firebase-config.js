// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_y9o1Z0j4gKh_fD7NE3Qv8Fgn2DJn-Ls",
  authDomain: "swoop-1da9f.firebaseapp.com",
  projectId: "swoop-1da9f",
  storageBucket: "swoop-1da9f.appspot.com",
  messagingSenderId: "93407846936",
  appId: "1:93407846936:web:4ce970ddfad0dbff20196d",
  measurementId: "G-P1LP7C488N"
};

// firebase-config.js
const firebaseConfig = {
    // Your Firebase project configuration
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Export Firebase objects as needed
export { firebaseApp, auth };


// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    // Your Firebase project configuration
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase objects as needed
export { app, getAuth };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
