import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyAYmWiHAOx_lQM1THo7TDf6QtIxs7jWfLw",
    authDomain: "cp01jsi.firebaseapp.com",
    projectId: "cp01jsi",
    storageBucket: "cp01jsi.appspot.com",
    messagingSenderId: "415106566954",
    appId: "1:415106566954:web:395c01f2de4487f10f6c53",
    measurementId: "G-4KY4W10RCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const dangky = async (auth, email, pass) => {
    let isSuccess;
    let info;
    try {
        const user = await signInWithEmailAndPassword(auth, email, pass);
        isSuccess = true;
    } catch (error) {
        isSuccess = false;
        infoMessage = error.code;
    } return {
        isSuccess,
        info,
    };
};

export const dangnhap = async (auth, email, pass) => {
    let isSuccess;
    let info;
    try {
        const user = await signInWithEmailAndPassword(auth, email, pass);
        isSuccess = true;
    } catch (error) {
        isSuccess = false;
        infoMessage = error.code;
    } return {
        isSuccess,
        info,
    };
};
