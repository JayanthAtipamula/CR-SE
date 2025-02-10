import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDpQqq3XXLYDSNYXdOgPJRqKJbBeXtTgNs",
  authDomain: "cr-se-ab2c7.firebaseapp.com",
  projectId: "cr-se-ab2c7",
  storageBucket: "cr-se-ab2c7.firebasestorage.app",
  messagingSenderId: "128115818538",
  appId: "1:128115818538:web:335b890b014fb111a18353"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app; 