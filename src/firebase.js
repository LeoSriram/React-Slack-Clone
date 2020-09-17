import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmk7ZtB39pyHOknP_eVTtumpcXslFcle0",
  authDomain: "slack-clone-4134d.firebaseapp.com",
  databaseURL: "https://slack-clone-4134d.firebaseio.com",
  projectId: "slack-clone-4134d",
  storageBucket: "slack-clone-4134d.appspot.com",
  messagingSenderId: "12559303116",
  appId: "1:12559303116:web:48bc4ae9394813efe0dd69",
  measurementId: "G-ZKEE0X48ZR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
