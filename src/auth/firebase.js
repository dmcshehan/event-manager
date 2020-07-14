// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCR7uRZFv6Tg-0MnY8Y50BwOk_wLGpDtmI",
  authDomain: "rsvp-90ab0.firebaseapp.com",
  databaseURL: "https://rsvp-90ab0.firebaseio.com",
  projectId: "rsvp-90ab0",
  storageBucket: "rsvp-90ab0.appspot.com",
  messagingSenderId: "308268222122",
  appId: "1:308268222122:web:bbbf7ecfadf6366c3632d3",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;
