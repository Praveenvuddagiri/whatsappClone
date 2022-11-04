import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
import "firebase/compat/auth";

const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyCz-pgWbR-uJlR6Q9upeSin3u2qAWy0bnA",
  authDomain: "contact-list-app-93bab.firebaseapp.com",
  projectId: "contact-list-app-93bab",
  storageBucket: "contact-list-app-93bab.appspot.com",
  messagingSenderId: "156509237248",
  appId: "1:156509237248:web:f0e9686a975d6d7e7e28e5",
  measurementId: "G-R0CCSRVYLW"
});

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
