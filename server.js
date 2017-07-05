const express = require('express')

const server = express()

const Job = require('./models/jobs')

server.get('/jobs', (req, res) => {
  Job.find()
    .then(jobs => {
      res.json(jobs)
    })
    .then(error => {
      res.json({ error })
    })
})


server.get('/setup', (req, res) => {
    const setupData = new Job({ title: 'test for boiler plate setup' })
    console.log('Save')
    setupData.save()
        .then(doc => {
            res.json(doc)
        })
        .catch(error => {
            res.json({ error })
        })
})

server.listen(8000)
