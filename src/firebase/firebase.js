// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";
import {
    getFirestore,
    initializeFirestore
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getStorage
} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyAfb8m4F7B8UKsMKx4lzWiw1cK_vtfbqlM",

    authDomain: "tech-14d02.firebaseapp.com",

    projectId: "tech-14d02",

    storageBucket: "tech-14d02.appspot.com",

    messagingSenderId: "629929565308",

    appId: "1:629929565308:web:04a60a96450f4705affdf9",

    measurementId: "G-R3G8MNMRZV"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialize firebase auth
const auth = getAuth(app);
const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});
const storage = getStorage(app);
export {
    auth,
    db,
    storage
}