import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "REMOVED",
    authDomain: "REMOVED",
    projectId: "REMOVED",
    storageBucket: "REMOVED",
    messagingSenderId: "REMOVED",
    appId: "REMOVED",
    measurementId: "REMOVED"
  };

if (firebase.apps != undefined) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
