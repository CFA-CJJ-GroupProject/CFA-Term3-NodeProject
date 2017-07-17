import React from 'react'
import SelectRoleField from './SelectRoleField'

function submitCreateUser(event, onRegister) {
  event.preventDefault()

  const form = event.target
  const username = form.elements['username'].value
  const password = form.elements['password'].value
  const role = form.elements['role'].value
  onRegister({username, password, role})
}

export default function CreateUserForm({onRegister}) {
  console.log(onRegister)

  return (
    <form onSubmit={(event) => submitCreateUser(event, onRegister)}>
      <label>
        <span>
          Email
        </span>
        <input name='username'/>
      </label>
      <label>
        <span>
          Password
        </span>
        <input type='password' name='password'/>
      </label>
      <label>
        <span>
          Role:
        </span>
        <select name='role'>
          <option value="Driver">Driver</option>
          <option value="Customer">Customer</option>
        </select>
      </label>
      <button>Create User
      </button>
    
    </form>
  )
}
