import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-ebbcf.firebaseapp.com",
  projectId: "mern-auth-ebbcf",
  storageBucket: "mern-auth-ebbcf.appspot.com",
  messagingSenderId: "591586294326",
  appId: "1:591586294326:web:c1ef8bc4a337b7b69f7697",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
