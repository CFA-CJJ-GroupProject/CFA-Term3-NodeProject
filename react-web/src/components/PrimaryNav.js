import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({
}) => (

    <nav>
      <ul class='nav'>
        <li><NavLink exact to='/' activeClassName='active'>Dashboard</NavLink></li>
        <li><NavLink to='/Jobs'  activeClassName='active'>Jobs</NavLink></li>
        <li><NavLink to='/createjob'  activeClassName='active'>Create Job</NavLink></li>
        <li><NavLink to='/users'  activeClassName='active'>Users</NavLink></li>
        <li><NavLink to='/createuser'  activeClassName='active'>Create User</NavLink></li>
        <li><NavLink to='/createcustomer'  activeClassName='active'>Create Customer</NavLink></li>
      </ul>
    </nav>
)
