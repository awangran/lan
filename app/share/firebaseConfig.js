// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "lan-app-59459.firebaseapp.com",
  projectId: "lan-app-59459",
  storageBucket: "lan-app-59459.firebasestorage.app",
  messagingSenderId: "45653701604",
  appId: "1:45653701604:web:2f19bf913087030a168df1",
  measurementId: "G-LNY63MKYPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app