// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqcbXh2Xfd429JeE5g_0hXBz2_tw_5c7o",
  authDomain: "saywa-limo.firebaseapp.com",
  projectId: "saywa-limo",
  storageBucket: "saywa-limo.appspot.com",
  messagingSenderId: "462081810957",
  appId: "1:462081810957:web:a13cb76fef092290c5ab44",
  measurementId: "G-LH3JCTJJ8Z"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      sessionStorage.setItem("email", result.user.email);
      sessionStorage.setItem("displayName", result.user.displayName);
      sessionStorage.setItem("photoURL", result.user.photoURL);
    })
    .catch((error) => {});
};
