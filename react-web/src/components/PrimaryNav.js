import React from 'react'
import { NavLink } from 'react-router-dom'
import AdminNav from './AdminNav'
import DriverNav from './DriverNav'
import ClientNav from './ClientNav'

const role = 'client'

function DecideNavClass() {
  if ( role == 'admin') {
    return <AdminNav/>;
  }
  else if ( role == 'driver') {
    return <DriverNav/>;
  }
  else if ( role == 'client') {
    return <ClientNav/>;
  }
}

export default ({
}) => (

    <nav>
    { DecideNavClass(role) }


    </nav>
)
