// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd-nEWF2kOgIg5RVcDGo9IMOgcsZDy4YE",
  authDomain: "learn-firebase-with-reac-118e9.firebaseapp.com",
  projectId: "learn-firebase-with-reac-118e9",
  storageBucket: "learn-firebase-with-reac-118e9.appspot.com",
  messagingSenderId: "467022800442",
  appId: "1:467022800442:web:83574c22359379eb53f703"
};

initializeApp(firebaseConfig);

// Initialize Firebase
const db = getFirestore();

export {db};