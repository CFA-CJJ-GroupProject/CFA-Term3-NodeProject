import React from 'react'
import Field from './Field'
import TextField from './TextField'
import SelectStateField from './SelectStateField'
import SelectDeliveryField from './SelectDeliveryField'
import readAndClearForm from './readAndClearForm'
import '../style.css'

function handleSubmit(event, onCreate) {
    event.preventDefault()

    const form = event.target
    const jobNumber = form.elements['jobNumber'].value
    const pickupStreet = form.elements['pickupStreet'].value
    const pickupSuburb = form.elements['pickupSuburb'].value
    const jobValues = readAndClearForm(form)

    onCreate({jobNumber, pickupStreet, pickupSuburb})
}



export default function CreateJobForm({
    onCreate
}) {
  return (
    <form onSubmit={ (event) => handleSubmit(event, onCreate) }>
      <div className='cj-left'>
        <div className='pickup'>
          <label>Pickup Infomation:</label>
          <Field required='true' type='text' placeholder='Job ID' name='jobNumber' />
          <Field required='true' type='text' placeholder='Street...' name='pickupStreet' />
          <Field required='true' type='text' placeholder='Suburb...' name='pickupSuburb' />
          <div className='postcode-state'>
          <div className='postcode'>
          <Field required='false' type='text' placeholder='Postcode...' name='pickupPostcode' />
          </div>
          <div className='state'>
          <SelectStateField required='false' name="pickupState"/>
          </div>
        </div>

          <Field required='false' type='date' name='pickupDate' />
          <Field required='false' type='time' name='pickupTime' />
          <TextField required='false' placeholder='Instructions..' name='pickupInstructions' />
        </div>
        <div className='description'>
          <label>Description of Item(s):</label>
          <TextField required='false' placeholder='Description of goods...' name='descriptionOfGoods' />
        </div>
      </div>

      <div className="cj-right">
        <div className='delivery'>
          <label>Delivery Infomation:</label>
          <Field required='false' type='text' placeholder='Street...' name='deliveryStreet' />
          <Field required='false' type='text' placeholder='Suburb...' name='deliverySuburb' />
          <Field required='false' type='text' placeholder='Postcode...' name='deliveryPostcode' />
          <SelectStateField required='false' name="deliveryState"/>
          <Field required='false' type='date' name='deliveryDate' />
          <Field required='false' type='time' name='deliveryTime' />
          <TextField required='false' placeholder='Instructions..' name='deliveryInstructions' type=''/>
        </div>
        <div className='product-info'>
          <label>Delivery Type and Item(s) Dimensions:</label>
          <Field required='false' type='number' placeholder='size of mm' name='dimensions{length}' />
          <Field required='false' type='number' placeholder='size of mm' name='dimensions{width}' />
          <Field required='false' type='number' placeholder='size of mm' name='dimensions{height}' />
          {/* need to add option to add more for multiple items */}
          <Field required='false' type='number' placeholder='kgs' name='weight' />
          <SelectDeliveryField required='false' />
        </div>
      </div>
        <button type='submit' className='cj-button'>Create Job</button>
    </form>
  )
}



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
