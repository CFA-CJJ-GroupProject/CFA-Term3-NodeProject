const mongoose = require('./init')

const userSchema = mongoose.Schema({

  username: String, //Must be unique
  password: String,
  role: String, //type of user eg. admin,driver,client
  customerProfile: String
})

const user = mongoose.model('user', userSchema)

module.exports = user
