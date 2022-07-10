import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBh7xzDaa-rVY-sFnOJVnJ1NLzai2HUbwc",
  authDomain: "e-ride-app-bf2f4.firebaseapp.com",
  projectId: "e-ride-app-bf2f4",
  storageBucket: "e-ride-app-bf2f4.appspot.com",
  messagingSenderId: "108270330271",
  appId: "1:108270330271:web:691569336c82a898e79daa"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
