import firebase from "firebase";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtMFSy6fAPAkX22oWDhgOPZSNyVn5ECtY",
  authDomain: "twitter-clone-f6472.firebaseapp.com",
  projectId: "twitter-clone-f6472",
  storageBucket: "twitter-clone-f6472.appspot.com",
  messagingSenderId: "896379917609",
  appId: "1:896379917609:web:4c4ceea3e1a131ff275338",
  measurementId: "G-YRD8P7QH3G",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// firebase init customized
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
