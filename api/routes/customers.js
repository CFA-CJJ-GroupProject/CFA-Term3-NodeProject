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
      if (!!customer) {
        res.json(customer)
      }
      else {
        res.status(404).json({ error: 'Customer not found' })
      }
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

router
.param('id', (req, res, next, id) => {
    req.itemQuery = Customer.findById(id)
    next()
})

router.route('/customers/:id')
.get((req, res) => {
    req.itemQuery
        .then(customer => {
            res.json(customer)
        })
        .catch(error => {
            res.status(404).json({ error })
        })
})

.patch((req, res) => {
    const newCustomer = req.body
    console.log('LLAMA FACE')

    req.itemQuery.update(newCustomer)
        .then(() => {
            res.json(newCustomer)
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




module.exports = router
