import api from './init'

export function list(username, role) {
  return api.get('/jobs', {
    username,
    role
  })
  .then(res => res.data)
}

export function postJob(job) {
  return api.post('/jobs/new', job).then(res => res.data)
}
