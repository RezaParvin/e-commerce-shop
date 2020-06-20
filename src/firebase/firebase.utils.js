import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const title_map_routeName = {
  کلاه: "hats",
  "کفش اسپورت": "sneakers",
  بانوان: "womens",
  آقایان: "mens",
  "کت تک": "jackets",
};

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

export const addCollectionsAndItem = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionData = (collections) => {
  return collections.docs
    .map((doc) => {
      const { title, items } = doc.data();
      return {
        id: doc.id,
        routeName: encodeURI(title_map_routeName[title].toLowerCase()),
        title,
        items,
      };
    })
    .reduce((accumulator, collection) => {
      accumulator[collection.routeName] = collection;
      return accumulator;
    }, {});
};

//use googleAuth in App
//1-use object auth in overall app

export const googleProvider = new firebase.auth.GoogleAuthProvider();
//use popup
googleProvider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      unSubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const addUserOrder = async (order) => {
  const collectionRef = firestore.collection("/orders");
  const newOrderRef = collectionRef.doc();
  return await newOrderRef.set(order);
};

export const getUserOrders = async (userId) => {
  const snapshot = await firestore
    .collection("/orders")
    .where("userId", "==", userId)
    .get();
  if (snapshot.empty) {
    return [];
  } else {
    return snapshot.docs.map((order) => ({
      id: order.ref.id,
      ...order.data(),
    }));
  }
};

export default firebase;
