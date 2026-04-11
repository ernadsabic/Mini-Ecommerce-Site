import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhsthyoP0HX2NUPpH_Z2e_x9nIX-uIyqg",
  authDomain: "ecommerce-app-4433b.firebaseapp.com",
  projectId: "ecommerce-app-4433b",
  storageBucket: "ecommerce-app-4433b.firebasestorage.app",
  messagingSenderId: "421718530676",
  appId: "1:421718530676:web:746479079ffde0e5edcf21",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();