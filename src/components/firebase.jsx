// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRD4BTAADd5TGVtmSz27r0deDIj_KUSSs",
  authDomain: "pet-friendly-17120.firebaseapp.com",
  projectId: "pet-friendly-17120",
  storageBucket: "pet-friendly-17120.appspot.com", 
  messagingSenderId: "14170193214",
  appId: "1:14170193214:web:f9c9f8c32014953612806f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };