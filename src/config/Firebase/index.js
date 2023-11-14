
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword} from "firebase/auth";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCZQraVa6GQ08eq553-BlgYWj5pj0CRuZ4",
  authDomain: "officeproject-e1d30.firebaseapp.com",
  projectId: "officeproject-e1d30",
  storageBucket: "officeproject-e1d30.appspot.com",
  messagingSenderId: "671693441805",
  appId: "1:671693441805:web:169d828e78db9cc6577e44",
  measurementId: "G-9V81DDFFZS"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();
const analytics = getAnalytics(app);
const storage = getStorage(app);

export {auth , onAuthStateChanged , createUserWithEmailAndPassword ,storage,getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL, deleteObject }