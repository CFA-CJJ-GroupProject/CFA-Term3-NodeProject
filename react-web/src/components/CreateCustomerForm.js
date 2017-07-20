import React from 'react'
import Field from './Field'
import TextField from './TextField'
import readAndClearForm from './readAndClearForm'
import SelectStateField from './SelectStateField'

function submitUpdate(event, onUpdate) {
    event.preventDefault()

    const form = event.target
    const userValues = readAndClearForm(form)
    onUpdate(userValues)
}

export default function CreateCustomerForm({
    onUpdate
}) {
  return (
    <form onSubmit={ (event) => submitUpdate(event, onUpdate) }>
      <div className='cj-left'>
          <Field required='true' type='username' placeholder='Username...' name='username' />
          <Field required='true' type='text' placeholder='Contact department...' name='department' />
          <Field required='true' type='tel' placeholder='Phone Number...' name='phoneNumber' />
          <Field required='true' type='email' placeholder='Email...' name='email' />
          <Field required='false' type='tel' placeholder='Fax...' name='fax' />
      </div>
        <div className='cj-right'>
        <div>
          <Field required='true' type='text' placeholder='Street...' name='pickupStreet' />
          <Field required='true' type='text' placeholder='Suburb...' name='pickupSuburb' />
            <ul className='measurements'>
              <li>
                <Field required='true' type='text' placeholder='Postcode...' name='pickupPostcode' />
              </li>
              <li>
                <SelectStateField required='true' name="pickupState"/>
              </li>
            </ul>
      </div>
        </div>
        <div className='cc-middle'>
          <TextField required='false' placeholder='Notes...' name='notes' />
        </div>


      <button type='submit' className='cc-button'>Create Customer</button>
    </form>
  )
}
