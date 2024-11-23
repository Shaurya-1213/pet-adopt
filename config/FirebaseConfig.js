// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "pet-adopt-app-d20c2.firebaseapp.com",
  projectId: "pet-adopt-app-d20c2",
  storageBucket: "pet-adopt-app-d20c2.appspot.com",
  messagingSenderId: "889182512365",
  appId: "1:889182512365:web:97d16f26f9626a36a898e4",
  measurementId: "G-Z5LNKWVZGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
//const analytics = getAnalytics(app);