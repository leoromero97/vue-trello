import * as firebase from 'firebase';
import config from './config';

const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database();
export default firebaseApp;