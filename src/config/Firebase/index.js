
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword ,signOut } from "firebase/auth";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { getFirestore, collection, addDoc, query, where, onSnapshot,doc, deleteDoc,updateDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBl5DFQGotvMIjfLtKe5fxneaukVL-gQKU",
  authDomain: "test-project-login-signup.firebaseapp.com",
  projectId: "test-project-login-signup",
  storageBucket: "test-project-login-signup.appspot.com",
  messagingSenderId: "631094519016",
  appId: "1:631094519016:web:b9c0e7d3d9b4666988955d",
  measurementId: "G-BF6S9S8CRG"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  auth, onAuthStateChanged, signInWithEmailAndPassword ,
  storage, getStorage, ref, uploadBytes, uploadBytesResumable,
  getDownloadURL, deleteObject, collection,
  addDoc, db, query, where, onSnapshot,
  doc, deleteDoc,
  updateDoc,signOut
}