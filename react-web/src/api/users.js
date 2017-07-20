import api from './init'

export function list() {
  return api.get('/users').then(res => res.data)
}

export function postUser(user) {
  return api.post('/users/create', user).then(res => res.data)
}
