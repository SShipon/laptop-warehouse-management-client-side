
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBp9rGIftWyDaWaMIe0i_FXrkcIemRMY3I",
  authDomain: "laptop-warehouse-managem-7c512.firebaseapp.com",
  projectId: "laptop-warehouse-managem-7c512",
  storageBucket: "laptop-warehouse-managem-7c512.appspot.com",
  messagingSenderId: "525263229208",
  appId: "1:525263229208:web:ddf1b7d5685158df200e6d",
  measurementId: "G-H94HR3F9QX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;




