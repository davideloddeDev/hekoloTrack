import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDK7ZAadS9z7mb33E0jU0nVQRt-UXK2lto",
    authDomain: "hekolo-49216.firebaseapp.com",
    databaseURL: "https://hekolo-49216-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hekolo-49216",
    storageBucket: "hekolo-49216.appspot.com",
    messagingSenderId: "1031135210988",
    appId: "1:1031135210988:web:fd1197dfd36878ab00a4c9",
    measurementId: "G-E1S3R01WZT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
