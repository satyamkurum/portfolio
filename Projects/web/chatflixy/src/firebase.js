// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB1i-rmCNzQ9vdcXtSrvRtqqp9y9h-hUes",
  authDomain: "chatify-62e39.firebaseapp.com",
  projectId: "chatify-62e39",
  storageBucket: "chatify-62e39.appspot.com",
  messagingSenderId: "516237016299",
  appId: "1:516237016299:web:cbd14b2b0f07653ead92ae"

};
// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
 export const storage = getStorage();
 export const db = getFirestore()