import React from 'react'
import Job from './Job'

export default function JobsList({
items
}) {
  return (
    <div>
      {
        items.map(item => (
          <Job key={item._id} { ...item } />
        ))
      }
    </div> 
  )
}
