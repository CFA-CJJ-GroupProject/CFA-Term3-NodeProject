import api from './init'

export function list() {
  return api.get('/customers').then(res => res.data)
}
