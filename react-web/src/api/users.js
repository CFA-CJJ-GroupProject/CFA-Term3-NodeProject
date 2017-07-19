import api from './init'

export function list() {
  return api.get('/users').then(res => res.data)
}
