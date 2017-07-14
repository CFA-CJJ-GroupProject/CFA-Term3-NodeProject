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

export default function CreateCustomerForm({
    onCreate
}) {
  return (
    <form onSubmit={ (event) => submitCreate(event, onCreate) }>
      <div className='cj-left'>
          <Field required='true' placeholder='Username...' name='username' />
          <Field required='true' placeholder='Business Name...' name='businessName' />
          <Field required='true' placeholder='Contact department...' name='department' />
          <Field required='true' placeholder='Phone Number...' name='phoneNumber' />
          <Field required='true' placeholder='Email...' name='email' />
          <Field required='false' placeholder='Fax...' name='fax' />
      </div>
        <div className='cj-right'>
          <Field required='true' placeholder='Street...' name='pickupStreet' />
          <Field required='true' placeholder='Suburb...' name='pickupSuburb' />
          <Field required='true' placeholder='Postcode...' name='pickupPostcode' />
          <SelectStateField required='true' />
        </div>
        <div className='cc-middle'>
          <TextField required='false' placeholder='Notes...' name='notes' />
        </div>


      <button type='submit' className='cc-button'>Create Customer</button>
    </form>
  )
}
