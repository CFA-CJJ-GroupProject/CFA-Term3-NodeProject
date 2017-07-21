import api from './init'

export function signIn({ username, password }) {
  return api.post('/auth', {
    username,
    password
  })
  .then(res => res.data)
}

export function register({ username, password, role, customerProfile }) {
  return api.post('/auth/register', {
    username,
    password,
    role,
    customerProfile
  })
  .then(res => res.data)
}
