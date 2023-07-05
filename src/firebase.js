import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Rest of your code


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDFkh6sLXJEelfdYe9iHehBwiXGRbTMv9c",
    authDomain: "vuefirebasetest-6be8f.firebaseapp.com",
    projectId: "vuefirebasetest-6be8f",
    storageBucket: "vuefirebasetest-6be8f.appspot.com",
    messagingSenderId: "1014226059841",
    appId: "1:1014226059841:web:b670e48b2fd1e1ef3c7cc0"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default {firebase};
