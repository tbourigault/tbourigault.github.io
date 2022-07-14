import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js';
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
}
  from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js';

const consoleBox = document.getElementById('consoleBox');

const uiConsole = {
  log: (...data) => {
    console.log(...data);
    consoleBox.append(`\n > ${data[0]}`);
  },
};

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
    uiConsole.log(`user logged in: ${user.displayName}`, user);
  } else {
    uiConsole.log(`No user: ${user}`);
  }
});

const provider = new GoogleAuthProvider();

document.getElementById('logout').addEventListener('click', () => {
  signOut(auth).then(() => {
    uiConsole.log('signed out');
  }).catch((error) => {
    uiConsole.log('signed out error', error);
  });
});
document.getElementById('login').addEventListener('click', () => {
  signInWithRedirect(auth, provider);
});

getRedirectResult(auth)
  .then(result => {
    if (result && result.user) {
      uiConsole.log(`getRedirectResult success ${result.user.displayName}`);
    }
  })
  .catch(error => {
    uiConsole.log('signInWithRedirect ERROR', error);
  });
