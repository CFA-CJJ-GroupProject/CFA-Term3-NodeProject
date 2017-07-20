const express = require('express')
const User = require('../models/user')
const router = express.Router()

const authMiddleware = require('../middleware/auth')



// READ OF CRUD
router.get('/users', authMiddleware.authenticateJWT, (req, res) => {
console.log("LAMMA",req.user)
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


// Creating New User
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

router
.param('id', (req, res, next, id) => {
    req.itemQuery = User.findById(id)
    next()
})

router.route('/users/:id')
.get((req, res) => {
  req.itemQuery
    .populate('username.user')
    .populate('password.user')
    .then(user => {
      res.json(user)
    })
    .catch(error => {
      res.status(404).json({ error })
    })
})
.put((req, res) => {
  const newUser = req.body
  req.itemQuery.update(newUser)
    .then(() => {
      res.json(newUser)
    })
    .catch(error => {
      res.status(404).json({ error })
    })
})
.delete((req, res) => {
  req.itemQuery.remove()
    .then(() => {
      res.status(204).json({})
    })
    .catch(error => {
      res.status(404).json({ error })
    })
})

//YEAH MAKE A NEW User
router.post('/users/create', authMiddleware.authenticateJWT,(req, res) => {
  if(req.user.role !== 'office') {
    res.json({message: 'f-off!'})
  }

  const newUser = req.body
  const user = new User({
    username: req.body.username,
    role: req.body.role
  })

  User.register(user, req.body.password, (err, user) => {
    if(err) return res.json({err: err})

    res.json(user)

  })
})


module.exports = router
