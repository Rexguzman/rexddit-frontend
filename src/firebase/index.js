import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAYmdt4mYRfMavCTbcSeLZZrp5UhDT8T-k',
  authDomain: 'rexddit.firebaseapp.com',
  projectId: 'rexddit',
  storageBucket: 'rexddit.appspot.com',
  messagingSenderId: '735994479516',
  appId: '1:735994479516:web:34f1ac8dd82b2586abfe59',
  measurementId: 'G-H7D3MEGLXX',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
