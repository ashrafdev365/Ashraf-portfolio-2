import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDPAVQtDCdqo5TwsWDpQSbt7okR_4ok-Fs",
  authDomain: "creative-dashboard-cd72e.firebaseapp.com",
  projectId: "creative-dashboard-cd72e",
  storageBucket: "creative-dashboard-cd72e.appspot.com",
  messagingSenderId: "272662147499",
  appId: "1:272662147499:web:a18ea5bbecf254bc1d22ee",
  measurementId: "G-SJ9KZPNBV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
