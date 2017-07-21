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
      <div> <p>Pickup Address:</p> <h4> {pickupStreet }<br/>{pickupSuburb }<br/>{pickupState } {pickupPostcode }</h4></div>
      <div> <p>Pickup on:</p> <h4>{pickupDate }<br />{pickupTime }</h4></div>
      <div> <p>Pickup Instructions:</p> <h4> {pickupInstructions }</h4></div>
      <div> <p>Description of Goods:</p> <h4> {descriptionOfGoods }</h4></div>
      <div> <p>Delivery Address:</p> <h4> {deliveryStreet }<br/>{deliverySuburb }<br/>{deliveryState } {deliveryPostcode }</h4></div>
      <div> <p>Deliver on:</p> <h4>{deliveryDate }<br />{deliveryTime }</h4></div>
      <div> <p>Delivery Instructions:</p> <h4> {deliveryInstructions }</h4></div>
      <div> <p>Delivery Type:</p> <h4> {deliveryType }</h4></div>
      <div> <p>L x W x H:</p> <h4 className='dime'>{length } x {width } x {height }</h4></div>
      <div> <p>Weight:</p> <h4> {weight}</h4></div>
      <div> <p>DriverID:</p> <h4> {driverId }</h4></div>
      <div> <p>BusinessID:</p> <h4> {businessId }</h4></div>
      <div> <p>Status:</p> <h4> {status}</h4></div>
    </div>
  )

}
