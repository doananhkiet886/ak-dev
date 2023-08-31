require('dotenv').config()
const express = require('express')
const route = require('./routes')

const app = express()

const { APP_HOST, APP_PORT } = process.env

route(app)

app.listen(APP_PORT, APP_HOST, () => {
  console.log(`App is running at http://${APP_HOST}:${APP_PORT}/`)
})
