const passport = require('passport')
const passportJWT = require('passport-jwt')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const jwtSecret = (process.env.JWT_SECRET)
const jwtAlgorithm = 'HS256'


function signTokenHandler(req, res) {
  const user = req.user
  const token = jwt.sign(
    {
      username: user.username,
      role: user.role
    },
    jwtSecret,
    {
      subject: user._id.toString(),
      algorithm: jwtAlgorithm,
      expiresIn: '6h'
    }
  )
  res.json({ token })
}

passport.use(
  User.createStrategy()
)

passport.use(
  new passportJWT.Strategy(
    {
      secretOrKey: jwtSecret,
      session: false,
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeader(),
      algorithms: [jwtAlgorithm]
    }, (jwtPayload, done) => {
      const userID = jwtPayload.sub //User is the subject
      User.findById(userID)
      .then(user => {
        // Finds the user
        if (user) {
          done(null, user)
        }
        // Doesnt find the user
        else {
          done(null, false)
        }
      })
      .catch(error => {
        done(new Error(`Issue finding user with ID: ${userID}`),
        false)
      })
    }
  )
)

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
  authenticateJWT: passport.authenticate('jwt', { session: false }),
  initialize: passport.initialize(),
  signTokenHandler
}
