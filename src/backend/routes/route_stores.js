const express = require('express')
const db = require('../model/store-model')
const router = express.Router()
const Store = require('../model/store-model')

router.post('/test', (req, res) => {
  const store = new Store({
    posid: req.body.posid,
    adr: req.body.adr
  })
  store.save((err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send({
        success: true,
        message: `Store with ID_${data._id} saved successfully!`
      })
    }
  })
})

router.get('/tt_book', (req, res) => {
  Store.find({}, (err, stores) => {
    if (err) {
      res.sendStatus(500)
    } else {
      res.send({ stores: stores })
    }
  }).sort({ adr: 1 })
})

router.get('/tt_book/:id', (req, res) => {
  Store.findById(req.params.id, (_err, stores) => {
    if (_err) {
      res.sendStatus(500)
    } else {
      res.send({ stores })
    }
  })
})

module.exports = router
