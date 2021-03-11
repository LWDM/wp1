// depend

const express = require('express')
const admin = require('firebase-admin')

// config express
const app = express()

// config firebase

const serviceAccount = require('./serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

// wtf
app.get('/stores', (request, response) => {
  let stores = []
  db.collection('stores').get().then(snapshot => {
    snapshot.forEach((doc) => {
      stores.push(doc.data())
    })
    response.send(stores)
  })
})

app.listen(process.env.PORT || 3000)
