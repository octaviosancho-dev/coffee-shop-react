import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAy-BUh8MOf9eLjwAh33lmHYEjH5fJypq0",
  authDomain: "coffee-ecommerce-918d3.firebaseapp.com",
  projectId: "coffee-ecommerce-918d3",
  storageBucket: "coffee-ecommerce-918d3.appspot.com",
  messagingSenderId: "798144957032",
  appId: "1:798144957032:web:f13eb26392f7b79d42c9dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);