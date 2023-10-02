// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpuzh9vod43AcrhsBxVC3e5m76wfAMErk",
  authDomain: "dragon-news-90dda.firebaseapp.com",
  projectId: "dragon-news-90dda",
  storageBucket: "dragon-news-90dda.appspot.com",
  messagingSenderId: "855757913567",
  appId: "1:855757913567:web:93f9ea20dc462b25d8186a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth