// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,  } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgcPKBwLJgP30pf9xDM5915jyWgkJujzQ",
  authDomain: "fir-auth-c49e1.firebaseapp.com",
  projectId: "fir-auth-c49e1",
  storageBucket: "fir-auth-c49e1.appspot.com",
  messagingSenderId: "517863313674",
  appId: "1:517863313674:web:991494c1cf7f0a79efaaf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    console.log(user)
  } catch (err) {
    console.log(err)
  }
}

const logInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

const registerWithEmailAndPassword = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

const logout = () => {
  signOut(auth);
}

export {
  app,
  auth,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
}