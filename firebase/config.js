import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_Z9KhQKMwThoQWUHXZVR7O1Bx0GYuY9o",
  authDomain: "rn-social-d773e.firebaseapp.com",
  projectId: "rn-social-d773e",
  storageBucket: "rn-social-d773e.appspot.com",
  messagingSenderId: "327938552106",
  appId: "1:327938552106:web:3c0727e5148464c925ee53",
};
// databaseURL:
//   "https://rn-social-d773e-default-rtdb.europe-west1.firebasedatabase.app",

// apiKey: "AIzaSyB1RiS8HboNV3vTul5LdcYb2ZsG_bSvRF4",
// authDomain: "react-native-social-d324c.firebaseapp.com",
// projectId: "react-native-social-d324c",
// storageBucket: "react-native-social-d324c.appspot.com",
// messagingSenderId: "485390517292",
// appId: "1:485390517292:web:78be95f9e38924d676fd89",
// measurementId: "G-RHGYC0X4ZR",

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
