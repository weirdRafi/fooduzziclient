// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUQvBbNDKpiLg7aa08VYY1nNb0UaChLzg",
  authDomain: "chef-recipe-hunter-c9371.firebaseapp.com",
  projectId: "chef-recipe-hunter-c9371",
  storageBucket: "chef-recipe-hunter-c9371.appspot.com",
  messagingSenderId: "910944232799",
  appId: "1:910944232799:web:7448c6e3291491009b82ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;