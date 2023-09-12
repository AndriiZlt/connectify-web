import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAPS7222QAo_baqoLwiK52KQe85b1VJBlM",
  authDomain: "connectify-f3428.firebaseapp.com",
  projectId: "connectify-f3428",
  storageBucket: "connectify-f3428.appspot.com",
  messagingSenderId: "1022383936288",
  appId: "1:1022383936288:web:af85539fcf2f72c5cf7d45",
  measurementId: "G-MTG1967WY3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// initializeAuth(FIREBASE_APP, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(FIREBASE_APP);
