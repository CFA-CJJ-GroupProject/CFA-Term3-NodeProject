const express = require('express')
const Customer = require('../models/customer')
const router = express.Router()



// READ OF CRUD
router.get('/customers', (req, res) => {
    Customer.find()
  // What we are wanting to be called
    .then(customers => {
      res.json(customers)
    })
    // if something goes wrong
    .catch(error => {
      res.status(500).json({ error: error })
    })
})


// Pulling out via given ID,
router.get('/customers/:id', (req, res) => {
  const id = req.params.id
  Customer.findById(id)
    .then (customer => {
      res.json(customer)
    })
    .catch(error => {
      res.status(500).json({ error: error})
    })
})


// Creating New Job
router.post('/customers', (req, res) => {
  const newCustomer = req.body
  Customer.create(newCustomer)
    .then (customer => {
      res.json(customer)
    })
    .catch(error => {
      res.status(500).json({ error: error})
    })
})



module.exports = router