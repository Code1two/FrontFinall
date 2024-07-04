import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQWfEvOgaQzx-Kuy7oU6nbsra6jd7Cac0",
  authDomain: "js-savarankiskai.firebaseapp.com",
  projectId: "js-savarankiskai",
  storageBucket: "js-savarankiskai.appspot.com",
  messagingSenderId: "196131261751",
  appId: "1:196131261751:web:d2a7674a1e0c96b98c1eb2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
