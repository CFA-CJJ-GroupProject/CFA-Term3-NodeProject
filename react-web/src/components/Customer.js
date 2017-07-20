import React from 'react'

export default function Customer({
  username, // Identifier for user.
  businessName,
  pointOfContacts:{
    department,
    phoneNumber,
    email,
    fax
  } = {},
  address,
  notes,
}) {

  return (
    <main>
      <h2>Username: { username } </h2>
      <h4>Business Name: { businessName } </h4>
      <h4>Department: { department } </h4>
      <h4>Phone Number: { phoneNumber } </h4>
      <h4>Email: { email } </h4>
      <h4>Fax: { fax } </h4>
      <h4>Address: { address } </h4>
      <h4>Notes: { notes } </h4>

    </main>
  )

}
