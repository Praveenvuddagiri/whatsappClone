import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
import "firebase/compat/auth";

firebase.initializeApp({
  apiKey: "AIzaSyDPpYdjilRTx93E3utvWhGtgELQSyZkpNw",
  authDomain: "whatsappmern-f91ff.firebaseapp.com",
  projectId: "whatsappmern-f91ff",
  storageBucket: "whatsappmern-f91ff.appspot.com",
  messagingSenderId: "75054761289",
  appId: "1:75054761289:web:f54a6e4880e60d339ac698",
  measurementId: "G-33ZRJL7Z62"
});

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
