const passport = require('passport')
const User = require('../models/user')

passport.use(User.createStrategy())

function registerMiddleware(req, res, next) {
  const user = new User({
    username: req.body.username,
    role: req.body.role 
  })
  User.register(user, req.body.password, (error, user) => {
    if (error) {
      next(error)
      return
    }

    req.user = user 
    next()
  })
}


module.exports = {
  register: registerMiddleware,
  authenticateSignIn: passport.authenticate('local', { session: false }),
  initialize: passport.initialize(),
}