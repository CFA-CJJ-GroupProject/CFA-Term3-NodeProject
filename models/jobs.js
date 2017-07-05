const mongoose = require('./init')

const jobSchema = mongoose.Schema({
    title: String
})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job