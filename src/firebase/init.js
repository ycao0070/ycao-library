// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfjxDeYCnx8EpH5aBvz7hyqX_BpESCavU",
  authDomain: "week7-yuxuan.firebaseapp.com",
  projectId: "week7-yuxuan",
  storageBucket: "week7-yuxuan.appspot.com",
  messagingSenderId: "970637380430",
  appId: "1:970637380430:web:e9f8af8b5b71b0fd716c1f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db
