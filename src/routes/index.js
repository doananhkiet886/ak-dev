const meRoute = require('./meRoute')

const route = (app) => {
  app.use('/me', meRoute)
}

module.exports = route

