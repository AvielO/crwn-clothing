import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyDLEELKZ9GlGwqrKAOBW1QwpEi-kqFYGYw",
    authDomain: "crwn-db-9d0fb.firebaseapp.com",
    projectId: "crwn-db-9d0fb",
    storageBucket: "crwn-db-9d0fb.appspot.com",
    messagingSenderId: "713196573441",
    appId: "1:713196573441:web:78d825b92178cc98430100",
    measurementId: "G-XR5RBFGPSP"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    promt: 'select_account'
})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;