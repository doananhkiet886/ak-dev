const router = require('express').Router()

const meController = require('~/controllers/meController')

router.get('/store', meController.store)

module.exports = router
