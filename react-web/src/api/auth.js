import axios from 'axios'

export function signIn({ username, password }) {
  return axios.post('/auth', {
    username,
    password
  })
  .then(res => res.data)
}

export function register({ username, password }) {
  return axios.post('/auth/register', {
    username,
    password
  })
  .then(res => res.data)
}