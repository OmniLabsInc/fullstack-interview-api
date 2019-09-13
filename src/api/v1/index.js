const express = require('express')

const router = express.Router()

// load exposed route handlers
router.use('/echo', require('./echo.js'))

module.exports = router
