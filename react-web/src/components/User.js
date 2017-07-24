import React from 'react'

export default function User({
  username,
  role
}) {
  return (
    <div className='job-info'>
    <div><p>Username:</p><h4>{username}</h4></div>
    <div><p>Role:</p><h4>{role}</h4></div>
    </div>
  )
}
