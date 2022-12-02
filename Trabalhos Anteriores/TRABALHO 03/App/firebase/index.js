import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdsfOAb1TZoV4cmUIM9fFN4GmCX79Og_s",
  authDomain: "estudo-firebase-428fa.firebaseapp.com",
  databaseURL: "https://estudo-firebase-428fa-default-rtdb.firebaseio.com",
  projectId: "estudo-firebase-428fa",
  storageBucket: "estudo-firebase-428fa.appspot.com",
  messagingSenderId: "304858947676",
  appId: "1:304858947676:web:0560a75d1a065131cf8699",
  measurementId: "G-46KTW4EKBF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
