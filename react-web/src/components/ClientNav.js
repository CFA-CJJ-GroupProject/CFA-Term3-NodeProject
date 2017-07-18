import React from 'react'
import { NavLink } from 'react-router-dom'


class ClientNav extends React.Component {
  render() {
    return (
    <nav>
      <ul className='nav'>
        <li><NavLink exact to='/' activeClassName='active'>Dashboard</NavLink></li>
        <li><NavLink to='/Jobs'  activeClassName='active'>Jobs</NavLink></li>
        <li><NavLink to='/createjob'  activeClassName='active'>Create Job</NavLink></li>
      </ul>
    </nav>
    );
  }
}
export default ClientNav
