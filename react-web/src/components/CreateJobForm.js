import React from 'react'
import TextField from './TextField'
import SelectDeliveryField from './SelectDeliveryField'
import readAndClearForm from './readAndClearForm'
import ItemForm from './ItemForm'
import '../style.css'
import AddItem from './AddItem'
import Address from './Address'
import DateTime from './DateTime'

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
          <Address />
          <DateTime />
          <TextField required='true' placeholder='Instructions..' name='pickupInstructions' />
        </div>
        <div className='description'>
          <label>Description of Item(s):</label>
          <TextField required='true' placeholder='Description of all items...' name='descriptionOfGoods' />
        </div>
      </div>

      <div className="cj-right">
        <div className='delivery'>
          <label>Delivery Infomation:</label>
          <Address />
          <DateTime />
          <TextField required='true' placeholder='Instructions..' name='deliveryInstructions' type=''/>
        </div>
        <div id='dimensions' className='dimensions'>
          <label>Item(s) Dimensions:</label>
          <ItemForm />
          <AddItem />
        </div>

          <div className='delivery-type'>
          <label>Delivery Type:</label>
          <SelectDeliveryField required='true' />
          </div>

    </div>
        <button type='submit' className='cj-button'>Create Job</button>
    </form>
  )
}
