const mongoose = require('mongoose')
const Schema = mongoose.Schema
const StoreSchema = new Schema({
  posid: {
    type: String,
    unique: true
  },
  adr: {
    type: String
  }
})
const StoreModel = mongoose.model('stores', StoreSchema)
module.exports = StoreModel
