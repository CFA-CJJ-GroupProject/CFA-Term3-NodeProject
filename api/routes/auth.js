const express = require('express') 
const authMiddleware = require('../middleware/auth')

const router = express.Router()

// signing in route with post request 
router.post('/auth', authMiddleware.authenticateSignIn, (req, res) => {
  res.json({ user: req.user })
})

// registration
router.post('/auth/register', authMiddleware.register, (req, res) => {
  res.json({ user: req.user })
})

module.exports = router