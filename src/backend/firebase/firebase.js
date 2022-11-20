import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage';
import {getFirestore, collection, addDoc, doc, getDoc, getDocs, query, where, serverTimestamp} from  'firebase/firestore';
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail,signOut} from 'firebase/auth';

const fireBaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

//Initialize the app
export const app = initializeApp(fireBaseConfig);
//Get user authority from the app
export const auth = getAuth(app);                  
//Get reference to the database service
export const db = getFirestore();
//Get reference to the data storage service
export const storage = getStorage(app, process.env.REACT_APP_STORAGE_BUCKET);