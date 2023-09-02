const Course = require('~/models/courseModel')
const moment = require('moment')

// [GET] /me/store
const store = async (req, res) => {
  try {
    const courses = await Course.find()
    res.render('./me/store/courses', { courses, moment })
  } catch (error) {
    res.status(500).json({
      message: 'Error Server'
    })
  }
}

module.exports = {
  store
}
