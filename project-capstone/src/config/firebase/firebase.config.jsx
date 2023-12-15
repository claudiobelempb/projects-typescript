import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut
} from 'firebase/auth';
import {
  doc,
  getDoc,
  getFirestore,
  setDoc
} from 'firebase/firestore';

const appFirebaseConfig = {
  apiKey: "AIzaSyCUD6DNUvVl2D3suzlF-cFmu5jyzciaJTs",
  authDomain: "crwn-clothing-db-7e0f0.firebaseapp.com",
  projectId: "crwn-clothing-db-7e0f0",
  storageBucket: "crwn-clothing-db-7e0f0.appspot.com",
  messagingSenderId: "807084613776",
  appId: "1:807084613776:web:8904976eed36888e27f815"
};

const appFirebase = initializeApp(appFirebaseConfig);

const appGoogleProvider = new GoogleAuthProvider();

appGoogleProvider.setCustomParameters({
  prompt: "select_account"
});

export const appAuth = getAuth();
export const appSignInWithPopupGoogle = () => signInWithPopup(appAuth, appGoogleProvider);
export const appSignInWithRedirect = () => signInWithRedirect(appAuth, appGoogleProvider);

export const appDataBase = getFirestore();

export const appCreateUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if(!userAuth) return;
  
  const userDocRef = doc(appDataBase, 'users', userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);

  //if user data exists
  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      //create / set the document with the data from userAuth in my collection
      await setDoc(userDocRef, {
        displayName,
        email, 
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      //if user data does not exits
      console.log('Error creating the user', error.message);
    }
  }
  //retutn userDocRef
  return userDocRef;
}

export const appCreateUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(appAuth, email, password);
}

export const appSignInWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(appAuth, email, password);
}

export const appsignOut = async () => await signOut(appAuth);
