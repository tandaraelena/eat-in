import { initializeApp } from "firebase/app";
import {
  getAuth,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyDzLAMAzmuexMjH1aXEXdb8WFeUCbDkkGE',
  authDomain: 'eat-in-430c6.firebaseapp.com',
  projectId: 'eat-in-430c6',
  storageBucket: 'eat-in-430c6.appspot.com',
  messagingSenderId: '275600585283',
  appId: '1:275600585283:web:54cfa4c513841743875af6',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logout = () => {
  signOut(auth);
};


export {
  auth,
  db,
  logout,
};