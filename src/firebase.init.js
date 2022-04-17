// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDB55ZCZ1fZXn16GWtFs5y8R3NuG__rH58",
    authDomain: "massio-2d3d0.firebaseapp.com",
    projectId: "massio-2d3d0",
    storageBucket: "massio-2d3d0.appspot.com",
    messagingSenderId: "357933376301",
    appId: "1:357933376301:web:59d740028d472c9648a9a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;