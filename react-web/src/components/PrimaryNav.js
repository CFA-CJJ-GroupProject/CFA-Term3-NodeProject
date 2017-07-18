import React from 'react'
import { NavLink } from 'react-router-dom'
import OfficeNav from './OfficeNav'
import DriverNav from './DriverNav'
import ClientNav from './ClientNav'

const role = 'office'

function DecideNavClass() {
  if ( role == 'office') {
    return <OfficeNav/>;
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
