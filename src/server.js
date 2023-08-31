const express = require('express')

const route = require('./routes')
const { APP_HOST, APP_PORT } = require('./config/environment')
const db = require('./config/mongodb')

const app = express()

db.connect()

route(app)

app.listen(APP_PORT, APP_HOST, () => {
  console.log(`App is running at http://${APP_HOST}:${APP_PORT}/`)
})
