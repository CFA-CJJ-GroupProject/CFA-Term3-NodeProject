import React from 'react'

export default function Job({
  jobNumber,  //Must be unique

  pickupStreet, 
  pickupSuburb, 
  pickupPostcode, 
  pickupState, 
  pickup, 
  pickupTime, 
  pickupInstructions, 

  deliveryStreet, 
  deliverySuburb, 
  deliveryPostcode, 
  deliveryState, 
  delivery, 
  deliveryTime, 
  deliveryInstructions, 

  descriptionOfGoods, 
  deliveryType, 

  driverId,  // must not be empty
  businessId,  // must not be empty

  status, 

  dimensions,

    weight


}) {

  return (
    <main>
      <h2>{ jobNumber } </h2>
    </main>
  )

}
