import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3CTB-VFmFODxPTtxfrgzkw1s_8H7cJac",
  authDomain: "olx-clone-44a7a.firebaseapp.com",
  projectId: "olx-clone-44a7a",
  storageBucket: "olx-clone-44a7a.appspot.com",
  messagingSenderId: "1085501909130",
  appId: "1:1085501909130:web:897b607d7ca1ef207b2573"
};

// window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
//   'size': 'invisible',
//   'callback': (response) => {
//     onSignInSubmit();
//   }
// });


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const imgDB = getStorage(app);
export const txtDB = getFirestore(app);
export const googleProvider = new GoogleAuthProvider()

