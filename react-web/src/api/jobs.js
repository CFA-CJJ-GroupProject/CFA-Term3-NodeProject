import api from './init'

export function list() {
  return api.get('/jobs').then(res => res.data)
}
