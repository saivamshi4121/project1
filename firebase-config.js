import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfTyF_590OKOTO5qjcK9s05FwoQeatPyk",
    authDomain: "ambulance-alert-system-21066.firebaseapp.com",
    databaseURL: "https://ambulance-alert-system-21066-default-rtdb.firebaseio.com",
    projectId: "ambulance-alert-system-21066",
    storageBucket: "ambulance-alert-system-21066.firebasestorage.app",
    messagingSenderId: "257952967672",
    appId: "1:257952967672:web:f026794a015004acf6040d",
    measurementId: "G-WQ41HFPN6Q"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get the Firebase Realtime Database reference
export const db = getDatabase(app);
