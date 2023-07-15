import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyBmGu14LOqv5RUlRvkl0FY1c-7OSdDRH_Q",
  authDomain: "auction-webapp-9066e.firebaseapp.com",
  projectId: "auction-webapp-9066e",
  storageBucket: "auction-webapp-9066e.appspot.com",
  messagingSenderId: "129758814107",
  appId: "1:129758814107:web:065b6bd044d49f93dd8b3e",
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
