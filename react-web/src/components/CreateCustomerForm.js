import React from 'react'
import Field from './Field'
import TextField from './TextField'
import readAndClearForm from './readAndClearForm'
import SelectStateField from './SelectStateField'

export default function CreateCustomerForm({onUpdate, id, customer}) {

  function submitUpdate(event, id) {
    event.preventDefault()

    const form = event.target
    const userValues = readAndClearForm(form)
    onUpdate(userValues, id)
  }

  return (
    <form onSubmit={(event) => submitUpdate(event, id)}>
      <div className='cc-form'>
        {console.log("customer from form", customer._id)}
        <div className='cc-left'>
          <label>Company information:</label>
          <Field required='true' type='username' placeholder='Username...' name='username' defaultValue={customer.username}/>
          <Field required='true' type='text' placeholder='Company name' name='businessName' defaultValue={customer.businessName}/>
          <Field required='true' type='text' placeholder='Department' name='department' defaultValue={customer.department}/>
          <Field required='true' type='tel' placeholder='Phone Number...' name='phoneNumber' defaultValue={customer.phoneNumber}/>
          <Field required='true' type='email' placeholder='Email...' name='email' defaultValue={customer.email}/>
          <Field required='false' type='tel' placeholder='Fax...' name='fax' defaultValue={customer.fax}/>
        </div>

        <div className='cc-right'>
          <label>Address:</label>
          <TextField required='false' placeholder='address' name='address' defaultValue={customer.address}/>
        </div>
        <div className='cc-middle'>
          <TextField required='false' placeholder='Notes...' name='notes' defaultValue={customer.notes}/>
        </div>
      </div>
      <button type='submit' className='cc-button'>Create Customer</button>
    </form>
  )
}
