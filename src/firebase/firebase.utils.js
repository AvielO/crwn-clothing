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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
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