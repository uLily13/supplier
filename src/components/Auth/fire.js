import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAd8_NIVL0hCmoyx5HW-CF1I5QqG8Kj5_I",
  authDomain: "e--salon.firebaseapp.com",
  projectId: "e--salon",
  storageBucket: "e--salon.appspot.com",
  messagingSenderId: "981089179663",
  appId: "1:981089179663:web:d1c2eec3e54ca77cb7eb7a",
  measurementId: "G-YJPC9KK3P3",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const fire = firebase;
export { firebase };
