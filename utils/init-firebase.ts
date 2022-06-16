import { getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: 'eat-in-430c6.firebaseapp.com',
  projectId: 'eat-in-430c6',
  storageBucket: 'eat-in-430c6.appspot.com',
  messagingSenderId: '275600585283',
  appId: '1:275600585283:web:54cfa4c513841743875af6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
