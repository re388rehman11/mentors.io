// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "world-63a06",
  storageBucket: "world-63a06.appspot.com",
  messagingSenderId: "597013183186",
  appId: "1:597013183186:web:4f4242fe04c6d707768b0b",
  measurementId: "G-21LSX1HJDQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
const auth = getAuth(app);

export { auth };
