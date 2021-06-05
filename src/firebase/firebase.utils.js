import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDwwusC5UxnLbmC2CNH_NHA2wLcfmUZqj0",
  authDomain: "crown-db-5290f.firebaseapp.com",
  projectId: "crown-db-5290f",
  storageBucket: "crown-db-5290f.appspot.com",
  messagingSenderId: "68716573098",
  appId: "1:68716573098:web:e62f8c60f36be1cb74fbd3",
  measurementId: "G-JMV9Q113RT",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
