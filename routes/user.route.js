const express = require('express')
const router = express.Router()
const { TestUser, TestUserPost } = require('../controller/user.controller')
const { PrintSuccess, PrintSuccessRoute, CheckPostReq } = require('../middleware/middleware')

// Application level middleware
// biasanya untuk cek token
router.use(PrintSuccess)

// Route level middleware
// biasanya untuk cek payload (name, address)
router.get('/', PrintSuccessRoute, TestUser)
router.post('/', CheckPostReq, TestUserPost)

module.exports = router