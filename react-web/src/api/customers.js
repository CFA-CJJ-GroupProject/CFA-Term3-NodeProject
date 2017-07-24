import api from './init'

export function list() {
  return api.get('/customers').then(res => res.data)
}

export function find(id) {
  console.log('finding', id)
  return api.get(`/customers/${id}`).then(res => res.data)
}

export function updateCustomerDetail(customer, id) {
  console.log('the id is ',id)
  console.log('the customer is ', customer)
  return api.patch(`/customers/${id}`, customer).then(res => res.data)
}
