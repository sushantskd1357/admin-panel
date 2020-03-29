import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAgtffZJ-ZsJNBl5uS8trfgTlI05tLm-uc",
    authDomain: "admin-panel-a45ee.firebaseapp.com",
    databaseURL: "https://admin-panel-a45ee.firebaseio.com",
    projectId: "admin-panel-a45ee",
    storageBucket: "admin-panel-a45ee.appspot.com",
    messagingSenderId: "458634374021",
    appId: "1:458634374021:web:8cd9a4837372e83646b2ec",
    measurementId: "G-6LN7QZ85TK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots : true });

export default firebase