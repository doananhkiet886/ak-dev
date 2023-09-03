const Course = require('~/models/courseModel')
const moment = require('moment')

// [GET] /me/store/courses
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

// [GET] /me/store/courses/:id
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
    if (course) {
      return res.json(course)
    }
    res.status(204).json({
      success: false,
      message: 'Not Found'
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error Server'
    })
  }
}

// [POST] /me/store/courses/create
const createCourse = async (req, res) => {
  const newCourse = req.body

  // default when imageId is empty
  if (!newCourse.imageId) {
    newCourse.imageId = newCourse.videoId
  }

  try {
    Course.create(newCourse)
    res.redirect('/me/store/courses')
  } catch (error) {
    res.status(500).json({
      message: 'Error Server'
    })
  }
}

// [PUT] /me/store/courses/edit/:id
const editCourse = async (req, res) => {
  const editedCourse = req.body

  // default when imageId is empty
  if (!editedCourse.imageId) {
    editedCourse.imageId = editedCourse.videoId
  }

  try {
    const course = await Course.updateOne({ _id: req.params.id }, editedCourse)
    if (course) {
      return res.redirect('/me/store/courses')
    }
    res.status(204).json({
      success: false,
      message: 'NOT FOUND'
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'ERROR SERVER'
    })
  }
}

module.exports = {
  store,
  getCourseById,
  createCourse,
  editCourse
}
