import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDAS080yl6BxeZUf8jXzv-UNQAUw-O3L-o",
    authDomain: "linkdin-clone-6837a.firebaseapp.com",
    projectId: "linkdin-clone-6837a",
    storageBucket: "linkdin-clone-6837a.appspot.com",
    messagingSenderId: "874139432977",
    appId: "1:874139432977:web:b09dd46afe3ffc039f59b0"
  };

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();

export {auth ,provider, storage};
export default db;