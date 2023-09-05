const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const methodOverride = require('method-override')

const { APP_HOST, APP_PORT } = require('./config/environment')
const route = require('./routes')
const db = require('./config/mongodb')
const sortMiddleware = require('./middlewares/sortMiddleware')

const app = express()

db.connect()

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

// template engine
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.set('layout', './layouts/main')

// custome middleware
app.use(sortMiddleware)

route(app)

app.listen(APP_PORT, APP_HOST, () => {
  console.log(`App is running at http://${APP_HOST}:${APP_PORT}/`)
})
