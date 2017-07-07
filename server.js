const express = require('express')
const jobsRouter = require('./routes/jobs')
const usersRouter = require('./routes/users')
const customersRouter = require('./routes/customers')
const bodyParser = require('body-parser')


const server = express()


server.use(bodyParser.json())
server.use(jobsRouter, usersRouter, customersRouter)

const port = 8000
server.listen(port, () => {
  console.log(`Start on localhost:${port}`)
});