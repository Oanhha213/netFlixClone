import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDyJvUmm14gxGfwFa0yYvra6Cm_Yhygfkw",
  authDomain: "netflix-clone-a929d.firebaseapp.com",
  projectId: "netflix-clone-a929d",
  storageBucket: "netflix-clone-a929d.appspot.com",
  messagingSenderId: "221428574782",
  appId: "1:221428574782:web:97f05f1c993066eb5b7f6f",
  measurementId: "G-QQ5BR9S9F9"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
