import firebase from "firebase";

const firebaseConfig = {
 apiKey: "AIzaSyAVJiUTzEOU7z2eXNKj0dxxVogbWNmmhWc",
 authDomain: "facebook-cl-109c5.firebaseapp.com",
 projectId: "facebook-cl-109c5",
 storageBucket: "facebook-cl-109c5.appspot.com",
 messagingSenderId: "771863449421",
 appId: "1:771863449421:web:3e76a3db3b79b32fc0b104"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;