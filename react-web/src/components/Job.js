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

}) {

  return (
    <main>
      <h2>Job Number: { jobNumber } </h2>
      <h4>Pickup Address: { pickupStreet } </h4>
      <h4>Pickup Suburb: { pickupSuburb } </h4>
      <h4>Pickup Postcode: { pickupPostcode } </h4>
      <h4>Pickup State: { pickupState } </h4>
      <h4>Pickup Time: { pickupTime } </h4>
      <h4>Pickup Date: { pickupDate } </h4>
      <h4>Pickup Instructions: { pickupInstructions } </h4>
      <h4>Description of Goods: { descriptionOfGoods } </h4>
      <h4>Delivery Street: { deliveryStreet } </h4>
      <h4>Delivery Suburb: { deliverySuburb } </h4>
      <h4>Delivery Postcode: { deliveryPostcode } </h4>
      <h4>Delivery State: { deliveryState } </h4>
      <h4>Delivery Time: { deliveryTime } </h4>
      <h4>Delivery Date: { deliveryDate } </h4>
      <h4>Delivery Instructions: { deliveryInstructions } </h4>
      <h4>Delivery Type: { deliveryType } </h4>
      <h4>Height: { height } </h4>
      <h4>Width: { width } </h4>
      <h4>Length: { length } </h4>
      <h4>Weight: { weight} </h4>
      <h4>DriverID: { driverId } </h4>
      <h4>BusinessID: { businessId } </h4>
      <h4>Status: { status} </h4>   
    </main>
  )

}
