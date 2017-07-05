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
    const setupData = new Job({ 
      jobNumber: "ASP3734ytiuwrgiu",

      pickupAddress: "123 fake street",
      pickupDate: 12/02/2016,
      pickupTime: 1245,
      pickupInstructions: "Avoid Jay in the morning before he has had a cigarette",

      deliveryAddress: "TEST DUMMY DATA",
      deliveryDate: 13/02/2016,
      deliveryTime: 1200,
      deliveryInstructions: "Avoid Jack before he has had a coffee and possibly a cigarette",

      descriptionOfGoods: "TEST DUMMY DATA",
      deliveryType: "TEST DUMMY DATA",

      driverId: 5, // must not be empty
      businessId: 5, // must not be empty

      status: "TEST DUMMY DATA",

      dimensions: {
        height: 5,
        length: 5,
        width: 5
      }, 

      weight: 5

    })


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
