import React from 'react'
import User from './User'

export default function UsersList({
items
}) {
  return (
    <div>
      {
        items.map(item => (
          <User key={item._id} { ...item } />
        ))
      }
    </div>
  )
}
