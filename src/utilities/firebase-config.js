const firebaseConfig = {
  apiKey: 'AIzaSyDJKOzh6Kc-sO3gLFJk2j06HmK8L3A-ejo',
  authDomain: 'where-s-waldo-52258.firebaseapp.com',
  databaseURL:
    'https://where-s-waldo-52258-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'where-s-waldo-52258',
  storageBucket: 'where-s-waldo-52258.appspot.com',
  messagingSenderId: '889392685900',
  appId: '1:889392685900:web:4ff9da760a8dcf7d7965e9',
};

function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error(
      'No Firebase configuration object provided.' +
        '\n' +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return firebaseConfig;
  }
}

export default getFirebaseConfig;
