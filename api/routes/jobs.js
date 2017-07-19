const express = require('express')
const Job = require('../models/job')
const router = express.Router()

const username = 'Jay'

// READ OF CRUD
router.get('/jobs', (req, res) => {
    Job.find()
  // What we are wanting to be called
    .then(job => {
      res.json(job)
    })
    // if something goes wrong
    .catch(error => {
      res.status(500).json({ error: error })
    })
})



// Pulling out via given ID,
router.get('/jobs/:id', (req, res) => {
  const id = req.params.id
  Job.findById(id)
    .then (job => {
      res.json(job)
    })
    .catch(error => {
      res.status(500).json({ error: error})
    })
})


// Find job by username
router.get('/driverjobs/:username', (req, res) => {
  const username = 'Jay'
  Job.find().or([{ driverId: username}, { businessId: username }])
    .then (job => {
      res.json(job)
    })
    .catch(error => {
      res.status(500).json({ error: error})
    })

})


// Creating New Job
router.post('/jobs', (req, res) => {
  const newJob = req.body
  Job.create(newJob)
    .then (job => {
      res.json(job)
    })
    .catch(error => {
      res.status(500).json({ error: error})
    })
})

router
.param('id', (req, res, next, id) => {
    req.itemQuery = Job.findById(id)
    next()
})

router.route('/jobs/:id')
.get((req, res) => {
    req.itemQuery
        .then(job => {
            res.json(job)
        })
        .catch(error => {
            res.status(404).json({ error })
        })
})

.put((req, res) => {
    const newJob = req.body
    req.itemQuery.update(newJob)
        .then(() => {
            res.json(newJob)
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
