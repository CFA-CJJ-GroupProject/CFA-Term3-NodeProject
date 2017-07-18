import React from 'react'
import OfficeNav from './OfficeNav'
import DriverNav from './DriverNav'
import ClientNav from './ClientNav'

// Testing

const role = 'office'

function DecideNavClass() {
  if ( role === 'office') {
    return <OfficeNav/>;
  }
  else if ( role === 'driver') {
    return <DriverNav/>;
  }
  else if ( role === 'client') {
    return <ClientNav/>;
  }
}

class PrimaryNav extends React.Component {
  render() {
    return (
      <nav>
      { DecideNavClass(role) }
      </nav>
    );
  }
}
export default PrimaryNav
