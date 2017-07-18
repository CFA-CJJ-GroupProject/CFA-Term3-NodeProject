import React from 'react'
import Top from './Top'
import PrimaryNav from './PrimaryNav'


class Header extends React.Component {
  render() {
    return (
      <div>
      <Top handleLogout={handleLogout} />
      <PrimaryNav role={ role } />
      </div>
        );
      }
    }
export default Header
