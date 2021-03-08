/*import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAN8IWfrvH-wevdp7UDTWyr1TKptzQbhg4",
    authDomain: "mychatapp-df7af.firebaseapp.com",
    databaseURL: "https://mychatapp-df7af.firebaseio.com",
    projectId: "mychatapp-df7af",
    storageBucket: "mychatapp-df7af.appspot.com",
    messagingSenderId: "172342600676",
    appId: "1:172342600676:web:8d0254a223c659f8109df1"
  };

// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
*/

import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBmJ2S2DNaG-yvOF3AijJkDPICSIu_6xJI",
  authDomain: "booksantaapi.firebaseapp.com",
  projectId: "booksantaapi",
  storageBucket: "booksantaapi.appspot.com",
  messagingSenderId: "532745185956",
  appId: "1:532745185956:web:b47621717c430371819431"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

