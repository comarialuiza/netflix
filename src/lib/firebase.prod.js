import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed'; 

const config = {
    apiKey: "AIzaSyA6UJkCruf-PexkeDpZvd_0xjAIWMPfplQ",
    authDomain: "netflix-malu.firebaseapp.com",
    databaseURL: "https://netflix-malu.firebaseio.com",
    projectId: "netflix-malu",
    storageBucket: "netflix-malu.appspot.com",
    messagingSenderId: "241785738930",
    appId: "1:241785738930:web:63d2b037f8627c9d585bab"
};

const firebase = Firebase.initializeApp(config);

/* seedDatabase(firebase); */

export { firebase };