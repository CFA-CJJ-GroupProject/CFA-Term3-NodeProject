import React from 'react'
import JobsPage from '../pages/JobsPage'
import JobCard from '../pages/JobCard'
import Header from './Header'
import HomePage from '../pages/HomePage'
import Footer from './Footer'
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
