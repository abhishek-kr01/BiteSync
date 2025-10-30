// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "bitesync-2e8ad.firebaseapp.com",
  projectId: "bitesync-2e8ad",
  storageBucket: "bitesync-2e8ad.firebasestorage.app",
  messagingSenderId: "276612524317",
  appId: "1:276612524317:web:644eaaf375f076f87199f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth}