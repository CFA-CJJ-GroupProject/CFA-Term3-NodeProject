import api from './init'

export function list() {
  return api.get('/customer').then(res => res.data)
}
