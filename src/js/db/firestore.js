import firebase from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyDCi5-xoBkBbaCOMNFKcuLKotdnRya5JDs",
    authDomain: "chat-react-electron.firebaseapp.com",
    projectId: "chat-react-electron",
    storageBucket: "chat-react-electron.appspot.com",
    messagingSenderId: "878973500978",
    appId: "1:878973500978:web:4304ec13062c848311862b"
};
// Initialize Firebase
export default firebase.initializeApp(config).firestore();