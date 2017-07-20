import React from 'react'
import Field from './Field'
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
  return (
    <form onSubmit={(event) => submitCreateUser(event, onRegister)}>
      <div className='cu'>
          <Field required='true' type='username' placeholder='Username...' name='username' />
          <Field required='true' type='password' placeholder='Password...' name='password' />
          <Field required='true' type='password' placeholder='Confirm Password...' name='password' />
          <SelectRoleField required='true' name='role' />
      </div>

      <button type='submit' className='cu-button'>Create User</button>
      
    </form>
  )
}
