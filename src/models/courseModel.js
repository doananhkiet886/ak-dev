const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
  name: String,
  description: String,
  videoId: String,
  imageId: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Course', CourseSchema)