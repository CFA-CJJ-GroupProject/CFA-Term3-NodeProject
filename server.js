const express = require('express')
const jobsRouter = require('./routes/jobs')
const bodyParser = require('body-parser')


const server = express()


server.use(bodyParser.json())
server.use(jobsRouter)

const port = 8000
server.listen(port, () => {
  console.log(`Start on localhost:${port}`)
});
