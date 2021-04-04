import firebase from "firebase";

const fireBaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBMl4nC4zdlT2wfrMUIJdz2G0r0iARzCEM",
  authDomain: "todo-app-b70cb.firebaseapp.com",
  projectId: "todo-app-b70cb",
  storageBucket: "todo-app-b70cb.appspot.com",
  messagingSenderId: "502194845824",
  appId: "1:502194845824:web:7110fee6543bf1ea6bce65",
  measurementId: "G-3XDH8FGMMG"
});
const db = fireBaseApp.firestore();

export default db;