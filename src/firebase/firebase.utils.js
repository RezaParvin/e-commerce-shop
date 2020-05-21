import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//config app in firebase

export const config = {
  apiKey: "AIzaSyCX3YnQkV7XR6Au7DcyjmFHa7ZMs1w5OY4",
  authDomain: "e-commerce-shop-d9565.firebaseapp.com",
  databaseURL: "https://e-commerce-shop-d9565.firebaseio.com",
  projectId: "e-commerce-shop-d9565",
  storageBucket: "e-commerce-shop-d9565.appspot.com",
  messagingSenderId: "637779451381",
  appId: "1:637779451381:web:3d7b23d7ccabd1d86754bc",
  measurementId: "G-GXT1KQD7G7",
};

firebase.initializeApp(config);

//use firebase authentication

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//if user is Auth , send to database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const createAt = new Date();
    const displayName = userAuth.displayName;
    const email = userAuth.email;

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error in Create User Profile", error);
    }
  }

  return userRef;
};

//use googleAuth in App

//1-use object auth in overall app
const provider = new firebase.auth.GoogleAuthProvider();
//use popup
provider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;