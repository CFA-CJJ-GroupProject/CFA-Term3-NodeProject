import axios from 'axios'

export function signIn({ username, password }) {
  return axios.post('/auth', {
    username,
    password
  })
  .then(res => res.data)
}

export function register({ username, password, role, customerProfile }) {
  return axios.post('/auth/register', {
    username,
    password,
    role,
    customerProfile
  })
  .then(res => res.data)
}
