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
