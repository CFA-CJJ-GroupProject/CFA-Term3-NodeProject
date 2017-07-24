import React from 'react'
import TextField from './TextField'
import SelectDeliveryField from './SelectDeliveryField'
import readAndClearForm from './readAndClearForm'
import ItemForm from './ItemForm'
import Field from './Field'
import SelectStateField from './SelectStateField'

function handleSubmit(event, onRegister) {
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
    const username = sessionStorage.getItem('username')
    const businessId = username

    onRegister({
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
      length,
      businessId,
    })
}

export default function CreateJobForm({
    onRegister,
    job
}) {

  
  return (
    <form onSubmit={ (event) => handleSubmit(event, onRegister) }>
      <div className='cj-left'>
        <div className='pickup'>
          <label>Pickup Infomation:</label>
          <Field required='true' type='text' placeholder='Job ID' name='jobNumber'  />
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
        <div>
          <ul className='measurements'>
            <li>
              <Field required='true' type='date' name='pickupDate' />
            </li>

            <li className='time'>
              <Field required='true' type='time' name='pickupTime' />
            </li>
          </ul>
        </div>
          <TextField required='true' placeholder='Instructions..' name='pickupInstructions' />
        </div>
        <div className='description'>
          <label>Description of Item(s):</label>
          <TextField required='true' placeholder='Description of all items...' name='descriptionOfGoods'/>
          </div>
        </div>
      <div className="cj-right">
        <div className='delivery'>
          <label>Delivery Infomation:</label>
          <div>
            <Field required='true' type='text' placeholder='Street...' name='deliveryStreet' />
            <Field required='true' type='text' placeholder='Suburb...' name='deliverySuburb' />
              <ul className='measurements'>
                <li>
                  <Field required='true' type='text' placeholder='Postcode...' name='deliveryPostcode' />
                </li>
                <li>
                  <SelectStateField required='true' name="deliveryState"/>
                </li>
              </ul>
        </div>
        <div>
          <ul className='measurements'>
            <li>
              <Field required='true' type='date' name='deliveryDate' />
            </li>

            <li className='time'>
              <Field required='true' type='time' name='deliveryTime' />
            </li>
          </ul>
        </div>
          <TextField required='true' placeholder='Instructions..' name='deliveryInstructions' />
        </div>
        <div id='dimensions' className='dimensions'>
          <label>Item(s) Dimensions:</label>
             <div>
        <ul className='measurements'>
          <li>
            <label>L</label>
            <Field required='true' type='number' placeholder='mm' name='lengthField' />
          </li>

          <li>
            <label>W</label>
            <Field required='true' type='number' placeholder='mm' name='width' />
          </li>

          <li>
            <label>H</label>
            <Field required='true' type='number' placeholder='mm' name='height' />
            
          </li>
          <li>
            <label>KGS</label>
            <Field required='true' type='number' placeholder='kgs' name='weight' />
          </li>
        </ul>
      </div>
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
