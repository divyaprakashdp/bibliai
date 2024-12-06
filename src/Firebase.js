// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const API_KEY = import.meta.env.API_KEY;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "bookquest-394311.firebaseapp.com",
  projectId: "bookquest-394311",
  storageBucket: "bookquest-394311.appspot.com",
  messagingSenderId: "48140670004",
  appId: "1:48140670004:web:f6e0af765fe58abc422661",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
