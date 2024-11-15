// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJ78o57t_HyVX7fdZsbdvYFLZ9-NGms1o",
    authDomain: "gamemaster-95d53.firebaseapp.com",
    projectId: "gamemaster-95d53",
    storageBucket: "gamemaster-95d53.appspot.com",
    messagingSenderId: "43321368577",
    appId: "1:43321368577:web:8846d384d32bc05a8de000"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

