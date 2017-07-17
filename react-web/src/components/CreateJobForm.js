import React from 'react'
import Field from './Field'
import TextField from './TextField'
import SelectStateField from './SelectStateField'
import SelectDeliveryField from './SelectDeliveryField'
import readAndClearForm from './readAndClearForm'
import ItemForm from './ItemForm'
import '../style.css'

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
          <Field required='true' type='text' placeholder='Street...' name='pickupStreet' />
          <Field required='true' type='text' placeholder='Suburb...' name='pickupSuburb' />
          <div className='postcode-state'>
          <div className='postcode'>
          <Field required='true' type='text' placeholder='Postcode...' name='pickupPostcode' />
          </div>
          <div className='state'>
          <SelectStateField required='true' name="pickupState"/>
          </div>
        </div>

          <Field required='true' type='date' name='pickupDate' />
          <Field required='true' type='time' name='pickupTime' />
          <TextField required='true' placeholder='Instructions..' name='pickupInstructions' />
        </div>
        <div className='description'>
          <label>Description of Item(s):</label>
          <TextField required='true' placeholder='Description of goods...' name='descriptionOfGoods' />
        </div>
      </div>

      <div className="cj-right">
        <div className='delivery'>
          <label>Delivery Infomation:</label>
          <Field required='true' type='text' placeholder='Street...' name='deliveryStreet' />
          <Field required='true' type='text' placeholder='Suburb...' name='deliverySuburb' />
          <Field required='true' type='text' placeholder='Postcode...' name='deliveryPostcode' />
          <SelectStateField required='true' name="deliveryState"/>
          <Field required='true' type='date' name='deliveryDate' />
          <Field required='true' type='time' name='deliveryTime' />
          <TextField required='true' placeholder='Instructions..' name='deliveryInstructions' type=''/>
        </div>
        <div className='dimensions'>
          <label>Item(s) Dimensions:</label>
          <ItemForm />
          <button type='button'>add item</button>

          <div className='delivery-type'>
          <label>Delivery Type:</label>
          <SelectDeliveryField required='true' />
          </div>
      </div>
    </div>
        <button type='submit' className='cj-button'>Create Job</button>
    </form>
  )
}
