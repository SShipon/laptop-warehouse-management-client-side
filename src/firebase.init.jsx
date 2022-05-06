
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB9IEJAz7we7VKKZIVvkBVKPf1c-C-FTJ8",
  authDomain: "grocery-store-management.firebaseapp.com",
  projectId: "grocery-store-management",
  storageBucket: "grocery-store-management.appspot.com",
  messagingSenderId: "307652845494",
  appId: "1:307652845494:web:f32f2cb6a592aa0005ab17",
  measurementId: "G-2SV11MKCG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;