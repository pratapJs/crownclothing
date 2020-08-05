import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDXKzbbW8KK8pxEqlIoy_Wk75X8dzK9dHk',
  authDomain: 'crown-db-3f995.firebaseapp.com',
  databaseURL: 'https://crown-db-3f995.firebaseio.com',
  projectId: 'crown-db-3f995',
  storageBucket: 'crown-db-3f995.appspot.com',
  messagingSenderId: '8997216472',
  appId: '1:8997216472:web:2364516f10fcc4e1a337ad',
  measurementId: 'G-XKG27QEXJ3',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
