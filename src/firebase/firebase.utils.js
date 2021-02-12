import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB4KsxesJFY7hE73DHAArewFfIB9sg1wMw',
  authDomain: 'crwn-db-1d355.firebaseapp.com',
  projectId: 'crwn-db-1d355',
  storageBucket: 'crwn-db-1d355.appspot.com',
  messagingSenderId: '710102048060',
  appId: '1:710102048060:web:e8639309e0b54b5d4a5239',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
