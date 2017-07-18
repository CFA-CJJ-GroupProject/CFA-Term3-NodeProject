import React from 'react'
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

class PrimaryNav extends React.Component {
   role,
  render() {
    return (
      <nav>
      { DecideNavClass(role) }
      </nav>
    );
  }
}
export default PrimaryNav
