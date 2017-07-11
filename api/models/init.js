const dotenv = require('dotenv').config()

const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect(process.env.DB_INFO)

const db = mongoose.connection

module.exports = mongoose