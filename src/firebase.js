import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
  apiKey: "AIzaSyB_uIVnrta0ghn-knuQ9xKwEgK8ra3CIFI",
  authDomain: "boilerplate-4d682.firebaseapp.com",
  databaseURL: "https://boilerplate-4d682.firebaseio.com",
  projectId: "boilerplate-4d682",
  storageBucket: "boilerplate-4d682.appspot.com",
  messagingSenderId: "402291268271"
});

const db = database(app)
const base = Rebase.createClass(db)

export {base, db}
