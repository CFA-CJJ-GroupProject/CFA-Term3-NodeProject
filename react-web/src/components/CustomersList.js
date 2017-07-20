import React from 'react'
import Customer from './Customer'

export default function CustomersList({
items
}) {
  return (
    <div>
      {
        items.map(item => (
          <Customer key={item._id} { ...item } />
        ))
      }
    </div>
  )
}
