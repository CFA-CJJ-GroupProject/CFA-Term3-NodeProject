import React from 'react'
import Job from './Job'
import Collapsible from 'react-collapsible';
import JobInfo from './JobInfo' // ?

export default function JobsList({
items, username
}) {


  return (
    <div>
      {
        items.map(item => (
          // eslint-disable-next-line
          <Collapsible trigger={ item.deliveryStreet + '  ' + item.deliverySuburb + '  ' + item.deliveryTime + '  ' + '|' + '  ' + item.businessId }>
            <Job key={item._id} { ...item } username={ username } />
          </Collapsible>
        ))
      }
    </div>


  )
}
