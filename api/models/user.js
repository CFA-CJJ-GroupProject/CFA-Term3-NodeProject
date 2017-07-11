const passportLocalMongoose = require('passport-local-mongoose')
const mongoose = require('./init')

const userSchema = mongoose.Schema({
  role: String,
  customerProfile: {type: mongoose.Schema.Types.ObjectId, ref: 'customer'}   
  })

// Add email, password hash, salt, etc fields to our user schema
userSchema.plugin(passportLocalMongoose, {
  usernameLowerCase: true, 
  session: false // Disable sessions as we’ll use JWTs
})

const user = mongoose.model('user', userSchema)

module.exports = user










