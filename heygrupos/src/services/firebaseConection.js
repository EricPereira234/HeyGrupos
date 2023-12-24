// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC37RCOMWVrxCUnRNYgS1LIoNS_gD1xFpI",
    authDomain: "heygrupos-8dd1b.firebaseapp.com",
    projectId: "heygrupos-8dd1b",
    storageBucket: "heygrupos-8dd1b.appspot.com",
    messagingSenderId: "418620701113",
    appId: "1:418620701113:web:eba30ba9e1bb5a64755e68"
};



// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);

export { db, auth };