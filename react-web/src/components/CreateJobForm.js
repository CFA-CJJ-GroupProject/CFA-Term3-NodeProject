import React from 'react'
import TextField from './TextField'
import SelectDeliveryField from './SelectDeliveryField'
import readAndClearForm from './readAndClearForm'
import ItemForm from './ItemForm'
import '../style.css'
import AddItem from './AddItem'
import Address from './Address'
import DateTime from './DateTime'
import Field from './Field'

function handleSubmit(event, onCreate) {
    event.preventDefault()

    const form = event.target
    const jobNumber = form.elements['jobNumber'].value
    const pickupStreet = form.elements['pickupStreet'].value
    const pickupSuburb = form.elements['pickupSuburb'].value
    const pickupPostcode = form.elements['pickupPostcode'].value
    const pickupState = form.elements['pickupState'].value
    const pickupDate = form.elements['pickupDate'].value
    const pickupTime = form.elements['pickupTime'].value
    const pickupInstructions = form.elements['pickupInstructions'].value

    const deliveryStreet = form.elements['deliveryStreet'].value
    const deliverySuburb = form.elements['deliverySuburb'].value
    const deliveryPostcode = form.elements['deliveryPostcode'].value
    const deliveryState = form.elements['deliveryState'].value
    const deliveryTime = form.elements['deliveryTime'].value
    const deliveryDate = form.elements['deliveryDate'].value
    const deliveryInstructions = form.elements['deliveryInstructions'].value
    const descriptionOfGoods = form.elements['descriptionOfGoods'].value
    const deliveryType = form.elements['deliveryType'].value
    const weight = form.elements['weight'].value
    const height = form.elements['height'].value
    const width = form.elements['width'].value
    const length = form.elements['lengthField'].value
    const jobValues = readAndClearForm(form)

    console.log('pickupTime', pickupTime)
    console.log('pickupDate', pickupDate)
    console.log('length', length)

    onCreate({
      jobNumber,
      pickupStreet,
      pickupSuburb,
      pickupPostcode,
      pickupState,
      pickupTime,
      pickupDate,
      pickupInstructions,
      deliveryStreet,
      deliverySuburb,
      deliveryPostcode,
      deliveryState,
      deliveryDate,
      deliveryTime,
      deliveryInstructions,
      descriptionOfGoods,
      deliveryType,
      weight,
      height,
      width,
      length
    })
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
          <SelectDeliveryField required='true' name='deliveryType' />
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
