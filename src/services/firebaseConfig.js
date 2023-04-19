import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCbY2W8tM0XTeTEpIxwFbelSWFMgo32Pts",
    authDomain: "react-auth-7d9a5.firebaseapp.com",
    projectId: "react-auth-7d9a5",
    storageBucket: "react-auth-7d9a5.appspot.com",
    messagingSenderId: "748182895512",
    appId: "1:748182895512:web:7bb24318a8df53142209ed"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);