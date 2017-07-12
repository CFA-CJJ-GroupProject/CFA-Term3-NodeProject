import React from 'react'
import Field from './Field'
import TextField from './TextField'
import SelectStateField from './SelectStateField'
import SelectDeliveryField from './SelectDeliveryField'
import readAndClearForm from './readAndClearForm'

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
          <Field placeholder='Street...' name='pickupStreet' />
          <Field placeholder='Suburb...' name='pickupSuburb' />
          <Field placeholder='Postcode...' name='pickupPostcode' />
          <SelectStateField />
          <Field type='date' name='pickupDate' />
          <Field type='time' name='pickupTime' />
          <TextField placeholder='Instructions..' name='pickupInstructions' />
        </div>
        <div className='description'>
          <TextField placeholder='Description of goods...' name='descriptionOfGoods' />
        </div>
      </div>

      <div className="cj-right">
        <div className='delivery'>
          <Field placeholder='Street...' name='deliveryStreet' />
          <Field placeholder='Suburb...' name='deliverySuburb' />
          <Field placeholder='Postcode...' name='deliveryPostcode' />
          <SelectStateField />
          <Field type='date' name='deliveryDate' />
          <Field type='time' name='deliveryTime' />
          <TextField placeholder='Instructions..' name='deliveryInstructions' type=''/>
        </div>
        <div className='product-info'>
          <Field type='number' placeholder='size of mm' name='dimensions{length}' />
          <Field type='number' placeholder='size of mm' name='dimensions{height}' />
          <Field type='number' placeholder='size of mm' name='dimensions{width}' />
          <Field type='number' placeholder='kgs' name='weight' />
          <SelectDeliveryField />
        </div>
      </div>
        <button type='submit' className='cj-button'>Create Job</button>
    </form>
  )
}
