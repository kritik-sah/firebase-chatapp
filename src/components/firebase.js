import firebase from 'firebase'

const firebassApp = firebase.initializeApp({
    apiKey: "AIzaSyC3sOdtu8Oq4XjOcGcKHudt7jj7V9QewDw",
    authDomain: "chat-e433a.firebaseapp.com",
    projectId: "chat-e433a",
    storageBucket: "chat-e433a.appspot.com",
    messagingSenderId: "62081546178",
    appId: "1:62081546178:web:ffb66e738966a0e923c85b",
    measurementId: "G-CT9RYQT17M"
})

const db = firebassApp.firestore();

export default db;