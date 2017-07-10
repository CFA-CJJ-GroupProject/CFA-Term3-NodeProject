const passport = require('passport')
const User = require('../models/user')
// Add local strategy
passport.use(User.createStrategy())
function registerMiddleware(req, res, next) {
  console.log('registerMiddleware', req.body)
  const user = new User({
    username: req.body.username
  })
  User.register(user, req.body.password, (error, user) => {
    // Error in registration
    if (error) {
      // Our middleware failed with this error
      next(error)
      return
    }
    // Add our newly created user to the req
    req.user = user
    // Our middleware succeeded with no error
    next()
  })
}
module.exports = {
  initialize: passport.initialize(),
  authenticateSignIn: passport.authenticate('local', { session: false }),
  register: registerMiddleware
} 