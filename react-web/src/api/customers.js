import api from './init'

export function list() {
  return api.get('/customers').then(res => res.data)
}

export function postCustomer(customer, id) {
  console.log('the id is ',id)
  console.log('the customer is ', customer)
  return api.post(`/customers`, customer).then(res => res.data)
}