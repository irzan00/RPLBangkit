import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVzISFPf9-S7BaUfQQ90w38QAYYsqQa_A",
  authDomain: "botani-store-f8e14.firebaseapp.com",
  projectId: "botani-store-f8e14",
  storageBucket: "botani-store-f8e14.appspot.com",
  messagingSenderId: "791344938274",
  appId: "1:791344938274:web:b5faaa488f5a990e80b97b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;