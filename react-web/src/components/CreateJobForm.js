import React from 'react'
import Field from './Field'
import TextField from './TextField'
import SelectStateField from './SelectStateField'
import SelectDeliveryField from './SelectDeliveryField'
import readAndClearForm from './readAndClearForm'

// componentDidMount(){
//   fetch('database goes here')
//     .then(res => res.json())
//     .then(data => {
//       this.setState({
//         pickupStreet: data.pickupStreet,
//         pickupSuburb: data.pickupSuburb,
//         pickupPostcode: data.pickupPostcode,
//         pickupState: data.pickupState,
//         pickupDate: data.pickupDate,
//         pickupTime: data.pickupTime,
//         pickupInstructions: data.pickupInstructions,
//         descriptionOfGoods: data.descriptionOfGoods
//
//         deliveryStreet: data.deliveryStreet,
//         deliverySuburb: data.deliverySuburb,
//         deliveryPostcode: data.deliveryPostcode,
//         deliveryState: data.deliveryState,
//         deliveryDate: data.deliveryDate,
//         deliveryTime: data.deliveryTime,
//         deliveryInstructions: data.deliveryInstructions,
//         dimensions{length}: data.dimensions{length},
//         dimensions{width}: data.dimensions{width},
//         imensions{height}: data.dimensions{height},
//       });
//   });
// }

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
          <label>Pickup Infomation:</label>
          <Field type='text' placeholder='Street...' name='pickupStreet' />
          <Field type='text' placeholder='Suburb...' name='pickupSuburb' />
          <div className='postcode-state'>
          <div className='postcode'>
          <Field type='text' placeholder='Postcode...' name='pickupPostcode' />
          </div>
          <div className='state'>
          <SelectStateField name="pickupState"/>
          </div>
        </div>

          <Field type='date' name='pickupDate' />
          <Field type='time' name='pickupTime' />
          <TextField placeholder='Instructions..' name='pickupInstructions' />
        </div>
        <div className='description'>
          <label>Description of Item(s):</label>
          <TextField placeholder='Description of goods...' name='descriptionOfGoods' />
        </div>
      </div>

      <div className="cj-right">
        <div className='delivery'>
          <label>Delivery Infomation:</label>
          <Field type='text' placeholder='Street...' name='deliveryStreet' />
          <Field type='text' placeholder='Suburb...' name='deliverySuburb' />
          <Field type='text' placeholder='Postcode...' name='deliveryPostcode' />
          <SelectStateField name="deliveryState"/>
          <Field type='date' name='deliveryDate' />
          <Field type='time' name='deliveryTime' />
          <TextField placeholder='Instructions..' name='deliveryInstructions' type=''/>
        </div>
        <div className='product-info'>
          <label>Delivery Type and Item(s) Dimensions:</label>
          <Field type='number' placeholder='size of mm' name='dimensions{length}' />
          <Field type='number' placeholder='size of mm' name='dimensions{width}' />
          <Field type='number' placeholder='size of mm' name='dimensions{height}' />
          {/* need to add option to add more for multiple items */}
          <Field type='number' placeholder='kgs' name='weight' />
          <SelectDeliveryField />
        </div>
      </div>
        <button type='submit' className='cj-button'>Create Job</button>
    </form>
  )
}
