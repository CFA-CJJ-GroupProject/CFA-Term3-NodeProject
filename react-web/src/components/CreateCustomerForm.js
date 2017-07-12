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
          <Field placeholder='Username...' name='username' />
          <Field placeholder='Business Name...' name='businessName' />
        <div className=''>
          <Field placeholder='Contact department...' name='department' />
          <Field placeholder='Phone Number...' name='phoneNumber' />
          <Field placeholder='Email...' name='email' />
          <Field placeholder='Fax...' name='fax' />
        </div>
        <div className=''>
          <Field placeholder='Street...' name='pickupStreet' />
          <Field placeholder='Suburb...' name='pickupSuburb' />
          <Field placeholder='Postcode...' name='pickupPostcode' />
          <SelectStateField />
        </div>
        <div className=''>
          <TextField placeholder='Notes...' name='notes' />
        </div>
      </div>


      <button type='submit' className='cu-button'>Create Customer</button>
    </form>
  )
}
