const express = require('express')
const jobsRouter = require('./routes/jobs')
const authMiddleware = require('./middleware/auth')
const usersRouter = require('./routes/users')
const customersRouter = require('./routes/customers')
const authRouter = require('./routes/auth')
const bodyParser = require('body-parser')


const server = express()


server.use(bodyParser.json())
// connecting passport to express
server.use(authMiddleware.initialize)

// routes
server.use(jobsRouter, usersRouter, customersRouter, authRouter)

const port = 8000
server.listen(port, () => {
  console.log(`Start on localhost:${port}`)
});