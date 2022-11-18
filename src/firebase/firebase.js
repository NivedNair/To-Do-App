// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlFyRTOvKEdGJbPyqioKtK4BGxCDlE2MY",
  authDomain: "assignment-368713.firebaseapp.com",
  databaseURL: "https://assignment-368713-default-rtdb.firebaseio.com",
  projectId: "assignment-368713",
  storageBucket: "assignment-368713.appspot.com",
  messagingSenderId: "657352866771",
  appId: "1:657352866771:web:0648911dd967122ba9cd26",
  measurementId: "G-L6SWJPYDKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getDatabase(app);