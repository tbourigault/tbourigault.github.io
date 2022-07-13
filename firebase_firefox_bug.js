import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js';
import {getAuth, signOut, onAuthStateChanged, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDnlXqokIhQl_bZTLkuMgUuSpWRZ_hLTM0",
  authDomain: "lp-sites-bourigault.firebaseapp.com",
  projectId: "lp-sites-bourigault",
  storageBucket: "lp-sites-bourigault.appspot.com",
  messagingSenderId: "947419012738",
  appId: "1:947419012738:web:46a106061d5438377f9e9b",
});

const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, user => {
  if (user !== null) {
    console.log('User logged in', user);
  } else {
    console.log('No user', user);
  }
});

const provider = new GoogleAuthProvider();

document.getElementById('logout').addEventListener('click', () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('signed out!!!')
  }).catch((error) => {
    console.log('signed out error', error)
  });
});
document.getElementById('login').addEventListener('click', () => {
  signInWithRedirect(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log('credential', credential);
      const token = credential.accessToken;
      console.log('token', token);
      // The signed-in user info.
      const user = result.user;
      console.log('user', user);

      // ...
    }).catch((error) => {
    // Handle Errors here.
    console.log('error', error);
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
})
//

