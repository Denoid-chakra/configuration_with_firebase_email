// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBLfKzmQo6LWcSsSZ4GLJ3NhbSZzpeyDIU",
  authDomain: "loginsikho.firebaseapp.com",
  projectId: "loginsikho",
  storageBucket: "loginsikho.appspot.com",
  messagingSenderId: "62059113732",
  appId: "1:62059113732:web:28291c71727d5ad3fff451",
  measurementId: "G-K323CL1BBD"
};
const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);
