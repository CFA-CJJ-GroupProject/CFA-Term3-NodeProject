new user creation by admin user

1. Admin login with auth and token
2. Admin create user page
3. Admin post user#password user#email & token#jwt to *special* create user route
4. Route takes token and validates user is admin
5. If valid admin take new user email & password and create new User
6. Run User.register => save => new user as json

e.g.
# protected route
/api/user/create
