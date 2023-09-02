const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  description: String,
  videoId: String
}, {
  _id: false,
  timestamps: true
})

module.exports = mongoose.model('Course', CourseSchema)