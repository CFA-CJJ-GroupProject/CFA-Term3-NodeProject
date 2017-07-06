const mongoose = require('./init')

const userSchema = mongoose.Schema({

  userName: String, //Must be unique
  password: String,
  duty: String, //type of user eg. admin,driver,client
  clientProfile: Number

})

const user = mongoose.model('user', userSchema)

module.exports = user
