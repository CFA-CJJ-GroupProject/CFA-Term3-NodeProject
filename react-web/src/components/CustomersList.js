import React from 'react'
import Customer from './Customer'
import Collapsible from 'react-collapsible';

export default function CustomersList({
items
}) {
  return (
    <div className='c.customers'>
      {
        items.map(item => (
          <Collapsible trigger={item.username}>
            <Customer key={item._id} { ...item } />
          </Collapsible>
        ))
      }
    </div>
  )
}
