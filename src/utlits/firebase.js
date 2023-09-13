// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "next-blog-13468.firebaseapp.com",
  projectId: "next-blog-13468",
  storageBucket: "next-blog-13468.appspot.com",
  messagingSenderId: "922646387325",
  appId: "1:922646387325:web:7018146973a47ca39d2f14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
