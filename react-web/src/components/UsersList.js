import React from 'react'
import User from './User'
import Collapsible from 'react-collapsible';

export default function UsersList({
items,
username
}) {
  return (
    <div className='c.users'>
      {
        items.map(item => (
          <Collapsible trigger={item.username}>
            <User key={item._id} { ...item } />
          </Collapsible>
        ))
      }
    </div>
  )
}
