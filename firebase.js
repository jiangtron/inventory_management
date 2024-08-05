// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqIHE9IDWo1mN4aagjqRcCVSLYg3swPZ0",
  authDomain: "inventory-management-30a9e.firebaseapp.com",
  projectId: "inventory-management-30a9e",
  storageBucket: "inventory-management-30a9e.appspot.com",
  messagingSenderId: "646753445445",
  appId: "1:646753445445:web:55b512bad28dd4cf67252c",
  measurementId: "G-GJ8JQ3WYJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}