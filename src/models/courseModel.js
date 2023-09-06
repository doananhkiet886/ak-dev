const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const readPublicFile = require('~/utils/readPublicFile')

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  img: {
    type: Buffer,
    default: readPublicFile('/img/default_course.jpg')
  },
  lessonOrderIds: {
    type: [String],
    default: []
  }
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
