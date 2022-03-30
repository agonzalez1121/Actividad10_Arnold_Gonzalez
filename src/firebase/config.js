import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyAGXVlj240YWIFBmggUkJ60YkzhOjrJrxs",

  authDomain: "actividad10-corregida.firebaseapp.com",

  databaseURL: "https://actividad10-corregida-default-rtdb.firebaseio.com",

  projectId: "actividad10-corregida",

  storageBucket: "actividad10-corregida.appspot.com",

  messagingSenderId: "596671492160",

  appId: "1:596671492160:web:928949494501f7b574efa5"

};



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
