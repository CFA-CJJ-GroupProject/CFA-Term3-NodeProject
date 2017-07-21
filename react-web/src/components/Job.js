import React from 'react'

export default function Job({
  jobNumber,  //Must be unique

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
  deliveryTime,
  deliveryDate,
  deliveryInstructions,

  descriptionOfGoods,
  deliveryType,

  driverId,
  businessId,

  status,

  dimensions: {
    height,
    length,
    weight,
    width
  } = {}, // Default if dimension is not present

  username,


}) {

  return (
    <div className='job-info'>
       <h2> { jobNumber } </h2>
      <div> <p>Pickup Address:</p> <h4> {pickupStreet }</h4></div>
      <div> <p>Pickup Suburb:</p> <h4> {pickupSuburb }</h4></div>
      <div> <p>Pickup Postcode:</p> <h4> {pickupPostcode }</h4></div>
      <div> <p>Pickup State:</p> <h4> {pickupState }</h4></div>
      <div> <p>Pickup Time:</p> <h4> {pickupTime }</h4></div>
      <div> <p>Pickup Date:</p> <h4> {pickupDate }</h4></div>
      <div> <p>Pickup Instructions:</p> <h4> {pickupInstructions }</h4></div>
      <div> <p>Description of Goods:</p> <h4> {descriptionOfGoods }</h4></div>
      <div> <p>Delivery Street:</p> <h4> {deliveryStreet }</h4></div>
      <div> <p>Delivery Suburb:</p> <h4> {deliverySuburb }</h4></div>
      <div> <p>Delivery Postcode:</p> <h4> {deliveryPostcode }</h4></div>
      <div> <p>Delivery State:</p> <h4> {deliveryState }</h4></div>
      <div> <p>Delivery Time:</p> <h4> {deliveryTime }</h4></div>
      <div> <p>Delivery Date:</p> <h4> {deliveryDate }</h4></div>
      <div> <p>Delivery Instructions:</p> <h4> {deliveryInstructions }</h4></div>
      <div> <p>Delivery Type:</p> <h4> {deliveryType }</h4></div>
      <div> <p>Height:</p> <h4> {height }</h4></div>
      <div> <p>Width:</p> <h4> {width }</h4></div>
      <div> <p>Length:</p> <h4> {length }</h4></div>
      <div> <p>Weight:</p> <h4> {weight}</h4></div>
      <div> <p>DriverID:</p> <h4> {driverId }</h4></div>
      <div> <p>BusinessID:</p> <h4> {businessId }</h4></div>
      <div> <p>Status:</p> <h4> {status}</h4></div>
    </div>
  )

}
