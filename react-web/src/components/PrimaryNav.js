import React from 'react'
import { NavLink } from 'react-router-dom'
import OfficeNav from './OfficeNav'
import DriverNav from './DriverNav'
import ClientNav from './ClientNav'

function DecideNavClass(role) {
  var string = role.toLowerCase();

  if ( string == 'office') {
    return <OfficeNav/>;
  }
  else if ( string == 'driver') {
    return <DriverNav/>;
  }
  else if ( string == 'customer') {
    return <ClientNav/>;
  }
}

export default ({
  role
}) => (

    <nav>
    { DecideNavClass(role) }


    </nav>
)
