const express = require('express')
const Job = require('../models/job')
const router = express.Router()



// READ OF CRUD
router.get('/jobs', (req, res) => {
    Job.find()
  // What we are wanting to be called
    .then(jobs => {
      res.json(jobs)
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



module.exports = router


//   Job.find().then(jobs => {
//     res.json(jobs)
//   }).then(error => {
//     res.json({error})
//   })
// })

