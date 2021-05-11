import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBH6iSeu3QRsxoG5Xmo0nv6qglP8dX02I8",
  authDomain: "instagram-clone-89053.firebaseapp.com",
  projectId: "instagram-clone-89053",
  storageBucket: "instagram-clone-89053.appspot.com",
  messagingSenderId: "212081132634",
  appId: "1:212081132634:web:62d56bd4b7501bdd204463",
  measurementId: "G-6EJLTDN7S1",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
