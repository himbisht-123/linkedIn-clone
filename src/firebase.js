import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBkkJsJ-7JLD6XtnqNusU3lvo-G7shimxM",
    authDomain: "linkedin-clone-97dc6.firebaseapp.com",
    projectId: "linkedin-clone-97dc6",
    storageBucket: "linkedin-clone-97dc6.appspot.com",
    messagingSenderId: "154461322540",
    appId: "1:154461322540:web:9207fb47344c73f5e30089"
  };
  const firebaseapp=firebase.initializeApp(firebaseConfig);

  const db=firebaseapp.firestore();
  const auth=firebase.auth();

  export {db,auth};