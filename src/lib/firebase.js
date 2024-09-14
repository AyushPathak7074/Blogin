// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { apiKey } from "../../keys";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: apiKey,
    authDomain: "recipeshare-c5ede.firebaseapp.com",
  databaseURL: "https://recipeshare-c5ede-default-rtdb.firebaseio.com",
  projectId: "recipeshare-c5ede",
  storageBucket: "recipeshare-c5ede.appspot.com",
  messagingSenderId: "495998842291",
  appId: "1:495998842291:web:a949523d72e75cae8947c6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)