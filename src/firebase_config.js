import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBWPzn4ZSH9mN91lYPjInyVI54Xtbrq3d0",
    authDomain: "todo-app-454e2.firebaseapp.com",
    databaseURL: "https://todo-app-454e2.firebaseio.com",
    projectId: "todo-app-454e2",
    storageBucket: "todo-app-454e2.appspot.com",
    messagingSenderId: "336915282212",
    appId: "1:336915282212:web:c1c700574a27831dacdbb1"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };