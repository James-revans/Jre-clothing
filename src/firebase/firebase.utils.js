import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCWDCGQU8QWPTCVEQEFKiK5-QFijFMSJuI",
    authDomain: "jre-db-72d97.firebaseapp.com",
    databaseURL: "https://jre-db-72d97.firebaseio.com",
    projectId: "jre-db-72d97",
    storageBucket: "jre-db-72d97.appspot.com",
    messagingSenderId: "649192888118",
    appId: "1:649192888118:web:490ea3ec321aa24c0bc597",
    measurementId: "G-HLV9DL99QD"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase