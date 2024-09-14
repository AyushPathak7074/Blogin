// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { apiKey } from "../../keys";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxlsz8CL5eNCbO8ooxhBSlWm4aZ1Mn_Hw",
    authDomain: "blogin-dea0e.firebaseapp.com",
    projectId: "blogin-dea0e",
    storageBucket: "blogin-dea0e.appspot.com",
    messagingSenderId: "942173812595",
    appId: "1:942173812595:web:0e6d3ba75c4980fea4f706"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)