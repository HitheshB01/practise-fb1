// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// import { getFirestore } from "firebase/firestore";


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTOFFSOcZBIKOsvFa8Mzo9f_qZzmsBTfU",
  authDomain: "st-practise-project.firebaseapp.com",
  projectId: "st-practise-project",
  storageBucket: "st-practise-project.appspot.com",
  messagingSenderId: "613986519087",
  appId: "1:613986519087:web:a8b2a8c941d55bf3391eda",
  measurementId: "G-MYCJT09B8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
// const analytics = getAnalytics(app);