import React from 'react'
import { NavLink } from 'react-router-dom'


class DriverNav extends React.Component {
  render() {
    return (
    <nav>
      <ul class='nav'>
        <li><NavLink exact to='/' activeClassName='active'>Dashboard</NavLink></li>
        <li><NavLink to='/Jobs'  activeClassName='active'>Jobs</NavLink></li>
      </ul>
    </nav>
    );
  }
}
export default DriverNav

