
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword} from "firebase/auth";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";

const firebaseConfig = {

};


const app = initializeApp(firebaseConfig);

const auth = getAuth();
const analytics = getAnalytics(app);
const storage = getStorage(app);

export {auth , onAuthStateChanged , createUserWithEmailAndPassword ,storage,getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL, deleteObject }
