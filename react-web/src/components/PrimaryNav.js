import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({
}) => (

    <nav>
      <ul class='navbutton'>
        <NavLink exact to='/' activeClassName='active'>Dashboard</NavLink>
      </ul>
      <ul class='navbutton'>
        <NavLink to='/Jobs'  activeClassName='active'>Jobs</NavLink>
      </ul>
      <ul>
        <NavLink to='/createjob'  activeClassName='active'>Create Job</NavLink>
      </ul>
      <ul class='navbutton'>
        <NavLink to='/users'  activeClassName='active'>Users</NavLink>
      </ul>
      <ul>
        <NavLink to='/createuser'  activeClassName='active'>Create User</NavLink>
      </ul>
      <ul>
        <NavLink to='/createcustomer'  activeClassName='active'>Create Customer</NavLink>
      </ul>
    </nav>
)
