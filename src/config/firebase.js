// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCqTt6mZtO9z1txrwWGbf0vcguCAD2a44",
  authDomain: "redesocialfotosapp-682e1.firebaseapp.com",
  projectId: "redesocialfotosapp-682e1",
  storageBucket: "redesocialfotosapp-682e1.appspot.com",
  messagingSenderId: "359242511679",
  appId: "1:359242511679:web:a0344a42ceea873a1d8f8a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app);
export const auth = getAuth(app);
