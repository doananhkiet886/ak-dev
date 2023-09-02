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

// [POST] /me/store/courses/create
const createCourse = async (req, res) => {
  try {
    const course = req.body
    Course.create(course)
    res.redirect('/me/store/courses')
  } catch (error) {
    res.status(500).json({
      message: 'Error Server'
    })
  }
}

module.exports = {
  store,
  createCourse
}
