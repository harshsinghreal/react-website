// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTtnnQVGrXf6_gWUX0j8FfwuKRS3mEfcE",
  authDomain: "vite-contact-cbc35.firebaseapp.com",
  projectId: "vite-contact-cbc35",
  storageBucket: "vite-contact-cbc35.appspot.com",
  messagingSenderId: "80377619030",
  appId: "1:80377619030:web:1d9f66edb1dd030a3011f7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);