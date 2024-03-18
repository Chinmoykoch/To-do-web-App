import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWGoG-m1jrMowcAUOJitQ2iucNObiTEm4",
  authDomain: "to-do-e623c.firebaseapp.com",
  projectId: "to-do-e623c",
  storageBucket: "to-do-e623c.appspot.com",
  messagingSenderId: "458586224784",
  appId: "1:458586224784:web:da9bbc75043d33c3000015",
  measurementId: "G-0QXYE6SR43"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};