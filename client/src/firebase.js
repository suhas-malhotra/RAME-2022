import firebase from "firebase";

  var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBtf-vVWiyQvtmIKWu9X1mY5Hthyg_yhdw",
    authDomain: "rame-2022.firebaseapp.com",
    projectId: "rame-2022",
    storageBucket: "rame-2022.appspot.com",
    messagingSenderId: "331827136380",
    appId: "1:331827136380:web:fb6978f01e747959acc6f9",
    measurementId: "G-VQ29SX2EJF"
});
var db = firebaseApp.firestore();

export { db };