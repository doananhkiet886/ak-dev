const router = require('express').Router()

const meController = require('~/controllers/meController')

router.get('/store/courses', meController.store)
router.get('/store/courses/:id', meController.getCourseById)

router.post('/store/courses/create', meController.createCourse)
router.put('/store/courses/edit/:id', meController.editCourse)

router.delete('/store/courses/delete/:id', meController.deleteCourse)

module.exports = router
