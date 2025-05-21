// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMY0qfe5DXRhB6kDfICClsWwaj_NJJnI4",
  authDomain: "aulasm2025.firebaseapp.com",
  projectId: "aulasm2025",
  storageBucket: "aulasm2025.firebasestorage.app",
  messagingSenderId: "514456177250",
  appId: "1:514456177250:web:94a49aaada4a384c471f3b"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);