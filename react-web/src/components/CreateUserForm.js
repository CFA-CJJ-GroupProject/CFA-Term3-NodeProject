import React from 'react'
import Field from './Field'
import SelectRoleField from './SelectRoleField'
import readAndClearForm from './readAndClearForm'

function submitCreate(event, onCreate) {
    event.preventDefault()

    const form = event.target
    const userValues = readAndClearForm(form)
    onCreate(userValues)
}

export default function CreateUserForm({
    onCreate
}) {
  return (
    <form onSubmit={ (event) => submitCreate(event, onCreate) }>
      <div className='cu-left'>
        <div className=''>
          <Field required='true' type='username' placeholder='Username...' name='username' />
        </div>
        <div className=''>
          <Field required='true' type='password' placeholder='Password...' name='password' />
        </div>
        <div className=''>
          <Field required='true' type='password' placeholder='Confirm Password...' name='password' />
        </div>
        <div className=''>
          <SelectRoleField required='true' placeholder='' name='role' />
        </div>
      </div>

      <button type='submit' className='cu-button'>Create User</button>
    </form>
  )
}
