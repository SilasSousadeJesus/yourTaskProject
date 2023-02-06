const { Router } = require('express')
const userRoutes = require('./userRoutes')
const projectandtask = require('./projectandtaskRoutes')

const router = Router()

router.use(userRoutes)
router.use(projectandtask)

module.exports = router