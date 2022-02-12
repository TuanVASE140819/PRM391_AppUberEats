import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBghUr4jB6mnyW4E8pUhh5jV1Lmj7fYWew",
  authDomain: "rn-uber-eats-clone-yt-edc9d.firebaseapp.com",
  projectId: "rn-uber-eats-clone-yt-edc9d",
  storageBucket: "rn-uber-eats-clone-yt-edc9d.appspot.com",
  messagingSenderId: "799724940777",
  appId: "1:799724940777:web:2af999e83e27bcf6fd2f78",
  measurementId: "G-1EK7S847WV"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
