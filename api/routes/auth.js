const express = require('express') 
const authMiddleware = require('../middleware/auth')

const router = express.Router()

// signing in route with post request 
router.post('/auth', authMiddleware.authenticateSignIn, 
authMiddleware.signTokenHandler)

// registration
router.post('/auth/register', authMiddleware.register,
authMiddleware.signTokenHandler)

module.exports = router