const mongoose = require('mongoose')

const { MONGODB_URI, DATABASE_NAME } = require('./environment')

const connect = async () => {
  const DB_CONNECTION_STRING = MONGODB_URI + DATABASE_NAME
  try {
    await mongoose.connect(DB_CONNECTION_STRING)
    console.log('Connect database successfully')
  } catch (error) {
    console.log('Connect database failure')
  }
}

module.exports = {
  connect
}
