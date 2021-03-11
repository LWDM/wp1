// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'

// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
  apiKey: 'AIzaSyAorJARqZ32LSQDZBr1ybsgRrlSPOXbrNI',
  authDomain: 'bc-servicedesk.firebaseapp.com',
  databaseURL: 'https://bc-servicedesk-default-rtdb.firebaseio.com',
  projectId: 'bc-servicedesk',
  storageBucket: 'bc-servicedesk.appspot.com',
  messagingSenderId: '1024721723904',
  appId: '1:1024721723904:web:59aba2b95083426b066ee5'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseDb = firebaseApp.database()

export { firebaseDb }
