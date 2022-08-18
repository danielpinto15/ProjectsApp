import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBe0o71HDhpSVlM2GdWVqwKRJ5CvLUN61k",
    authDomain: "thedojosite-c898d.firebaseapp.com",
    projectId: "thedojosite-c898d",
    storageBucket: "thedojosite-c898d.appspot.com",
    messagingSenderId: "561182731771",
    appId: "1:561182731771:web:12987e420871d930b72f5e"
};

// init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
  