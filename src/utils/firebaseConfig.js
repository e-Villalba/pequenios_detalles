// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoke3stptw44uyiI08GdDE-q8OGqkxTG8",
  authDomain: "pequenios-detalles.firebaseapp.com",
  projectId: "pequenios-detalles",
  storageBucket: "pequenios-detalles.appspot.com",
  messagingSenderId: "852117766652",
  appId: "1:852117766652:web:7f4d0e7c16aef9ab04b279"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;