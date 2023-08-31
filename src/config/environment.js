require('dotenv').config()

const { MONGODB_URI, DATABASE_NAME, APP_HOST, APP_PORT } = process.env

module.exports = {
  MONGODB_URI,
  DATABASE_NAME,
  APP_HOST,
  APP_PORT
}