const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const CourseSchema = new mongoose.Schema({
  name: String,
  description: String,
  videoId: String,
  imageId: String
}, {
  timestamps: true
})

CourseSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: true
})

module.exports = mongoose.model('Course', CourseSchema)
