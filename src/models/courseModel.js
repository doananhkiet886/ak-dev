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

CourseSchema.query.sortable = function(req) {
  if (Object.prototype.hasOwnProperty.call(req.query, '_sort')) {
    return this.sort({
      [req.query.column]: [req.query.type]
    })
  }
  return this
}

module.exports = mongoose.model('Course', CourseSchema)
