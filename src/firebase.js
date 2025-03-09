import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOy30TaTBfymsHh9d_D54JJezwHUDkejo",
  authDomain: "portfolio-49ec0.firebaseapp.com",
  databaseURL: "https://portfolio-49ec0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-49ec0",
  storageBucket: "portfolio-49ec0.firebasestorage.app",
  messagingSenderId: "368781994896",
  appId: "1:368781994896:web:ca5bcb3c00335d678a6115",
  measurementId: "G-SW71ZFC179"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };