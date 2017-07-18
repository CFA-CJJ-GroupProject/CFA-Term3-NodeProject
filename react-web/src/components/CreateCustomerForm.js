import React from 'react'
import Field from './Field'
import TextField from './TextField'
import Address from './Address'
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
          <Field required='true' type='username' placeholder='Username...' name='username' />
          <Field required='true' type='text' placeholder='Contact department...' name='department' />
          <Field required='true' type='tel' placeholder='Phone Number...' name='phoneNumber' />
          <Field required='true' type='email' placeholder='Email...' name='email' />
          <Field required='false' type='tel' placeholder='Fax...' name='fax' />
      </div>
        <div className='cj-right'>
          <Address />
        </div>
        <div className='cc-middle'>
          <TextField required='false' placeholder='Notes...' name='notes' />
        </div>


      <button type='submit' className='cc-button'>Create Customer</button>
    </form>
  )
}
