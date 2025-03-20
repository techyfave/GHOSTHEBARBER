// Import the functions you need from the SDKs you need
const fireapi = import.meta.env.VITE_FIREBASE_API_KEY
console.log(fireapi)
console.log(import.meta.env)
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: fireapi,
  authDomain: "ghostthebarber-d1bec.firebaseapp.com",
  projectId: "ghostthebarber-d1bec",
  storageBucket: "ghostthebarber-d1bec.firebasestorage.app",
  messagingSenderId: "632588920522",
  appId: "1:632588920522:web:739158adf04539c2357633",
  measurementId: "G-H9BMVP2TQP"
};

// Prevent multiple initializations
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const analytics = getAnalytics(app);


export { db,analytics }