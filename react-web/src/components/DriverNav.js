import React from 'react'
import { NavLink } from 'react-router-dom'


export default ({
}) => (

    <nav>

      <ul class='nav'>
        <li><NavLink exact to='/' activeClassName='active'>Dashboard</NavLink></li>
        <li><NavLink to='/Jobs'  activeClassName='active'>Jobs</NavLink></li>
      </ul>
    </nav>
)
