const router = require('express').Router()

const meController = require('~/controllers/meController')

router.get('/store/courses', meController.store)

module.exports = router
