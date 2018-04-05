import firebase from "firebase";
import {FIREBASE_CONFIG} from "src/util/constants";

firebase.initializeApp(FIREBASE_CONFIG);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;