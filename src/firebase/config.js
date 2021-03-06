import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDVdcmOGhW5ZwWcMepa9rTCeOJRHeyWGqs",
  authDomain: "vue-app3.firebaseapp.com",
  projectId: "vue-app3",
  storageBucket: "vue-app3.appspot.com",
  messagingSenderId: "971586138914",
  appId: "1:971586138914:web:e3c2e28bbf0ddf44b92b7b"
};

  //init firebase
 firebase.initializeApp(firebaseConfig);
  const projectAuth = firebase.auth();
  const projectVueApp3 = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;


  export {projectAuth,projectVueApp3,timeStamp}