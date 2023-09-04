const Course = require('~/models/courseModel')
const moment = require('moment')

// [GET] /me/trash/courses
const trashCourses = async (req, res) => {
  try {
    const courses = await Course.findWithDeleted({ deleted: true })
    res.render('./me/trash/courses', { courses, moment })
  } catch (error) {
    res.status(500).json({
      message: 'Error Server'
    })
  }
}

// [POST] /me/trash/courses/restore/:id
const restoreCourse = async (req, res) => {
  try {
    await Course.restore({ _id: req.params.id })
    res.redirect('/me/trash/courses')
  } catch (error) {
    res.status(500).json({
      message: 'Error Server'
    })
  }
}

// [DELETE] /me/trash/courses/force/:id
const forceCourse = async (req, res) => {
  try {
    await Course.deleteOne({ _id:  req.params.id })
    res.redirect('/me/trash/courses')
  } catch (error) {
    res.status(500).json({
      message: 'Error Server'
    })
  }
}

// [DELETE] /me/store/courses/force-by-select
const forceCoursesBySelect = async (req, res) => {
  const ids = req.body
  try {
    await Course.deleteMany({
      _id: {
        $in: ids
      }
    })
    res.redirect('back')
  } catch (error) {
    res.redirect('back')
  }
}
module.exports = {
  trashCourses,
  restoreCourse,
  forceCourse,
  forceCoursesBySelect
}