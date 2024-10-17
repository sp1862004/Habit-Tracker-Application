// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeKGh3hdQg0_aiTV7fJr-byc64rYXcLEA",
  authDomain: "habit-tracker-applicatio-29129.firebaseapp.com",
  databaseURL: "https://habit-tracker-applicatio-29129-default-rtdb.firebaseio.com",
  projectId: "habit-tracker-applicatio-29129",
  storageBucket: "habit-tracker-applicatio-29129.appspot.com",
  messagingSenderId: "569160954653",
  appId: "1:569160954653:web:a2c1db1736260cc956e7f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
export default db
