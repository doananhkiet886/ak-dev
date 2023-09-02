const router = require('express').Router()

const meController = require('~/controllers/meController')

router.get('/store/courses', meController.store)
router.post('/store/courses/create', meController.createCourse)

module.exports = router
