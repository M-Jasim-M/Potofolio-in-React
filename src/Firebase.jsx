import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    // apiKey: "AIzaSyBDAIJcXvEWTIDVnLFBjX0eAJQyRp4XwTg",
    // authDomain: "react-app-12750.firebaseapp.com",
    // projectId: "react-app-12750",
    // storageBucket: "react-app-12750.appspot.com",
    // messagingSenderId: "244877137927",
    // appId: "1:244877137927:web:d09c6dcf9c8585edd3f2a2"
    apiKey: "AIzaSyBDAIJcXvEWTIDVnLFBjX0eAJQyRp4XwTg",
    authDomain: "react-app-12750.firebaseapp.com",
    databaseURL: "https://react-app-12750-default-rtdb.firebaseio.com",
    projectId: "react-app-12750",
    storageBucket: "react-app-12750.appspot.com",
    messagingSenderId: "244877137927",
    appId: "1:244877137927:web:d09c6dcf9c8585edd3f2a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
