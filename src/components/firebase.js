import firebase from 'firebase'

const firebassApp = firebase.initializeApp({
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxx.firebaseapp.com",
    projectId: "xxxxxxxxxxx",
    storageBucket: "xxxxxxxx.appspot.com",
    messagingSenderId: "xxxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    measurementId: "xxxxxxxxxxxxxxxxxx"
})

const db = firebassApp.firestore();

export default db;
