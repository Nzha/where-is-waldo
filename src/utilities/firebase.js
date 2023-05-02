import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import getFirebaseConfig from './firebase-config.js';

const firebaseConfig = getFirebaseConfig();
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);

export { app, database, storage };
