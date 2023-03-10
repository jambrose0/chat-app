import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQxSQ1nqDvLqS4I5XmAEmhx8pmN2kVXt0",
    authDomain: "chat-2d795.firebaseapp.com",
    databaseURL: "https://chat-2d795-default-rtdb.firebaseio.com",
    projectId: "chat-2d795",
    storageBucket: "chat-2d795.appspot.com",
    messagingSenderId: "317694196151",
    appId: "1:317694196151:web:66cfdef0d735eb58e55032"
};





// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();