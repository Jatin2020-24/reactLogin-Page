import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth' 

const firebaseConfig = {
  apiKey: "AIzaSyCtceSfK5Lj6KNQOZZbG6Jma8zBvIVvwdI",
  authDomain: "signin-951c2.firebaseapp.com",
  projectId: "signin-951c2",
  storageBucket: "signin-951c2.appspot.com",
  messagingSenderId: "169221895460",
  appId: "1:169221895460:web:c12eff5227202249566fb1",
  measurementId: "G-5XHFBNF1GE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};