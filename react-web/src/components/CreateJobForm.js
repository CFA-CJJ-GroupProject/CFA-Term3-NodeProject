import React from 'react'
import Field from './Field'
import TextField from './TextField'
import SelectStateField from './SelectStateField'
import SelectDeliveryField from './SelectDeliveryField'
import readAndClearForm from './readAndClearForm'
import '../style.css'

function submitCreate(event, onCreate) {
    event.preventDefault()

    const form = event.target
    const jobValues = readAndClearForm(form)
    onCreate(jobValues)
}

export default function CreateJobForm({
    onCreate
}) {
  return (
    <form onSubmit={ (event) => submitCreate(event, onCreate) }>
      <div className='cj-left'>
        <div className='pickup'>
          <Field required='true' placeholder='Street...' name='pickupStreet' />
          <Field required='true' placeholder='Suburb...' name='pickupSuburb' />
          <Field required='true' placeholder='Postcode...' name='pickupPostcode' />
          <SelectStateField required='true' />
          <Field required='true' type='date' name='pickupDate' />
          <Field required='true' type='time' name='pickupTime' />
          <TextField required='false' placeholder='Instructions..' name='pickupInstructions' />
        </div>
        <div className='description'>
          <TextField placeholder='Description of goods...' name='descriptionOfGoods' required='true'/>
        </div>
      </div>

      <div className="cj-right">
        <div className='delivery'>
          <Field required='true' placeholder='Street...' name='deliveryStreet' />
          <Field required='true' placeholder='Suburb...' name='deliverySuburb' />
          <Field required='true' placeholder='Postcode...' name='deliveryPostcode' />
          <SelectStateField required='true' />
          <Field required='true' type='date' name='deliveryDate' />
          <Field required='true' type='time' name='deliveryTime' />
          <TextField required='false' placeholder='Instructions..' name='deliveryInstructions' type=''/>
        </div>
        <div className='product-info'>
          <Field required='true' type='number' placeholder='size of mm' name='dimensions{length}' />
          <Field required='true' type='number' placeholder='size of mm' name='dimensions{height}' />
          <Field required='true' type='number' placeholder='size of mm' name='dimensions{width}' />
          <Field required='true' type='number' placeholder='kgs' name='weight' />
          {/* need to add 'add more' for multiple items */}
          <SelectDeliveryField />
        </div>
      </div>
        <button type='submit' className='cj-button'>Create Job</button>
    </form>
  )
}
