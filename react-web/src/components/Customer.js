import React from 'react'

export default function Customer({
  username, // Identifier for user.
  businessName,
  // pointOfContacts:{
    department,
    phoneNumber,
    email,
    fax,
    address,
  // } = {},
  // customerStreet,
  // customerSuburb,
  // customerState,
  // customerPostcode,
  notes,
}) {

  return (
    <div className='job-info'>
       <h2> { username } </h2>
      <div> <p>Username:</p> <h4>{ username }</h4></div>
      <div> <p>Business Name:</p> <h4>{ businessName }</h4></div>
      <div> <p>Department:</p><h4>{ department }</h4></div>
      <div> <p>Address:</p> <h4> {address} </h4></div>
      <div> <p>Phone Number: </p> <h4>{ phoneNumber }</h4></div>
      <div> <p>Email:</p><h4>{ email }</h4></div>
      <div> <p>Fax:</p> <h4> { fax }</h4></div>
      <div> <p>Notes:</p> <h4> { notes }</h4></div>
    </div>
  )

}
