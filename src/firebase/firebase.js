// Import the functions you need from the SDKs you need
const fireapi = import.meta.env.VITE_FIREBASE_API_KEY
// console.log(fireapi)
// console.log(import.meta.env)
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: fireapi,
  authDomain: "ghosthebarber-e811e.firebaseapp.com",
  projectId: "ghosthebarber-e811e",
  storageBucket: "ghosthebarber-e811e.firebasestorage.app",
  messagingSenderId: "896219638448",
  appId: "1:896219638448:web:75ee28f29ab8303a056975",
  // measurementId: "G-H9BMVP2TQP"
  // measurementId: "G-H9BMVP2TQP"
};

// Prevent multiple initializations
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const analytics = getAnalytics(app);


export { db,analytics }