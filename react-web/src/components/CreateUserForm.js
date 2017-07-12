import React from 'react'
import Field from './Field'
import TextField from './TextField'
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
        <div className='user-info'>
          <label>User Details:</label>

        </div>
        <div className=''>

        </div>
      </div>

      <div className="cu-right">
        <div className=''>

        </div>
        <div className=''>

        </div>
      </div>
        <button type='submit' className='cu-button'>Create User</button>
    </form>
  )
}
