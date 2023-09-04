const router = require('express').Router()

const meController = require('~/controllers/meController')

router.get('/store/courses', meController.store)
router.get('/trash/courses', meController.trashCourses)
router.get('/store/courses/:id', meController.getCourseById)

router.post('/store/courses/create', meController.createCourse)
router.post('/trash/courses/restore/:id', meController.restoreCourse)
router.post('/trash/courses/restore-by-select', meController.restoreCourseBySelect)

router.put('/store/courses/edit/:id', meController.editCourse)

router.delete('/store/courses/delete/:id', meController.deleteCourse)
router.delete('/trash/courses/force/:id', meController.forceCourse)
router.delete('/store/courses/remove-by-select', meController.removeCoursesBySelect)
router.delete('/store/courses/force-by-select', meController.forceCoursesBySelect)
module.exports = router
