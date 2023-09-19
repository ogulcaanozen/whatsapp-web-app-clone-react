import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your Firebase configuration object here
const firebaseConfig = {
    apiKey: "AIzaSyCWOupr6FwuBga2tyswFkOsTW0-4RgI76w",
    authDomain: "whatsapp-clone-d2497.firebaseapp.com",
    projectId: "whatsapp-clone-d2497",
    storageBucket: "whatsapp-clone-d2497.appspot.com",
    messagingSenderId: "556077336610",
    appId: "1:556077336610:web:134adb630bf83d2b4ca27b",
    measurementId: "G-9SC7M6VYCP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider}; // Export auth, provider, and db
export default db; // Export firebase as default for reference if needed
