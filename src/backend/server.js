const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')
mongoose.Promise = global.Promise
const db = config.dbURL
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(require('./routes/route_stores'))

async function start () {
  try {
    await mongoose.connect(db, config.dbOptions)
    app.listen(process.env.PORT || config.port, () => {
      console.log('Coming in... i waiting you on 8081 port')
    })
  } catch (e) {
    console.log(e)
  }
}

start()
