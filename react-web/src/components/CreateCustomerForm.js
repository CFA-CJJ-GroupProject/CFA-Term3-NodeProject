import React from 'react'
import Field from './Field'
import TextField from './TextField'
import SelectStateField from './SelectStateField'
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
      <div className=''>
          <Field required='true' placeholder='Username...' name='username' />
          <Field required='true' placeholder='Business Name...' name='businessName' />
        <div className=''>
          <Field required='true' placeholder='Contact department...' name='department' />
          <Field required='true' placeholder='Phone Number...' name='phoneNumber' />
          <Field required='true' placeholder='Email...' name='email' />
          <Field required='false' placeholder='Fax...' name='fax' />
        </div>
        <div className=''>
          <Field required='true' placeholder='Street...' name='pickupStreet' />
          <Field required='true' placeholder='Suburb...' name='pickupSuburb' />
          <Field required='true' placeholder='Postcode...' name='pickupPostcode' />
          <SelectStateField required='true' />
        </div>
        <div className=''>
          <TextField required='false' placeholder='Notes...' name='notes' />
        </div>
      </div>


      <button type='submit' className='cu-button'>Create Customer</button>
    </form>
  )
}
