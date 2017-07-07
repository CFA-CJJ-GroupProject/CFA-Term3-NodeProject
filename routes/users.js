const express = require('express')
const User = require('../models/user')
const router = express.Router()



// READ OF CRUD
router.get('/users', (req, res) => {
    User.find()
  // What we are wanting to be called
    .then(user => {
      res.json(user)
    })
    // if something goes wrong
    .catch(error => {
      res.status(500).json({ error: error })
    })
})


// Pulling out via given ID,
router.get('/users/:id', (req, res) => {
  const id = req.params.id
  User.findById(id)
    .then (user => {
      res.json(user)
    })
    .catch(error => {
      res.status(500).json({ error: error})
    })
})


// Creating New Job
router.post('/users', (req, res) => {
  const newUser = req.body
  User.create(newUser)
    .then (user => {
      res.json(user)
    })
    .catch(error => {
      res.status(500).json({ error: error})
    })
})



module.exports = router