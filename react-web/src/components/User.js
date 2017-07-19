import React from 'react'

export default function User({
  username,
  role
}) {
  return (
    <main>
      <h2>Username: { username } </h2>
      <h4>Role: { role } </h4>
    </main>
  )
}
